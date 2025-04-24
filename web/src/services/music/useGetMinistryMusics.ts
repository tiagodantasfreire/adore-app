'use client'

import { useQuery } from '@tanstack/react-query'

import { Music } from '@/types/music'
import api from '@/lib/api'
import { useMinistry } from '@/contexts/ministry'

export function useGetMinistryMusics() {
  const { ministryId, singerId } = useMinistry()

  return useQuery({
    queryKey: ['ministryMusics', ministryId, singerId],
    queryFn: () =>
      api.get<Music[]>(`/ministry/${ministryId}/music`, {
        params: {
          singerId,
        },
      }),
    select(data) {
      return data.data
    },
  })
}
