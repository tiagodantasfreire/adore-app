'use client'

import { z } from 'zod'
import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { useCreateMinistry } from '@/services/ministry/useCreateMinistry'

import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Form, FormField, FormItem, FormControl, FormMessage } from '../ui/form'

const createMinistrySchema = z.object({
  name: z
    .string()
    .min(3, {
      message: 'O nome do ministério deve ter pelo menos 3 caracteres',
    })
    .max(30, {
      message: 'O nome do ministério deve ter no máximo 30 caracteres',
    })
    .regex(/^[a-zA-Z0-9\s]+$/, {
      message: 'O nome do ministério deve conter apenas letras e números',
    }),
})

type CreateMinistryFormData = z.infer<typeof createMinistrySchema>

export function CreateMinistry() {
  const form = useForm<CreateMinistryFormData>({
    resolver: zodResolver(createMinistrySchema),
  })

  const { mutate: createMinistry, isPending } = useCreateMinistry()

  const onSubmit = (values: CreateMinistryFormData) => {
    createMinistry(values.name)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col text-left gap-1">
        <h2 className="text-lg font-semibold">Crie seu ministério</h2>

        <p className="text-sm text-muted-foreground">
          Digite o nome da sua igreja ou do seu ministério
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-2"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Nome do ministério" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            variant="secondary"
            isLoading={isPending}
            disabled={!form.formState.isValid}
            size="full"
          >
            Criar ministério
          </Button>
        </form>
      </Form>
    </div>
  )
}
