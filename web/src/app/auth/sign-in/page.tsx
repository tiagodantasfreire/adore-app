import Link from 'next/link'

export default async function SignIn() {
  return (
    <div>
      <Link href="http://localhost:3000/auth/google/login">
        Sign In with Google
      </Link>
    </div>
  )
}
