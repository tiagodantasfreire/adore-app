import { Ministry } from '@/components/ministry'
import { ExitMinistryButton } from '@/components/ministry/exit-ministry-button'
import { MusicList } from '@/components/music/music-list'
import { AddMusicButton } from '@/components/music/add-music-button'
import { SearchMusicsInput } from '@/components/music/music-list/search-musics-input'

export default async function MinistryPage() {
  return (
    <div className="flex flex-col gap-4">
      <Ministry />

      <div className="flex items-center gap-2">
        <SearchMusicsInput />
        <AddMusicButton />
      </div>

      <MusicList />
      <ExitMinistryButton />
    </div>
  )
}
