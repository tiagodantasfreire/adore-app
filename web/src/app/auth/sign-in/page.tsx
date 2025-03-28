import { getSession } from '@/lib/session'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function SignIn() {
  const session = await getSession()

  if (session) return redirect('/home')

  return (
    <div>
      <Link href="http://localhost:3000/auth/google/login">
        Sign In with Google
      </Link>
    </div>
  )
}
