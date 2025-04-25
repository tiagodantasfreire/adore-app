import { SkeletonWrapper } from '@/components/ui/skeleton'
import { Music as MusicType } from '@/types/music'

import { Music } from './music'
import { MusicsSkeleton } from './musics-skeleton'
import { AddMusicButton } from './add-music-button'

interface MusicListProps {
  musics: MusicType[]
  isLoading: boolean
}

export function MusicList({ musics, isLoading }: MusicListProps) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <SkeletonWrapper isLoading={isLoading} skeleton={<MusicsSkeleton />}>
        {musics.length > 0 ? (
          musics.map((music) => <Music music={music} key={music.id} />)
        ) : (
          <div className="flex flex-col gap-4">
            <AddMusicButton showIcon={false} />

            <p className="text-md font-semibold">
              Nenhuma música encontrada no repertório
            </p>
          </div>
        )}
      </SkeletonWrapper>
    </div>
  )
}
