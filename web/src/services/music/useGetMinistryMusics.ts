'use client'

import { useQuery } from '@tanstack/react-query'

import { Music } from '@/types/music'
import api from '@/lib/api'
import { useMinistry } from '@/contexts/ministry-context'

export function useGetMinistryMusics() {
  const { id } = useMinistry()

  return useQuery({
    queryKey: ['ministryMusics', id],
    queryFn: () => api.get<Music[]>(`/ministry/${id}/music`),
    select(data) {
      return data.data
    },
  })
}
