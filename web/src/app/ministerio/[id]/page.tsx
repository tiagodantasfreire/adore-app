import { Ministry } from '@/components/ministry'
import { MinistryMusicsList } from '@/components/ministry/ministry-musics-list'

export default function MinistryPage() {
  return (
    <div className="flex flex-col gap-4">
      <Ministry />

      <MinistryMusicsList />
    </div>
  )
}
