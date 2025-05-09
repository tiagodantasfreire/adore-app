'use client'

import { MusicList } from '@/components/music/music-list'
import { useGetMinistryMusics } from '@/services/music/useGetMinistryMusics'

export function MinistryMusicsList() {
  const { data: musics, isLoading } = useGetMinistryMusics()

  return <MusicList musics={musics} isLoading={isLoading} />
}
