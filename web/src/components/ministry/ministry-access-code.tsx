'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Clipboard } from 'lucide-react'

import { useJoinMinistry } from '@/services/ministry/useJoinMinistry'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp'

const FormSchema = z.object({
  accessCode: z
    .string()
    .min(4, {
      message: 'O código de acesso deve conter 4 caracteres.',
    })
    .regex(/^[a-zA-Z0-9\s]+$/, {
      message: 'O código de acesso deve conter apenas letras e números',
    }),
})

export function MinistryAccessCode() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      accessCode: '',
    },
  })

  const { mutate: joinMinistry, isPending } = useJoinMinistry()

  const handlePaste = async () => {
    const text = await navigator.clipboard.readText()
    form.setValue('accessCode', text)
  }

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    joinMinistry(data.accessCode)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2"
      >
        <FormField
          control={form.control}
          name="accessCode"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <FormLabel className="text-lg font-semibold">
                  Digite o código do seu ministério
                </FormLabel>

                <FormDescription className="text-sm text-muted-foreground">
                  O código de acesso é único de cada ministério.
                </FormDescription>
              </div>

              <div className="flex items-center gap-2">
                <FormControl>
                  <InputOTP maxLength={4} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>

                <Button type="button" variant="secondary" onClick={handlePaste}>
                  <Clipboard size={16} /> Colar
                </Button>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          size="full"
          isLoading={isPending}
          disabled={!form.formState.isValid}
        >
          Entrar
        </Button>
      </form>
    </Form>
  )
}
