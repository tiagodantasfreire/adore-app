'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { Ministry } from '@/types/ministry'
import api from '@/lib/api'

export function useCreateMinistry() {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationKey: ['create-ministry'],
    mutationFn: (name: string) => api.post<Ministry>('/ministry', { name }),
    onSuccess: ({ data }) => {
      queryClient.invalidateQueries({ queryKey: ['get-ministries'] })
      router.push(`/ministerio/${data.id}`)
    },
  })
}
