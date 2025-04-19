'use client'
import { useGetMinistry } from '@/services/ministry/useGetMinistry'

interface MinistryProps {
  id: string
}

export default function Ministry({ id }: MinistryProps) {
  const { data } = useGetMinistry(id)
  const ministry = data?.data

  return (
    <div>
      <p>Bem vindo ao ministério {ministry?.name}</p>
      <span>Código de acesso: {ministry?.accessCode}</span>
    </div>
  )
}
