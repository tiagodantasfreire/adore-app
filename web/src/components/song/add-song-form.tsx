'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { DatePicker } from './date-picker'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { ToneSelect } from './tone-select'
import { SingerSelect } from './singer-select'
import { Switch } from '../ui/switch'
import { Label } from '../ui/label'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { useCreateMusic } from '@/services/music/useCreateMusic'
// TODO: Get service names from the database

const formSchema = z.object({
  name: z.string().min(2, 'Nome da música é obrigatório'),
  artist: z.string().min(1, 'Artista é obrigatório'),
  singer: z.string().min(1, 'Cantor é obrigatório'),
  tone: z.string().min(1, 'Tom é obrigatório'),
  date: z.date({
    required_error: 'Data é obrigatória',
  }),
  serviceName: z.string().optional(),
})

export type AddSongFormValues = z.infer<typeof formSchema>

interface AddSongFormProps {
  ministryId: string
}

export default function AddSongForm({ ministryId }: AddSongFormProps) {
  const [showServiceName, setShowServiceName] = useState(false)

  const form = useForm<AddSongFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      artist: '',
      singer: '',
      tone: '',
      serviceName: '',
    },
  })

  const { mutate: createMusic, isPending, isError, error } = useCreateMusic()

  const onSubmit = (data: AddSongFormValues) => {
    createMusic({ ...data, ministryId })
  }

  return (
    <Form {...form}>
      {/* TODO: Add a toast to show the error */}
      {isError && (
        <div className="text-destructive font-bold">{error.message}</div>
      )}

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

        <div className="flex items-center gap-2">
          <Switch
            id="service-name"
            checked={showServiceName}
            onCheckedChange={setShowServiceName}
          />
          <Label
            htmlFor="service-name"
            className="text-sm text-muted-foreground"
          >
            Deseja identificar esse culto com um nome?
          </Label>
        </div>

        {showServiceName && (
          <FormField
            control={form.control}
            name="serviceName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Nome do culto (Ex: Culto de Jovens, Santa Ceia)"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <Button type="submit" disabled={isPending}>
          {isPending ? 'Salvando...' : 'Salvar música'}
        </Button>
      </form>
    </Form>
  )
}
