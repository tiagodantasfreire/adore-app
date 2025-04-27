'use client'

import { Button } from '@/components/ui/button'
import { useMinistry } from '@/contexts/ministry'
import { useDeleteMusic } from '@/services/music/useDeleteMusic'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'

export function DeleteMusic() {
  const { mutate: deleteMusic, isPending } = useDeleteMusic()
  const { musicId } = useMinistry()

  if (!musicId) return null

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive" disabled={isPending}>
          Deletar
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader className="text-left">
          <DialogTitle>Deletar música</DialogTitle>
        </DialogHeader>

        <DialogDescription>
          Tem certeza que deseja deletar a música?
        </DialogDescription>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={() => deleteMusic(musicId)}
            isLoading={isPending}
          >
            {isPending ? 'Deletando...' : 'Deletar'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
