'use client'
import { useQuery } from '@tanstack/react-query'

import { getMinistry } from '@/actions/ministry/get-ministry'

export function useGetMinistry(ministryId: string) {
  return useQuery({
    queryKey: ['ministry', ministryId],
    queryFn: () => getMinistry(ministryId),
  })
}
