import { GoBackButton } from '@/components/go-back-button'
import { MusicList } from '@/components/music/music-list'
import { SingerData } from '@/components/singers/singer-data'

export default async function MinistroPage() {
  return (
    <div className="flex flex-col gap-4">
      <GoBackButton />
      <SingerData />
      <MusicList />
    </div>
  )
}
