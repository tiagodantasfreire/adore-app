'use client'
import { useQuery } from '@tanstack/react-query'

import { getAllMinistries } from '@/actions/get-all-ministries'

export default function MinistryList() {
  const { data: ministries } = useQuery({
    initialData: [],
    queryKey: ['get-ministries'],
    queryFn: getAllMinistries,
  })

  return (
    <div>
      {ministries.map((ministry) => (
        <p key={ministry.id}>{ministry.name}</p>
      ))}
    </div>
  )
}
