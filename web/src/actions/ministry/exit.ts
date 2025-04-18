'use server'

import api from '@/lib/api'

export async function exitMinistry(ministryId: string) {
  try {
    const response = await api.post(`/ministry/${ministryId}/exit`)

    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
