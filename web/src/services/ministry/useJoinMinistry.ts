'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { AxiosError } from 'axios'

import { joinMinistry } from '@/actions/ministry/join'
import { ApiErrorResponse } from '@/lib/api'

export function useJoinMinistry() {
  const router = useRouter()

  return useMutation({
    mutationFn: (accessCode: string) => joinMinistry(accessCode),
    onSuccess: (ministry) => {
      const ministryName = ministry.name
      toast.success(`Você foi adicionado ao ministério ${ministryName}`)
      router.push(`/ministerio/${ministry.id}`)
    },
    onError: (error: Error | AxiosError<ApiErrorResponse>) => {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Ocorreu um erro ao tentar entrar no ministério'

      toast.error(errorMessage)
    },
  })
}
