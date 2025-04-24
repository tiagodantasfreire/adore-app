'use client'

import { useQuery } from '@tanstack/react-query'

import api from '@/lib/api'
import { useMinistry } from '@/contexts/ministry'

export function useGetSingerMusics() {
  const { ministryId, singerId } = useMinistry()

  return useQuery({
    queryKey: ['singer-musics', ministryId, singerId],
    queryFn: () =>
      api.get(`/ministry/${ministryId}/singers/${singerId}/musics`),
    enabled: !!ministryId && !!singerId,
    select: (data) => data.data,
  })
}
