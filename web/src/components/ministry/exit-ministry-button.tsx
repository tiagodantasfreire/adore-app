'use client'

import { useExitMinistry } from '@/services/ministry/useExitMinistry'

import { Button } from '../ui/button'

export function ExitMinistryButton() {
  const { mutate: exitMinistry, isPending } = useExitMinistry()

  return (
    <Button
      variant="destructive-outline"
      size="full"
      onClick={() => exitMinistry()}
      isLoading={isPending}
    >
      {isPending ? 'Saindo...' : 'Sair do Ministério'}
    </Button>
  )
}
