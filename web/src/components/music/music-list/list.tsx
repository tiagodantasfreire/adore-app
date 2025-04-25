import { SkeletonWrapper } from '@/components/ui/skeleton'
import { Music as MusicType } from '@/types/music'

import { Music } from './music'
import { MusicsSkeleton } from './musics-skeleton'
import { NoMusics } from './no-musics'

interface MusicListProps {
  allMusics: MusicType[]
  filteredMusics: MusicType[]
  isLoading: boolean
}

export function MusicList({
  allMusics,
  filteredMusics,
  isLoading,
}: MusicListProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <SkeletonWrapper isLoading={isLoading} skeleton={<MusicsSkeleton />}>
        {allMusics.length > 0 ? (
          filteredMusics.map((music) => <Music music={music} key={music.id} />)
        ) : (
          <NoMusics />
        )}
      </SkeletonWrapper>
    </div>
  )
}
