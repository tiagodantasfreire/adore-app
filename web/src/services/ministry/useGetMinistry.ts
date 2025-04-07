'use client'
import { useQuery } from '@tanstack/react-query'

import { getMinistry } from '@/actions/ministry/get-ministry'

export function useGetMinistry(ministryId: string) {
  return useQuery({
    queryKey: ['ministries', ministryId],
    queryFn: () => getMinistry(ministryId),
    refetchInterval: 1000 * 10,
  })
}
