'use client'

import { useExitMinistry } from '@/services/ministry/useExitMinistry'

import { Button } from '../ui/button'

interface ExitMinistryButtonProps {
  id: string
}

export default function ExitMinistryButton({ id }: ExitMinistryButtonProps) {
  const { mutate: exitMinistry, isPending } = useExitMinistry()

  return (
    <Button
      variant="destructive-outline"
      size="full"
      onClick={() => exitMinistry(id)}
      isLoading={isPending}
    >
      {isPending ? 'Saindo...' : 'Sair do Ministério'}
    </Button>
  )
}
