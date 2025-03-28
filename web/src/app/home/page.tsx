import { getSession } from '@/lib/session'

export default async function Home() {
  const session = await getSession()

  if (!session) {
    return <p>Only for logged users</p>
  }

  return (
    <div>
      {session && (
        <p>Hi {session.user.firstName}</p>
      )}
    </div>
  )
}
