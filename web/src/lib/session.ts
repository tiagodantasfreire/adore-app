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

export async function deleteSession() {
  const cookies = await nextCookies()

  cookies.delete({
    name: 'session',
    path: '/',
    domain: env.WEB_URL ? new URL(env.WEB_URL).hostname : undefined,
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
  })

  return { success: true }
}

export async function getUser(): Promise<User | null> {
  const cookies = await nextCookies()
  const token = cookies.get('session')?.value

  if (!token) return null

  const res = await fetch(`${env.BACKEND_URL}/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: 'no-store',
  })

  if (!res.ok) return null

  return res.json()
}
