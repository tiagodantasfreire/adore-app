import Link from 'next/link'

export default async function Home() {
  return (
    <div className='flex flex-col h-dvh items-center justify-center'>
      <p>Home</p>
      <Link href="/auth/sign-in">Go to login</Link>
    </div>
  )
}
