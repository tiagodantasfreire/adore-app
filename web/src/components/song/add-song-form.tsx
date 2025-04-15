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

// TODO: Get service names from the database

const formSchema = z.object({
  musicName: z.string().min(2, 'Nome da música é obrigatório'),
  artist: z.string().min(1, 'Artista é obrigatório'),
  singer: z.string().min(1, 'Cantor é obrigatório'),
  tone: z.string().min(1, 'Tom é obrigatório'),
  date: z.date({
    required_error: 'Data é obrigatória',
  }),
  serviceName: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

export default function AddSongForm() {
  const [showServiceName, setShowServiceName] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      musicName: '',
      artist: '',
      singer: '',
      tone: '',
      serviceName: '',
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="musicName"
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

        <Button type="submit">Salvar música</Button>
      </form>
    </Form>
  )
}
