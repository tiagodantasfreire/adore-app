import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

import { Music as MusicType } from '@/types/music'

interface MusicProps {
  music: MusicType
}

export function Music({ music }: MusicProps) {
  const musicPageUrl = `/ministerio/${music.ministryId}/musica/${music.id}`

  return (
    <Link
      className="flex justify-between items-center w-full bg-muted/75 rounded-md p-4 border border-muted-foreground/25 h-20"
      href={musicPageUrl}
    >
      <div className="flex flex-col">
        <p className="text-md font-bold">{music.name}</p>
        <p className="text-sm text-muted-foreground">{music.artist}</p>
      </div>

      <ChevronRight size={22} />
    </Link>
  )
}
