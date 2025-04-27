'use client'

import { formatDate } from '@/lib/date'
import { useGetMusicById } from '@/services/music/useGetMusicById'

export function MusicData() {
  const { data: music } = useGetMusicById()

  if (!music) return null

  const date = formatDate(music.date, 'dd/MM/yyyy')

  return (
    <div>
      <h1>{music.name}</h1>
      <p>{music.artist}</p>
      <p>
        {music.singer.name} - Tom: {music.tone}
      </p>
      <p>{date}</p>
    </div>
  )
}
