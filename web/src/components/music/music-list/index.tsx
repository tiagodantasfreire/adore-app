'use client'

import { useGetMinistryMusics } from '@/services/music/useGetMinistryMusics'

import { Music } from './music'

export function MusicList() {
  const { data: musics } = useGetMinistryMusics()

  return (
    <div className="flex flex-col gap-4 w-full">
      {musics?.map((music) => <Music music={music} key={music.id} />)}
    </div>
  )
}
