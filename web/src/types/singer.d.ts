export interface Singer {
  id: number
  name: string
  ministryId: string
  createdAt: string
  updatedAt: string
  _count: {
    musics: number
  }
}
