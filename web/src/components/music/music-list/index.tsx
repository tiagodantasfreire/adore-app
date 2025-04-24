'use client'

import { useSearchParams } from 'next/navigation'

import { Music as MusicType } from '@/types/music'

import { AddMusicButton } from './add-music-button'
import { SearchMusicsInput } from './search-musics-input'
import { TotalMusicsText } from './total-musics-text'
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

  const totalMusics = filteredMusics?.length ?? 0

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <SearchMusicsInput />
        {showAddMusicButton && <AddMusicButton />}
      </div>

      <TotalMusicsText totalMusics={totalMusics} isLoading={isLoading} />

      <Musics musics={filteredMusics} isLoading={isLoading} />
    </div>
  )
}
