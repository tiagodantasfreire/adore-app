import CreateMinistryButton from '@/components/ministries-list/create-ministry-button'
import MinistryList from '@/components/ministries-list'
import SearchInput from '@/components/ministries-list/search-input'

interface HomeProps {
  searchParams: Promise<{ ministryName?: string }>
}

export default async function Home({ searchParams }: HomeProps) {
  const { ministryName } = await searchParams
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="flex items-center justify-between w-full gap-4">
        <SearchInput />
        <CreateMinistryButton />
      </div>

      <MinistryList ministryName={ministryName} />
    </div>
  )
}
