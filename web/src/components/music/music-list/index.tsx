'use client'

import { useSearchParams } from 'next/navigation'

import { Music as MusicType } from '@/types/music'

import { Music } from './music'
import { AddMusicButton } from './add-music-button'
import { SearchMusicsInput } from './search-musics-input'
import { SkeletonWrapper } from '@/components/ui/skeleton'
import { MusicsSkeleton } from './musics-skeleton'

interface MusicListProps {
  musics: MusicType[] | undefined
  showAddMusicButton?: boolean
  isLoading?: boolean
}

export function MusicList({
  musics,
  showAddMusicButton = true,
  isLoading,
}: MusicListProps) {
  const search = useSearchParams()
  const searchValue = search.get('musica')

  const filteredMusics = musics?.filter((music) =>
    music.name.toLowerCase().includes(searchValue?.toLowerCase() ?? ''),
  )

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <SearchMusicsInput />
        {showAddMusicButton && <AddMusicButton />}
      </div>

      <div className="flex flex-col gap-2 w-full">
        <SkeletonWrapper isLoading={!!isLoading} skeleton={<MusicsSkeleton />}>
          {filteredMusics?.map((music) => (
            <Music music={music} key={music.id} />
          ))}
        </SkeletonWrapper>
      </div>
    </div>
  )
}
