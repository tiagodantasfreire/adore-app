'use client'

import { useQuery } from '@tanstack/react-query'
import { getMinistryMusics } from '@/actions/music/get-ministry-musics'

export function useGetMinistryMusics(ministryId: string) {
  return useQuery({
    queryKey: ['ministryMusics', ministryId],
    queryFn: () => getMinistryMusics(ministryId),
  })
}
