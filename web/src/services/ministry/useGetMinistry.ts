'use client'

import { useQuery } from '@tanstack/react-query'

import api from '@/lib/api'
import { Ministry } from '@/types/ministry'
import { useMinistry } from '@/contexts/ministry'

export function useGetMinistry() {
  const { ministryId } = useMinistry()

  return useQuery({
    queryKey: ['ministry', ministryId],
    queryFn: () => api.get<Ministry>(`/ministry/${ministryId}`),
  })
}
