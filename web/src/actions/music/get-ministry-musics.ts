'use server'

import { apiFetch } from '@/lib/apiFetch'
import { Music } from '@/types/music'

export async function getMinistryMusics(ministryId: string) {
  return await apiFetch<Music[]>(`/music/${ministryId}`)
}
