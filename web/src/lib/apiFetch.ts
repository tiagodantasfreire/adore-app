import { env } from './env'

export async function apiFetch<T>(
  endpoint: string,
  options: RequestInit = {},
): Promise<T> {
  const baseUrl = env.BACKEND_URL

  const response = await fetch(`${baseUrl}${endpoint}`, {
    ...options,
    headers: { 'Content-Type': 'application/json' },
  })

  if (!response.ok) {
    const errorData = await response.json()
    const errorMessage = errorData.message
    throw new Error(errorMessage)
  }

  return response.json()
}
