'use client'

import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

import api from '@/lib/api'
import { Music, CreateMusic } from '@/types/music'

export function useCreateMusic() {
  const router = useRouter()

  return useMutation({
    mutationFn: (musicData: CreateMusic) =>
      api.post<Music>(`/music/${musicData.ministryId}`, musicData),
    onSuccess: ({ data }) => {
      toast.success('Música adicionada com sucesso')
      router.push(`/music/${data.ministryId}`)
    },
    onError: () => {
      toast.error('Erro ao adicionar música')
    },
  })
}
