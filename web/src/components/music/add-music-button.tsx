'use client'

import Link from 'next/link'
import { PlusIcon } from 'lucide-react'

import { Button } from '../ui/button'
import { useMinistry } from '@/contexts/ministry-context'

export function AddMusicButton() {
  const { id } = useMinistry()

  return (
    <Button>
      <Link href={`/ministerio/${id}/adicionar-musica`}>
        <PlusIcon className="w-4 h-4" />
      </Link>
    </Button>
  )
}
