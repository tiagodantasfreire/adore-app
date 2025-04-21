'use client'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import api from '@/lib/api'

type DeleteMusicProps = {
  ministryId: string
}

export function useDeleteMusic({ ministryId }: DeleteMusicProps) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (musicId: string) =>
      api.delete(`/ministry/${ministryId}/music/${musicId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['ministryMusics'] })
      toast.success('Música deletada com sucesso')
    },
    onError: () => {
      toast.error('Erro ao deletar música')
    },
  })
}
