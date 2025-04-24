import { Heading1 } from '@/components/ui/heading'
import { SingersList } from '@/components/singers/singers-list'

export default function MinistrosPage() {
  return (
    <div className="flex flex-col gap-4">
      <Heading1>Ministros</Heading1>
      <SingersList />
    </div>
  )
}
