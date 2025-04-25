import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { AxiosError } from 'axios'

import api, { ApiErrorResponse } from '@/lib/api'
import { Ministry } from '@/types/ministry'
import { updateSession } from '@/lib/session'
export function useJoinMinistry() {
  const router = useRouter()

  return useMutation({
    mutationFn: (accessCode: string) =>
      api.post<Ministry>(`/ministry/${accessCode}/join`),
    onSuccess: async ({ data: ministry }) => {
      await updateSession(ministry.id)

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
