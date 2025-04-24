import { SkeletonWrapper } from '@/components/ui/skeleton'
import { Music as MusicType } from '@/types/music'

import { Music } from './music'
import { MusicsSkeleton } from './musics-skeleton'

interface MusicListProps {
  musics: MusicType[]
  isLoading: boolean
}

export function MusicList({ musics, isLoading }: MusicListProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <SkeletonWrapper isLoading={isLoading} skeleton={<MusicsSkeleton />}>
        {musics?.map((music) => <Music music={music} key={music.id} />)}
      </SkeletonWrapper>
    </div>
  )
}
