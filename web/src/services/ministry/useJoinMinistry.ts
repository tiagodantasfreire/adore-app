'use client'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { joinMinistry } from '@/actions/ministry/join'
import { useRouter } from 'next/navigation'

export function useJoinMinistry() {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationFn: joinMinistry,
    onSuccess: (_, ministryId) => {
      queryClient.invalidateQueries({ queryKey: ['ministries'] })
      queryClient.invalidateQueries({ queryKey: ['ministry', ministryId] })

      router.push(`/ministerio/${ministryId}`)
    },
  })
}
