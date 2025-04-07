'use client'
import { useGetMinistry } from '@/services/ministry/useGetMinistry'

interface MinistryProps {
  id: string
}

export default function Ministry({ id }: MinistryProps) {
  const { data: ministry } = useGetMinistry(id)

  return (
    <div>
      <p>Bem vindo ao ministério {ministry?.name}</p>
    </div>
  )
}
