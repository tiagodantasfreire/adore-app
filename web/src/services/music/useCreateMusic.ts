'use client'
import { useMutation } from '@tanstack/react-query'

import { createMusic } from '@/actions/music/create-music'

export function useCreateMusic() {
  return useMutation({
    mutationFn: createMusic,
  })
}
