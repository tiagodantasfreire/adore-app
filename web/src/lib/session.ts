'use server'

import { cookies as nextCookies } from 'next/headers'
import { User } from '@/types/user'
import { env } from './env'

type SessionUser = {
  id: string
  firstName: string
  lastName: string
}

export type Session = {
  user: SessionUser
  accessToken: string
  refreshToken: string
}

const isProduction = process.env.NODE_ENV === 'production'
const domain = env.WEB_URL

export async function deleteSession() {
  const cookies = await nextCookies()

  cookies.delete({
    name: 'session',
    path: '/',
    secure: isProduction,
    domain,
  })

  return { success: true }
}

export async function getUser(): Promise<User | null> {
  const cookies = await nextCookies()
  const token = cookies.get('session')?.value

  if (!token) return null

  const res = await fetch(`${env.BACKEND_URL}/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: 'force-cache',
  })

  if (!res.ok) return null

  return res.json()
}

export async function updateSession(newMinistryId: number | null) {
  try {
    const webUrl =
      env.WEB_URL === 'localhost' ? 'http://localhost:3000' : env.WEB_URL

    const cookies = await nextCookies()
    const token = cookies.get('session')?.value

    const res = await fetch(`${webUrl}/api/auth/update-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ministryId: newMinistryId,
        token,
      }),
    })

    if (!res.ok) {
      throw new Error('Failed to update session', { cause: res })
    }

    const data = await res.json()

    cookies.set({
      name: 'session',
      value: data.newToken,
      path: '/',
      secure: isProduction,
      domain,
    })
  } catch (error) {
    console.error('Failed to update session:', error)
    return { success: false }
  }
}
