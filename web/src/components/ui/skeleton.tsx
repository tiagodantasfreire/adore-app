import { cn } from '@/lib/utils'

interface SkeletonWrapperProps {
  isLoading: boolean
  skeleton: React.ReactNode
  children: React.ReactNode
}

function SkeletonWrapper({
  isLoading,
  skeleton,
  children,
}: SkeletonWrapperProps) {
  return <>{isLoading ? skeleton : children}</>
}

interface SkeletonProps extends React.ComponentProps<'div'> {
  count?: number
}

function Skeleton({ className, count = 1, ...props }: SkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          data-slot="skeleton"
          className={cn('bg-accent animate-pulse rounded-md', className)}
          {...props}
        />
      ))}
    </>
  )
}

export { Skeleton, SkeletonWrapper }
