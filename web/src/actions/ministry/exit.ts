'use server'

import api from '@/lib/api'

export async function exitMinistry(ministryId: string) {
  try {
    const response = await api.post(`/ministry/${ministryId}/exit`)

    return response.data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }

    throw new Error('Ocorreu um erro ao tentar sair do ministério')
  }
}
