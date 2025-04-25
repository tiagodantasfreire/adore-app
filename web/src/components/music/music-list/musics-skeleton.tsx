import { Skeleton } from '@/components/ui/skeleton'

export function MusicsSkeleton() {
  const numberOfSkeletons = Array.from({ length: 8 }, (_, index) => index)

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-4">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-5 w-46" />
      </div>

      <div className="flex flex-col gap-2">
        {numberOfSkeletons.map((skeleton) => (
          <Skeleton className="h-20 w-full" key={skeleton} />
        ))}
      </div>
    </div>
  )
}
