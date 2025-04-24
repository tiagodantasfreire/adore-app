'use client'

import { Heading1 } from '../ui/heading'

import { useGetSinger } from '@/services/singer/useGetSinger'

export function SingerData() {
  const { data: singer } = useGetSinger()

  if (!singer) return null

  return <Heading1>Músicas de {singer.name}</Heading1>
}
