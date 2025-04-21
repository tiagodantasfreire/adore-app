import { Singer } from './singer'

export interface CreateMusic {
  name: string
  artist: string
  tone: string
  date: Date
  ministryId: string
  singerId?: number
}

export interface Music {
  artist: string
  createdAt: string
  date: string
  id: string
  ministryId: string
  name: string
  singer: Singer
  tone: string
  updatedAt: string
  userId: string
}
