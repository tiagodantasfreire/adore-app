'use client'

import Link from 'next/link'
import { AddMusicButton } from './add-music-button'
import { usePathname } from 'next/navigation'
import { ChevronLeftIcon } from 'lucide-react'

export function NoMusics() {
  const pathname = usePathname()
  const isSingerPage = pathname.includes('ministros')
  const ministryId = pathname.split('/')[2]

  const text = isSingerPage
    ? 'Nenhuma música encontrada para este ministro'
    : 'Nenhuma música encontrada no repertório'

  return (
    <div className="flex flex-col gap-4">
      {!isSingerPage && <AddMusicButton showIcon={false} />}

      <p className="text-lg">{text}</p>
      {isSingerPage && (
        <Link
          href={`/ministerio/${ministryId}/ministros`}
          className="text-md flex items-center gap-1"
        >
          <ChevronLeftIcon size={20} />
          Voltar
        </Link>
      )}
    </div>
  )
}
