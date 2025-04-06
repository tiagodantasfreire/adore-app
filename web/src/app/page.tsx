import Link from 'next/link'
import { redirect } from 'next/navigation'

import { getUser } from '@/lib/session'

export default async function Home() {
  const user = await getUser()

  if (user) return redirect('/home')

  return (
    <div className="flex flex-col h-dvh items-center justify-center">
      <p>Home</p>
      <Link href="/auth/sign-in">Go to login</Link>
    </div>
  )
}
