'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { useCreateMusic } from '@/services/music/useCreateMusic'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'

import { DatePicker } from './date-picker'
import { ToneSelect } from './tone-select'
import { SingerSelect } from './singer-select'

const formSchema = z.object({
  name: z.string().min(2, 'Nome da música é obrigatório'),
  artist: z.string().min(1, 'Artista é obrigatório'),
  singer: z.string().min(1, 'Cantor é obrigatório'),
  tone: z.string().min(1, 'Tom é obrigatório'),
  date: z.date({
    required_error: 'Data é obrigatória',
  }),
})

export type AddMusicFormValues = z.infer<typeof formSchema>

export function AddMusicForm() {
  const [singerId, setSingerId] = useState<number | undefined>(undefined)

  const form = useForm<AddMusicFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      artist: '',
      singer: '',
      tone: '',
    },
  })

  const { mutate: createMusic, isPending } = useCreateMusic()

  const handleSelectSinger = (singerId: number) => {
    setSingerId(singerId)
  }

  const onSubmit = (data: AddMusicFormValues) => {
    createMusic({ ...data, singerId })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Nome da música" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="artist"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Artista (Ex: Morada)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="singer"
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <SingerSelect
                  value={field.value}
                  onChange={field.onChange}
                  name={field.name}
                  onBlur={field.onBlur}
                  disabled={field.disabled}
                  hasError={!!fieldState.error}
                  onSelectSinger={handleSelectSinger}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex gap-2">
          <FormField
            control={form.control}
            name="tone"
            render={({ field, fieldState }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <ToneSelect
                    value={field.value}
                    onChange={field.onChange}
                    name={field.name}
                    onBlur={field.onBlur}
                    disabled={field.disabled}
                    hasError={!!fieldState.error}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="date"
            render={({ field, fieldState }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <DatePicker
                    value={field.value}
                    onChange={field.onChange}
                    name={field.name}
                    onBlur={field.onBlur}
                    disabled={field.disabled}
                    hasError={!!fieldState.error}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" disabled={isPending}>
          {isPending ? 'Salvando...' : 'Salvar música'}
        </Button>
      </form>
    </Form>
  )
}
