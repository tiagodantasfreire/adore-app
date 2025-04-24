'use client'

import { useGetSingerMusics } from '@/services/singer/useGetSingerMusics'

import { MusicList } from '../music/music-list'

export function SingerMusicList() {
  const { data: musics } = useGetSingerMusics()

  return <MusicList musics={musics} showAddMusicButton={false} />
}
