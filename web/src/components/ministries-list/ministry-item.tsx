'use client'
import { ChevronRight } from 'lucide-react'

import { Ministry } from '@/types/ministry'
import { useJoinMinistry } from '@/services/ministry/useJoinMinistry'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'

interface MinistryItemProps {
  ministry: Ministry
}

export default function MinistryItem({ ministry }: MinistryItemProps) {
  const { mutate: joinMinistry, isPending } = useJoinMinistry()

  const handleJoinMinistry = () => {
    joinMinistry(ministry.id)
  }

  const createdBy = ministry.createdBy
    ? `${ministry.createdBy?.firstName} ${ministry.createdBy?.lastName}`
    : null

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex rounded-md transition-colors cursor-pointer px-2 items-center justify-between">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold">{ministry.name}</h3>

            <p className="text-sm text-muted-foreground">
              Criado por: {createdBy}
            </p>
          </div>

          <ChevronRight size={24} />
        </div>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader className="flex flex-col items-start">
          <DialogTitle>{ministry.name}</DialogTitle>
          <DialogDescription>Deseja entrar no ministério?</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <div className="flex gap-2">
            <DialogClose asChild>
              <Button variant="secondary" className="flex-1/2">
                Cancelar
              </Button>
            </DialogClose>

            <Button className="flex-1/2" onClick={handleJoinMinistry}>
              {isPending ? 'Entrando...' : 'Entrar'}
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
