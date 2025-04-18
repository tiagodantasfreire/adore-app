'use client'
import { useMutation } from '@tanstack/react-query'

import { exitMinistry } from '@/actions/ministry/exit'
import { useRouter } from 'next/navigation'

export function useExitMinistry() {
  const router = useRouter()

  return useMutation({
    mutationFn: exitMinistry,
    onSuccess: () => {
      router.push('/ministerio')
    },
  })
}
