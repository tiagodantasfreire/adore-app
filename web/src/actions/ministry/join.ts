'use server'
import { apiFetch } from '@/lib/apiFetch'
import { getUser } from '@/lib/session'
import { Ministry } from '@/types/ministry'

type JoinMinistryResponse = {
  ministry: Ministry
}

export async function joinMinistry(ministryId: string) {
  const user = await getUser()

  if (!user) {
    throw new Error('User not found')
  }

  return await apiFetch<JoinMinistryResponse>(`/ministry/${ministryId}/join`, {
    method: 'POST',
    body: JSON.stringify({ userId: user.id }),
  })
}
