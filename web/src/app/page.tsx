import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link href="http://localhost:3000/auth/google/login">Log in</Link>
    </div>
  )
}
