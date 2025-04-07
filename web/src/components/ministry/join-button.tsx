'use client'
import { useJoinMinistry } from '@/services/mutations/ministry/useJoinMinistry'
import { Button } from '../ui/button'

interface JoinButtonProps {
  ministryId: string
  showJoinButton: boolean
}

export default function JoinButton({
  ministryId,
  showJoinButton,
}: JoinButtonProps) {
  const { mutate: joinMinistry, isPending } = useJoinMinistry()

  return (
    <div
      className={`
        overflow-hidden transition-all duration-300 ease-in-out ${
          showJoinButton ? 'max-h-12 opacity-100' : 'max-h-0 opacity-0'
        }`}
    >
      <Button
        size="full"
        onClick={() => joinMinistry(ministryId)}
        isLoading={isPending}
      >
        {isPending ? 'Entrando...' : 'Entrar'}
      </Button>
    </div>
  )
}
