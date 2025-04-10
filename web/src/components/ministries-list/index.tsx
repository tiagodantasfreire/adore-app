'use client'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

import { getMinistries } from '@/actions/ministry/get-ministries'
import MinistryItem from './ministry-item'

export default function MinistryList() {
  const searchParams = useSearchParams()
  const ministryName = searchParams.get('ministryName')

  const { data: ministries } = useQuery({
    initialData: [],
    queryKey: ['get-ministries', ministryName],
    queryFn: () => getMinistries(ministryName),
  })

  return (
    <div className="flex flex-col gap-4 w-full">
      {ministries?.map((ministry) => (
        <MinistryItem key={ministry.id} ministry={ministry} />
      ))}
    </div>
  )
}
