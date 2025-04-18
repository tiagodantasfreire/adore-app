'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
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
import { useJoinMinistry } from '@/services/ministry/useJoinMinistry'

const FormSchema = z.object({
  accessCode: z.string().min(4, {
    message: 'O código de acesso deve conter 4 caracteres.',
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

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    joinMinistry(data.accessCode)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="accessCode"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2">
              <FormLabel>Digite o código do seu ministério</FormLabel>

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

                <Button type="submit" isLoading={isPending}>
                  Entrar
                </Button>
              </div>

              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
