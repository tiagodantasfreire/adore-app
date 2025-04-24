import { Skeleton, SkeletonWrapper } from '@/components/ui/skeleton'

interface TotalMusicsTextProps {
  totalMusics: number
  isLoading: boolean
}

export function TotalMusicsText({
  totalMusics,
  isLoading,
}: TotalMusicsTextProps) {
  const text =
    totalMusics === 0
      ? 'Nenhuma música encontrada'
      : `${totalMusics} músicas encontradas`

  return (
    <SkeletonWrapper
      isLoading={isLoading}
      skeleton={<Skeleton className="w-40 h-6" />}
    >
      <p className="text-sm text-muted-foreground">{text}</p>
    </SkeletonWrapper>
  )
}
