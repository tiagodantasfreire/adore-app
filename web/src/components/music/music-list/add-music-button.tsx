'use client'

import Link from 'next/link'
import { PlusIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useMinistry } from '@/contexts/ministry'

interface AddMusicButtonProps {
  showIcon?: boolean
}

export function AddMusicButton({ showIcon = true }: AddMusicButtonProps) {
  const { ministryId } = useMinistry()

  return (
    <Button>
      <Link href={`/ministerio/${ministryId}/adicionar-musica`}>
        {showIcon ? <PlusIcon className="w-4 h-4" /> : 'Adicionar música'}
      </Link>
    </Button>
  )
}
