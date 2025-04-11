import { Suspense } from 'react'

import CreateMinistryButton from '@/components/ministries-list/create-ministry-button'
import MinistryList from '@/components/ministries-list'
import SearchInput from '@/components/ministries-list/search-input'
import { Skeleton } from '@/components/ui/skeleton'

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Suspense fallback={<Skeleton className="w-full h-10" />}>
        <div className="flex items-center justify-between w-full gap-4">
          <SearchInput />
          <CreateMinistryButton />
        </div>

        <MinistryList />
      </Suspense>
    </div>
  )
}
