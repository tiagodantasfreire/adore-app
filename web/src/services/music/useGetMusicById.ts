import { useQuery } from '@tanstack/react-query'

import { useMinistry } from '@/contexts/ministry'
import api from '@/lib/api'

// {
//   "id": 26,
//   "name": "Puttin' on the Ritz",
//   "artist": "David Bowie",
//   "tone": "A",
//   "date": "2025-04-23T21:30:29.779Z",
//   "createdAt": "2025-04-24T18:29:43.130Z",
//   "updatedAt": "2025-04-24T18:29:43.293Z",
//   "userId": 1,
//   "ministryId": 1,
//   "singerId": 1,
//   "createdBy": {
//       "firstName": "Tiago",
//       "lastName": "Dantas",
//       "email": "tiago.freire.2002@gmail.com"
//   },
//   "singer": {
//       "id": 1,
//       "name": "Carol",
//       "createdAt": "2025-04-24T18:12:46.204Z",
//       "updatedAt": "2025-04-24T18:12:58.343Z",
//       "ministryId": 1
//   }
// }

type GetMusicByIdResponse = {
  id: number
  name: string
  artist: string
  tone: string
  date: string
  createdAt: string
  updatedAt: string
  userId: number
  ministryId: number
  singerId: number
  createdBy: {
    firstName: string
    lastName: string
    email: string
  }
  singer: {
    id: number
    name: string
    createdAt: string
    updatedAt: string
    ministryId: number
  }
}

export function useGetMusicById() {
  const { ministryId, musicId } = useMinistry()

  return useQuery({
    queryKey: ['music', musicId],
    queryFn: () => api.get(`/ministry/${ministryId}/music/${musicId}`),
    select: (data) => data.data as GetMusicByIdResponse,
    enabled: !!musicId && !!ministryId,
  })
}
