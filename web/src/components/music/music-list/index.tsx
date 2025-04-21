'use client'
import { useGetMinistryMusics } from '@/services/music/useGetMinistryMusics'

import { Music } from './music'

interface MusicListProps {
  ministryId: string
}

export function MusicList({ ministryId }: MusicListProps) {
  const { data: musics } = useGetMinistryMusics(ministryId)

  return (
    <div className="flex flex-col gap-4 w-full">
      {musics?.map((music) => (
        <div key={music.id} className="w-full">
          <Music music={music} />
        </div>
      ))}
    </div>
  )
}
