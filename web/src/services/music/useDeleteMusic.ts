'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

import api from '@/lib/api'
import { useMinistry } from '@/contexts/ministry'

export function useDeleteMusic() {
  const router = useRouter()
  const queryClient = useQueryClient()

  const { ministryId } = useMinistry()

  return useMutation({
    mutationFn: (musicId: number) =>
      api.delete(`/ministry/${ministryId}/music/${musicId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ministryMusics'] })
      toast.success('Música deletada com sucesso')
      router.push(`/ministerio/${ministryId}`)
    },
    onError: () => {
      toast.error('Erro ao deletar música')
    },
  })
}
