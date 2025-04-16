export interface CreateMusic {
  name: string
  artist: string
  singer: string
  tone: string
  date: Date
  serviceName?: string
  ministryId: string
}

export interface Music {
  artist: string
  createdAt: string
  date: string
  id: string
  ministryId: string
  name: string
  serviceName: string | null
  singer: string
  tone: string
  updatedAt: string
  userId: string
}
