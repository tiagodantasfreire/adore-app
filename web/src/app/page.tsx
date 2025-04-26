import { redirect } from 'next/navigation'
import { AudioLines } from 'lucide-react'

import { getUser } from '@/lib/session'
import { Card } from '@/components/ui/card'
import { LoginForm } from '@/components/login-form'
import { CreateMinistry } from '@/components/ministry/create-ministry'
import { MinistryAccessCode } from '@/components/ministry/ministry-access-code'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default async function Login() {
  const user = await getUser()

  if (!user) {
    return (
      <div className="flex flex-col gap-12 h-dvh items-center justify-center px-10 max-w-md mx-auto">
        <AudioLines size={64} />
        <LoginForm />
      </div>
    )
  }

  if (user?.ministryId) return redirect(`/ministerio/${user.ministryId}`)

  return (
    <div className="flex flex-col gap-6 max-w-md mx-auto pt-8 px-6">
      <AudioLines size={70} className="mb-4 mx-auto" />

      <div className="flex flex-col gap-2">
        <p className="text-xl font-bold">Seja bem-vindo ao Adore App!</p>
        <p className="text-sm text-muted-foreground">
          Você ainda não faz parte de nenhum ministério.
        </p>
      </div>

      <Tabs defaultValue="access-code">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="access-code">Entrar com código</TabsTrigger>
          <TabsTrigger value="create-ministry">Criar ministério</TabsTrigger>
        </TabsList>

        <TabsContent value="access-code">
          <Card className="p-4">
            <MinistryAccessCode />
          </Card>
        </TabsContent>

        <TabsContent value="create-ministry">
          <Card className="p-4">
            <CreateMinistry />
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
