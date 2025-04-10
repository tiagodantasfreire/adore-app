'use server'

import { apiFetch } from '@/lib/apiFetch'
import { Ministry } from '@/types/ministry'

export async function getMinistries(ministryName?: string | null) {
  const params = new URLSearchParams()

  if (ministryName) {
    params.set('ministryName', ministryName)
  }

  return await apiFetch<Ministry[]>(`/ministry?${params.toString()}`)
}
