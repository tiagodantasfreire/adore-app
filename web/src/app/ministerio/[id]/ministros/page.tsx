import { SingersList } from '@/components/singers/singers-list'

export default function MinistrosPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Ministros</h1>
      <SingersList />
    </div>
  )
}
