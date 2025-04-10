'use client'
import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import { createMinistry } from '@/actions/ministry/create'
import { CreateMinistryResponse } from '@/types/ministry'

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
import { PlusIcon } from 'lucide-react'

export default function CreateMinistryButton() {
  const [error, setError] = useState<string | null>(null)
  const [isCreateMinistryModalOpen, setIsCreateMinistryModalOpen] =
    useState(false)

  const queryClient = useQueryClient()
  const router = useRouter()

  const mutation = useMutation({
    mutationKey: ['create-ministry'],
    mutationFn: createMinistry,
    onError: (err: Error) => {
      setError(err.message)
    },
    onSuccess: (data: CreateMinistryResponse) => {
      setIsCreateMinistryModalOpen(false)
      setError(null)

      queryClient.invalidateQueries({ queryKey: ['get-ministries'] })
      router.push(`/ministerio/${data.id}`)
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
        <Button>
          <PlusIcon className="w-4 h-4" />
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
              isLoading={mutation.isPending}
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
