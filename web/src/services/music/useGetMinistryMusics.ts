'use client'

import { useQuery } from '@tanstack/react-query'
import { Music } from '@/types/music'
import api from '@/lib/api'

export function useGetMinistryMusics(ministryId: string) {
  return useQuery({
    queryKey: ['ministryMusics', ministryId],
    queryFn: () => api.get<Music[]>(`/ministry/${ministryId}/music`),
    select(data) {
      return data.data
    },
  })
}
