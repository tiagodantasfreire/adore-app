'use server'

import { cookies as nextCookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { jwtVerify, SignJWT } from 'jose'

export type Session = {
  user: {
    id: string;
    firstName: string;
    lastName: string;
  };
  accessToken: string;
  refreshToken: string;
};

const secretKey = process.env.SESSION_SECRET_KEY!
const encodedKey = new TextEncoder().encode(secretKey)

export async function createSession(payload: Session) {
  const expiredAt = new Date(
    Date.now() + 7 * 24 * 60 * 60 * 1000
  )

  console.log(expiredAt)
  
  const session = await new SignJWT(payload)
  .setProtectedHeader({ alg: 'HS256' })
  .setIssuedAt()
  .setExpirationTime('7d')
  .sign(encodedKey)
  
  console.log(expiredAt)

  const cookies = await nextCookies()

  cookies.set('session', session, {
    httpOnly: true,
    secure: true,
    expires: expiredAt,
    sameSite: 'lax',
    path: '/',
  })
}

export async function getSession() {
  const cookies = await nextCookies()
  const sessionCookie = cookies.get('session')?.value

  if (!sessionCookie) return null

  try {
    const { payload } = await jwtVerify(
      sessionCookie,
      encodedKey,
      {
        algorithms: ['HS256'],
      }
    )

    return payload as Session
  } catch (err) {
    console.error('Failed to verify the session', err)
    redirect('/auth/sigin')
  }
}