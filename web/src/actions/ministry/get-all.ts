'use server'

import { apiFetch } from '@/lib/apiFetch'
import { Ministry } from '@/types/ministry'

export async function getAllMinistries() {
  return await apiFetch<Ministry[]>('/ministry')
}
