'use client'

import { useGetSinger } from '@/services/singer/useGetSinger'

export function SingerData() {
  const { data: singer } = useGetSinger()

  if (!singer) return null

  return <h1 className="text-xl font-bold">Músicas da {singer.name}</h1>
}
