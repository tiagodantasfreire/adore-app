import { Avatar, AvatarFallback } from './ui/avatar'
import { getUser } from '@/lib/session'

export default async function Header() {
  const user = await getUser()

  const nameInitials = user && (user.firstName[0] + user.lastName[0])
    .toUpperCase()

  return (
    <div className='flex p-4 border-b-2'>
      <Avatar>
        <AvatarFallback>{nameInitials}</AvatarFallback>
      </Avatar>
    </div>
  )
}