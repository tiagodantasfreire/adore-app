import { Avatar, AvatarFallback } from './ui/avatar'
import { getUser } from '@/lib/session'
import LogoutButton from './logout-button'

export default async function Header() {
  const user = await getUser()

  const nameInitials =
    user && (user.firstName[0] + user.lastName[0]).toUpperCase()

  return (
    <div className="flex p-4 border-b-2 justify-between">
      <Avatar>
        <AvatarFallback>{nameInitials}</AvatarFallback>
      </Avatar>

      <LogoutButton />
    </div>
  )
}
