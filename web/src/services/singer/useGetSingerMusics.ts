'use client'

import { useQuery } from '@tanstack/react-query'

import api from '@/lib/api'
import { useMinistry } from '@/contexts/ministry-context'

export function useGetSingerMusics() {
  const { id, singerId } = useMinistry()

  return useQuery({
    queryKey: ['singer-musics', id, singerId],
    queryFn: () => api.get(`/ministry/${id}/singers/${singerId}/musics`),
    enabled: !!id && !!singerId,
    select: (data) => data.data,
  })
}
