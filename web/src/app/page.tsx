import Link from 'next/link'

export default async function Home() {
  return (
    <Link href="/auth/sign-in">Go to login</Link>
  )
}
