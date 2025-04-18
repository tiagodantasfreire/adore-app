'use server'

import api from '@/lib/api'
import { CreateMinistry, Ministry } from '@/types/ministry'

export async function createMinistry({ name }: CreateMinistry) {
  try {
    const response = await api.post<Ministry>('/ministry', {
      name,
    })

    return response.data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }

    throw new Error('Ocorreu um erro ao tentar criar o ministério')
  }
}
