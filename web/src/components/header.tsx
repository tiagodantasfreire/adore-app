import { getUser } from '@/lib/session'

import { Avatar, AvatarFallback } from './ui/avatar'
import LogoutButton from './logout-button'

export async function Header() {
  const user = await getUser()

  const nameInitials =
    user && (user.firstName[0] + user.lastName[0]).toUpperCase()

  return (
    <div className="flex px-4 py-2 border-b-2 justify-between">
      <Avatar>
        <AvatarFallback>{nameInitials}</AvatarFallback>
      </Avatar>

      <LogoutButton />
    </div>
  )
}
