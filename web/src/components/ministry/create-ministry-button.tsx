'use client'

import { useState } from 'react'
import { PlusIcon } from 'lucide-react'

import { useCreateMinistry } from '@/services/ministry/useCreateMinistry'

import ErrorText from '../error-text'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'

export default function CreateMinistryButton() {
  const [error, setError] = useState<string | null>(null)
  const [isCreateMinistryModalOpen, setIsCreateMinistryModalOpen] =
    useState(false)

  const { mutate: createMinistry, isPending } = useCreateMinistry()

  const handleSubmit = async (formData: FormData) => {
    setError(null)

    const name = formData.get('name') as string

    if (!name) {
      setError('Nome do ministério é obrigatório.')
      return
    }

    await createMinistry(name)
  }

  const handleClearErrors = () => {
    setError(null)
  }

  return (
    <Dialog
      open={isCreateMinistryModalOpen}
      onOpenChange={(open) => setIsCreateMinistryModalOpen(open)}
    >
      <DialogTrigger asChild>
        <Button size="full" variant="outline">
          <PlusIcon className="w-4 h-4" />
          Criar ministério
        </Button>
      </DialogTrigger>

      <DialogContent>
        <form action={handleSubmit}>
          <DialogHeader className="text-left mb-4">
            <DialogTitle>Crie seu ministério</DialogTitle>

            <DialogDescription>
              Digite o nome da sua igreja ou do seu ministério
            </DialogDescription>
          </DialogHeader>

          <div>
            <Input
              name="name"
              placeholder="Nome do ministério"
              autoComplete="off"
              className="mb-2"
              onChange={handleClearErrors}
            />
            <ErrorText text={error} />
          </div>

          <DialogFooter>
            <Button
              type="submit"
              variant="secondary"
              isLoading={isPending}
              size="full"
            >
              Criar ministério
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
