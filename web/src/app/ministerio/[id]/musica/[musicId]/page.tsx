import { MusicData } from '@/components/music/music-page/music-data'
import { DeleteMusic } from '@/components/music/music-page/delete-music'

export default function MusicPage() {
  return (
    <div className="flex flex-col gap-4">
      <MusicData />
      <DeleteMusic />
    </div>
  )
}
