'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

import api from '@/lib/api'
import { Music, CreateMusic } from '@/types/music'

export function useCreateMusic() {
  const queryClient = useQueryClient()
  const router = useRouter()

  return useMutation({
    mutationFn: (musicData: CreateMusic) =>
      api.post<Music>(`/ministry/${musicData.ministryId}/music`, musicData),
    onSuccess: ({ data }) => {
      queryClient.invalidateQueries({ queryKey: ['ministryMusics'] })
      toast.success('Música adicionada com sucesso')
      router.push(`/ministerio/${data.ministryId}`)
    },
    onError: () => {
      toast.error('Erro ao adicionar música')
    },
  })
}
