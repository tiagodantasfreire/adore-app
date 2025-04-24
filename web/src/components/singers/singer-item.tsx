'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

import { Singer } from '@/types/singer'
import { useMinistry } from '@/contexts/ministry'

import { Card, CardTitle, CardDescription, CardContent } from '../ui/card'

export function SingerItem({ singer }: { singer: Singer }) {
  const { ministryId } = useMinistry()

  return (
    <Card>
      <CardContent className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <CardTitle>{singer.name}</CardTitle>
          <CardDescription>{singer._count.musics} músicas</CardDescription>
        </div>

        <Link
          href={`/ministerio/${ministryId}/ministros/${singer.id}`}
          className="text-sm flex items-center gap-1"
        >
          Ver músicas
          <ChevronRight size={20} className="mt-1" />
        </Link>
      </CardContent>
    </Card>
  )
}
