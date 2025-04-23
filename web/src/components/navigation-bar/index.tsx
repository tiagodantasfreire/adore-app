'use client'

import Link from 'next/link'
import { ListMusic, MicVocal } from 'lucide-react'

import { useMinistry } from '@/contexts/ministry-context'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export function NavigationBar() {
  const { id } = useMinistry()

  return (
    <div className="absolute bottom-0 left-0 right-0  p-4 px-6 border-t-2">
      <div className="grid grid-cols-2 gap-4 items-center justify-center">
        <NavigationBarItem
          href={`/ministerio/${id}`}
          icon={<ListMusic size={20} />}
        />

        <NavigationBarItem
          href={`/ministerio/${id}/ministros`}
          icon={<MicVocal size={20} />}
        />
      </div>
    </div>
  )
}

function NavigationBarItem({
  href,
  icon,
}: {
  href: string
  icon: React.ReactNode
}) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={cn(
        isActive && 'text-primary',
        'flex items-center justify-center',
      )}
    >
      {icon}
    </Link>
  )
}
