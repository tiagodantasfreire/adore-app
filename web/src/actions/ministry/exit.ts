'use server'
import { apiFetch } from '@/lib/apiFetch'
import { getUser } from '@/lib/session'

export async function exitMinistry(ministryId: string) {
  const user = await getUser()

  if (!user) {
    throw new Error('User not found')
  }

  return await apiFetch<void>(`/ministry/${ministryId}/exit`, {
    method: 'POST',
    body: JSON.stringify({ userId: user.id }),
  })
}
