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

  const isProduction = process.env.NODE_ENV === 'production'
  const domain = env.WEB_URL

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
    cache: 'no-store',
  })

  if (!res.ok) return null

  return res.json()
}
