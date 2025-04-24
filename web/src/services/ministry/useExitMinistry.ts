'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import api from '@/lib/api'
import { useMinistry } from '@/contexts/ministry-context'

export function useExitMinistry() {
  const { id } = useMinistry()
  const router = useRouter()

  return useMutation({
    mutationFn: () => api.post(`/ministry/${id}/exit`),
    onSuccess: () => {
      toast.success('Você saiu do ministério!')
      router.push('/')
    },
    onError: () => {
      toast.error('Erro ao sair do ministério')
    },
  })
}
