import { Ministry } from '@/components/ministry'
import { ExitMinistryButton } from '@/components/ministry/exit-ministry-button'
import { MusicList } from '@/components/music/music-list'
import { AddMusicButton } from '@/components/music/add-music-button'

export default async function MinistryPage() {
  return (
    <div className="flex flex-col gap-4">
      <Ministry />
      <AddMusicButton />

      <MusicList />
      <ExitMinistryButton />
    </div>
  )
}
