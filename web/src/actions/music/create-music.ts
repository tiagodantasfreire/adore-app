'use server'

import { apiFetch } from '@/lib/apiFetch'
import { CreateMusic } from '@/types/music'

export async function createMusic(musicData: CreateMusic) {
  return await apiFetch(`/music/${musicData.ministryId}`, {
    method: 'POST',
    body: JSON.stringify(musicData),
  })
}
