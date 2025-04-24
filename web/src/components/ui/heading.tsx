import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

interface HeadingProps {
  className?: string
}

export const Heading1 = ({
  children,
  className,
}: PropsWithChildren<HeadingProps>) => {
  return <h1 className={cn('text-2xl font-bold', className)}>{children}</h1>
}
