'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

import api from '@/lib/api'
import { Music, CreateMusic } from '@/types/music'
import { useMinistry } from '@/contexts/ministry-context'

export function useCreateMusic() {
  const queryClient = useQueryClient()
  const router = useRouter()

  const { id } = useMinistry()

  return useMutation({
    mutationFn: (musicData: CreateMusic) =>
      api.post<Music>(`/ministry/${id}/music`, musicData),
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
