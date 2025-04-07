import { useMutation, useQueryClient } from '@tanstack/react-query'

import { joinMinistry } from '@/actions/ministry/join'

export function useJoinMinistry() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: joinMinistry,
    onSuccess: (_, ministryId) => {
      queryClient.invalidateQueries({ queryKey: ['ministries'] })
      queryClient.invalidateQueries({ queryKey: ['ministry', ministryId] })
    },
  })
}
