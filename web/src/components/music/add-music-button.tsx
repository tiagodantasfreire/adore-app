'use client'

import Link from 'next/link'

import { Button } from '../ui/button'
import { useMinistry } from '@/contexts/ministry-context'

export function AddMusicButton() {
  const { id } = useMinistry()

  return (
    <Button>
      <Link href={`/ministerio/${id}/adicionar-musica`}>Adicionar música</Link>
    </Button>
  )
}
