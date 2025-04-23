'use client'

import { useGetMinistryMusics } from '@/services/music/useGetMinistryMusics'

import { Music } from './music'
import { useSearchParams } from 'next/navigation'

export function MusicList() {
  const { data: musics } = useGetMinistryMusics()

  const search = useSearchParams()
  const searchValue = search.get('musica')

  const filteredMusics = musics?.filter((music) =>
    music.name.toLowerCase().includes(searchValue?.toLowerCase() ?? ''),
  )

  return (
    <div className="flex flex-col gap-2 w-full">
      {filteredMusics?.map((music) => <Music music={music} key={music.id} />)}
    </div>
  )
}
