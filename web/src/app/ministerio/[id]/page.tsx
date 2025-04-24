import { Ministry } from '@/components/ministry'
import { ExitMinistryButton } from '@/components/ministry/exit-ministry-button'
import { MinistryMusicsList } from '@/components/ministry/ministry-musics-list'

export default function MinistryPage() {
  return (
    <div className="flex flex-col gap-4">
      <Ministry />

      <MinistryMusicsList />

      <ExitMinistryButton />
    </div>
  )
}
