'use client'
import { useQuery } from '@tanstack/react-query'

import { Ministry } from '@/types/ministry'
import api from '@/lib/api'

export function useGetMinistry(ministryId: string) {
  return useQuery({
    queryKey: ['ministry', ministryId],
    queryFn: () => api.get<Ministry>(`/ministry/${ministryId}`),
  })
}
