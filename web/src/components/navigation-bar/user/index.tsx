import { CircleUser } from 'lucide-react'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { LogoutButton } from './logout-button'
import { getUser } from '@/lib/session'

interface UserButtonProps {
  size: number
}

export async function UserButton({ size }: UserButtonProps) {
  const user = await getUser()

  const username = user?.firstName

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex flex-1 flex-col items-center gap-1">
        <CircleUser size={size} />
        <span>Perfil</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side="bottom"
        sideOffset={10}
        collisionPadding={{ right: 12 }}
      >
        <DropdownMenuLabel>Olá, {username}!</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem disabled>Minhas Preferências</DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <LogoutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
