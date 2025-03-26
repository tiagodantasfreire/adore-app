import { User } from '@/types/user'
import { cookies } from 'next/headers'

export async function getUser(): Promise<User | null> {
  const cookieStore = await cookies()
  const token = cookieStore.get('auth-token')?.value

  if (!token) return null

  const res = await fetch('http://localhost:3000/auth/me', {
    headers: { Authorization: `Bearer ${token}` },
    cache: 'no-store'
  })  

  if (!res.ok) return null

  return res.json()
}
