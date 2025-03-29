import { AvatarImage } from '@radix-ui/react-avatar'
import { Avatar } from './ui/avatar'
import { getUser } from '@/lib/session'

export default async function Header() {
  const user = await getUser()

  return (
    <div>
      <Avatar>
        <AvatarImage src={user?.avatarUrl} />

      </Avatar>
    </div>
  )
}