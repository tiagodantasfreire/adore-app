'use client'

import Link from 'next/link'
import { PlusIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useMinistry } from '@/contexts/ministry'

export function AddMusicButton() {
  const { ministryId } = useMinistry()

  return (
    <Button>
      <Link href={`/ministerio/${ministryId}/adicionar-musica`}>
        <PlusIcon className="w-4 h-4" />
      </Link>
    </Button>
  )
}
