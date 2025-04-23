'use client'

import { useQuery } from '@tanstack/react-query'
import api from '@/lib/api'
import { Singer } from '@/types/singer'
import { useMinistry } from '@/contexts/ministry-context'

export function useGetSingers() {
  const { id } = useMinistry()

  return useQuery({
    queryKey: ['singers', id],
    queryFn: () => api.get<Singer[]>(`/ministry/${id}/singers`),
    select: (data) => data.data,
  })
}
