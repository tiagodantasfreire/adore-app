'use server'

import { cookies as nextCookies } from 'next/headers'
import { User } from '@/types/user'

type SessionUser = {
  id: string
  firstName: string
  lastName: string
};

export type Session = {
  user: SessionUser
  accessToken: string
  refreshToken: string
};

export async function deleteSession() {
  const cookies = await nextCookies()
  cookies.delete('session')
}

export async function getUser(): Promise<User | null> {
  const cookies = await nextCookies()
  const token = cookies.get('session')?.value

  if (!token) return null

  const res = await fetch('http://localhost:3000/auth/me', {
    headers: { Authorization: `Bearer ${token}` },
    cache: 'no-store'
  })

  if (!res.ok) return null

  return res.json()
}