import CreateMinistryButton from '@/components/create-ministry-button'
import MinistryList from '@/components/ministries-list'

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <CreateMinistryButton />
      <MinistryList />
    </div>
  )
}
