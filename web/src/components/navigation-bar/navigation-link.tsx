'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { useMinistry } from '@/contexts/ministry-context'

interface NavigationLinkProps {
  href: string
  icon: React.ReactNode
  label: string
}

export function NavigationLink({ href, icon, label }: NavigationLinkProps) {
  const pathname = usePathname()
  const { id } = useMinistry()

  const parsedHref = href.replace(':id', id)
  const isActive = pathname === parsedHref

  return (
    <Link
      href={parsedHref}
      className={cn(
        'flex flex-1 flex-col items-center gap-1',
        isActive && 'text-primary',
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  )
}
