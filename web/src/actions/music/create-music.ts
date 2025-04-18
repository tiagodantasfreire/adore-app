'use server'

import api from '@/lib/api'
import { CreateMusic, Music } from '@/types/music'

export async function createMusic(musicData: CreateMusic) {
  try {
    const response = await api.post<Music>(`/music/${musicData.ministryId}`, {
      name: musicData.name,
      artist: musicData.artist,
    })

    return response.data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    }

    throw new Error('Ocorreu um erro ao tentar criar a música')
  }
}
