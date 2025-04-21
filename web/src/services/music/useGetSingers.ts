'use client'

import { useQuery } from '@tanstack/react-query'
import api from '@/lib/api'
import { Singer } from '@/types/singer'

export function useGetSingers(ministryId: string) {
  return useQuery({
    queryKey: ['singers', ministryId],
    queryFn: () => api.get<Singer[]>(`/ministry/${ministryId}/singers`),
    select: (data) => data.data,
  })
}
