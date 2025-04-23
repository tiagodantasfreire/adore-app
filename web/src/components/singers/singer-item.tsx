'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

import { Singer } from '@/types/singer'
import { useMinistry } from '@/contexts/ministry-context'

import { Card, CardTitle, CardDescription, CardContent } from '../ui/card'

export function SingerItem({ singer }: { singer: Singer }) {
  const { id } = useMinistry()

  return (
    <Card>
      <CardContent className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <CardTitle>{singer.name}</CardTitle>
          <CardDescription>{singer._count.musics} músicas</CardDescription>
        </div>

        <Link
          href={`/ministerio/${id}/ministros/${singer.id}`}
          className="text-sm flex items-center gap-1"
        >
          Ver músicas
          <ChevronRight size={20} className="mt-1" />
        </Link>
      </CardContent>
    </Card>
  )
}
