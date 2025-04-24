import { SingerData } from '@/components/singers/singer-data'
import { SingerMusicList } from '@/components/singers/singer-music-list'

export default async function MinistroPage() {
  return (
    <div className="flex flex-col gap-4">
      <SingerData />
      <SingerMusicList />
    </div>
  )
}
