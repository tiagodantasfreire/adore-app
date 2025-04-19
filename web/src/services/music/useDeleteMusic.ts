'use client'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import api from '@/lib/api'

export function useDeleteMusic() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['deleteMusic'],
    mutationFn: (musicId: string) => api.delete(`/music/${musicId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ministryMusics'] })
      toast.success('Música deletada com sucesso')
    },
    onError: () => {
      toast.error('Erro ao deletar música')
    },
  })
}
