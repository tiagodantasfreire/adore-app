'use client'

import { useQuery } from '@tanstack/react-query'

import api from '@/lib/api'
import { Ministry } from '@/types/ministry'
import { useMinistry } from '@/contexts/ministry-context'

export function useGetMinistry() {
  const { id } = useMinistry()

  return useQuery({
    queryKey: ['ministry', id],
    queryFn: () => api.get<Ministry>(`/ministry/${id}`),
  })
}
