'use client'

import { useGetSingers } from '@/services/music/useGetSingers'

import { SingerItem } from './singer-item'

export function SingersList() {
  const { data: singers } = useGetSingers()

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {singers?.map((singer) => <SingerItem key={singer.id} singer={singer} />)}
    </div>
  )
}
