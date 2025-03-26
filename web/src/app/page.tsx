import Link from 'next/link'
import { getUser } from '@/lib/auth'

export default async function Home() {
  const user = await getUser()

  return (
    <div>
      {!user
        ? <Link href="http://localhost:3000/auth/google/login">Log in</Link>
        : <p>Welcome {user.firstName}!</p>}
    </div>
  )
}
