'use client'
import { useQuery } from '@tanstack/react-query'

import { getAllMinistries } from '@/actions/get-all-ministries'
import MinistryItem from './ministry-item'

export default function MinistryList() {
  const { data: ministries } = useQuery({
    initialData: [],
    queryKey: ['get-ministries'],
    queryFn: getAllMinistries,
  })

  return (
    <div className="flex flex-col gap-4 w-full">
      {ministries.map((ministry) => (
        <MinistryItem key={ministry.id} ministry={ministry} />
      ))}
    </div>
  )
}
