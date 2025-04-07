'use client'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { exitMinistry } from '@/actions/ministry/exit'
import { useRouter } from 'next/navigation'

export function useExitMinistry() {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationFn: exitMinistry,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ministries'] })

      router.push('/ministerio')
    },
  })
}
