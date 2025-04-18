'use server'

import { api } from '@/lib/api'
import { Ministry } from '@/types/ministry'

export async function joinMinistry(accessCode: string) {
  try {
    const response = await api.post<Ministry>(`/ministry/${accessCode}/join`)

    return response.data
  } catch (error) {
    console.log(error)
    throw error
  }
}
