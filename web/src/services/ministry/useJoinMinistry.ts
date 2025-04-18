'use client'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { joinMinistry } from '@/actions/ministry/join'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export function useJoinMinistry() {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationFn: (accessCode: string) => joinMinistry(accessCode),
    onSuccess: (_, ministryId) => {
      toast.success('Ministério encontrado e você foi adicionado com sucesso!')
      queryClient.invalidateQueries({ queryKey: ['ministries'] })
      queryClient.invalidateQueries({ queryKey: ['ministry', ministryId] })

      router.push(`/ministerio/${ministryId}`)
    },
    onError: () => {
      toast.error('Erro ao entrar no ministério')
    },
  })
}
