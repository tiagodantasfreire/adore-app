'use server'

import api from '@/lib/api'
import { Ministry } from '@/types/ministry'

export async function getMinistry(ministryId: string) {
  try {
    const response = await api.get<Ministry>(`/ministry/${ministryId}`)

    return response.data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }

    throw new Error('Ocorreu um erro ao tentar obter o ministério')
  }
}
