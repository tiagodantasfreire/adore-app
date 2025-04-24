'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { useMinistry } from '@/contexts/ministry'

interface NavigationLinkProps {
  href: string
  icon: React.ReactNode
  label: string
}

export function NavigationLink({ href, icon, label }: NavigationLinkProps) {
  const pathname = usePathname()
  const { ministryId } = useMinistry()

  const parsedHref = href.replace(':id', ministryId.toString())
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
