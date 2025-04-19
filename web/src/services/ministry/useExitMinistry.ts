'use client'
import { useMutation } from '@tanstack/react-query'

import { useRouter } from 'next/navigation'
import api from '@/lib/api'

export function useExitMinistry() {
  const router = useRouter()

  return useMutation({
    mutationFn: (ministryId: string) =>
      api.post(`/ministry/${ministryId}/exit`),
    onSuccess: () => {
      router.push('/ministerio')
    },
  })
}
