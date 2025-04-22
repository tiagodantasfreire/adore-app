'use client'

import { useGetMinistry } from '@/services/ministry/useGetMinistry'

export function Ministry() {
  const { data } = useGetMinistry()
  const ministry = data?.data

  return (
    <div>
      <p>Bem vindo ao ministério {ministry?.name}</p>
      <span>Código de acesso: {ministry?.accessCode}</span>
    </div>
  )
}
