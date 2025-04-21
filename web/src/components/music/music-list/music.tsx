import { format } from 'date-fns'

import { Music as MusicType } from '@/types/music'

interface MusicProps {
  music: MusicType
}

export function Music({ music }: MusicProps) {
  const date = format(new Date(music.date), 'dd/MM/yyyy')

  return (
    <div className="flex flex-col gap-2 p-4 rounded-md border border-gray-200 w-full">
      <p>Música: {music.name}</p>
      <p>Artista: {music.artist}</p>
      <p>Ministro: {music.singer.name}</p>
      <p>Tom: {music.tone}</p>
      <p>Data: {date}</p>
    </div>
  )
}
