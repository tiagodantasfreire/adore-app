'use client'
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Loader2 } from 'lucide-react'

import { createMinistry } from '@/actions/create-ministry'
import { CreateMinistryResponse } from '@/types/ministry'

import ErrorText from './error-text'
import { Button } from './ui/button'
import { Input } from './ui/input'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'

export default function CreateMinistryButton() {
  const [error, setError] = useState<string | null>(null)
  const [isCreateMinistryModalOpen, setIsCreateMinistryModalOpen] =
    useState(false)

  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationKey: ['create-ministry'],
    mutationFn: createMinistry,
    onError: (err: Error) => {
      setError(err.message)
    },
    onSuccess: (data: CreateMinistryResponse) => {
      console.log(data) // redirect to ministry page
      setIsCreateMinistryModalOpen(false)
      setError(null)

      queryClient.invalidateQueries({ queryKey: ['get-ministries'] })
    },
  })

  const handleSubmit = async (formData: FormData) => {
    setError(null)

    const name = formData.get('name') as string

    if (!name) {
      setError('Nome do ministério é obrigatório.')
      return
    }

    try {
      await mutation.mutateAsync({ name })
    } catch {}
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
        <Button size="full">Criar ministério</Button>
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
              disabled={mutation.isPending}
              size="full"
            >
              {mutation.isPending && <Loader2 className="animate-spin mr-2" />}
              Criar ministério
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
