'use client'

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { useExitMinistry } from '@/services/ministry/useExitMinistry'

export function ExitMinistryButton() {
  const { mutate: exitMinistry, isPending } = useExitMinistry()

  const handleExitMinistry = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    exitMinistry()
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button onClick={(e) => e.stopPropagation()}>Sair do Ministério</button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader className="text-left">
          <AlertDialogTitle>Sair do ministério</AlertDialogTitle>
          <AlertDialogDescription>
            Tem certeza que deseja sair do ministério?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="grid grid-cols-2 gap-2">
          <Button variant="outline">Cancelar</Button>
          <Button
            variant="destructive"
            onClick={handleExitMinistry}
            isLoading={isPending}
          >
            Sair
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
