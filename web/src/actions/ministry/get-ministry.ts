'use server'

import api from '@/lib/api'
import { Ministry } from '@/types/ministry'

export async function getMinistry(ministryId: string) {
  try {
    const response = await api.get<Ministry>(`/ministry/${ministryId}`)

    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
