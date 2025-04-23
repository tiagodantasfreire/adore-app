'use client'

import { useQuery } from '@tanstack/react-query'

import api from '@/lib/api'
import { Singer } from '@/types/singer'
import { useMinistry } from '@/contexts/ministry-context'

export function useGetSinger() {
  const { id, singerId } = useMinistry()

  return useQuery({
    queryKey: ['singer', singerId],
    queryFn: () => api.get<Singer>(`/ministry/${id}/singers/${singerId}`),
    select(data) {
      return data.data
    },
  })
}
