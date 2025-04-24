import { ListMusic, Mic } from 'lucide-react'

import { UserButton } from './user'
import { NavigationLink } from './navigation-link'

const iconSize = 20

export function NavigationBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 py-4 bg-background border-t-[1px]">
      <div className="flex gap-4 items-center justify-around text-xs font-light">
        <NavigationLink
          href="/ministerio/:id"
          icon={<ListMusic size={iconSize} />}
          label="Músicas"
        />

        <NavigationLink
          href="/ministerio/:id/ministros"
          icon={<Mic size={iconSize} />}
          label="Ministros"
        />

        <UserButton size={iconSize} />
      </div>
    </div>
  )
}
