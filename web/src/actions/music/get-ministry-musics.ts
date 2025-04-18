'use server'

import api from '@/lib/api'
import { Music } from '@/types/music'

export async function getMinistryMusics(ministryId: string) {
  try {
    const response = await api.get<Music[]>(`/music/${ministryId}`)

    return response.data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }

    throw new Error('Ocorreu um erro ao tentar obter as músicas do ministério')
  }
}
