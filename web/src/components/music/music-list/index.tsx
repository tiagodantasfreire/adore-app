'use client'

import { useSearchParams } from 'next/navigation'

import { Music as MusicType } from '@/types/music'

import { AddMusicButton } from './add-music-button'
import { SearchMusicsInput } from './search-musics-input'
import { MusicList as Musics } from './list'

interface MusicListProps {
  musics: MusicType[] | undefined
  showAddMusicButton?: boolean
  isLoading?: boolean
}

export function MusicList({
  musics,
  showAddMusicButton = true,
  isLoading = false,
}: MusicListProps) {
  const search = useSearchParams()
  const searchValue = search.get('musica')

  const filteredMusics =
    musics?.filter((music) =>
      music.name.toLowerCase().includes(searchValue?.toLowerCase() ?? ''),
    ) ?? []

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <SearchMusicsInput />
        {showAddMusicButton && <AddMusicButton />}
      </div>

      <Musics musics={filteredMusics} isLoading={isLoading} />
    </div>
  )
}
