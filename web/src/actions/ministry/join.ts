'use server'
import { apiFetch } from '@/lib/apiFetch'
import { Ministry } from '@/types/ministry'

type JoinMinistryResponse = {
  ministry: Ministry
}

export async function joinMinistry(accessCode: string) {
  return await apiFetch<JoinMinistryResponse>(`/ministry/${accessCode}/join`, {
    method: 'POST',
  })
}
