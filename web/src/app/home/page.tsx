import { getUser } from '@/lib/session'
import Link from 'next/link'

export default async function Home() {
  const user = await getUser()

  return (
    <div className='flex flex-col items-center justify-center h-dvh'>
      <p>Hi, {user?.firstName}!</p>
      <Link href="/api/auth/sign-out">Sign Out</Link>
    </div>
  )
}
