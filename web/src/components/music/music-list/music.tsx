// import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

import { Music as MusicType } from '@/types/music'

interface MusicProps {
  music: MusicType
}

export function Music({ music }: MusicProps) {
  return (
    <div className="flex justify-between items-center w-full bg-muted/75 rounded-md p-4 border border-muted-foreground/25">
      <div className="flex flex-col">
        <p className="text-md font-bold">{music.name}</p>
        <p className="text-sm text-muted-foreground">{music.artist}</p>
      </div>

      {/* <Link href={`/music/${music.id}`}> */}
      <ChevronRight size={22} />
      {/* </Link> */}
    </div>
  )
}
