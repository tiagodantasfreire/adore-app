'use server'
import { apiFetch } from '@/lib/apiFetch'
import { Ministry } from '@/types/ministry'

export async function getMinistry(ministryId: string) {
  return await apiFetch<Ministry>(`/ministry/${ministryId}`, {
    method: 'GET',
  })
}
