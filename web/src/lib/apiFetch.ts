import { env } from './env'
import { cookies as nextCookies } from 'next/headers'
export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const baseUrl = env.BACKEND_URL

  const cookies = await nextCookies()
  const sessionToken = cookies.get('session')?.value

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }

  if (sessionToken) {
    headers.Authorization = `Bearer ${sessionToken}`
  }

  const response = await fetch(`${baseUrl}${endpoint}`, {
    ...options,
    headers,
  })

  if (!response.ok) {
    const errorData = await response.json()
    const errorMessage = errorData.message

    throw new Error(errorMessage)
  }

  return response.json()
}
