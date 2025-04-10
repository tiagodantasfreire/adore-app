'use client'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

import { getMinistries } from '@/actions/ministry/get-ministries'
import MinistryItem from './ministry-item'
import { Skeleton, SkeletonWrapper } from '../ui/skeleton'

export default function MinistryList() {
  const searchParams = useSearchParams()
  const ministryName = searchParams.get('ministryName')

  const { data: ministries, isFetching } = useQuery({
    initialData: [],
    queryKey: ['get-ministries', ministryName],
    queryFn: () => getMinistries(ministryName),
  })

  return (
    <div className="flex flex-col gap-4 w-full">
      <SkeletonWrapper
        isLoading={isFetching}
        skeleton={<Skeleton className="h-32 w-full" count={5} />}
      >
        {ministries?.map((ministry) => (
          <MinistryItem key={ministry.id} ministry={ministry} />
        ))}
      </SkeletonWrapper>
    </div>
  )
}
