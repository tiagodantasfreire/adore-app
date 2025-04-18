import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { SignInGoogleButton } from './sign-in-google-button'

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div className={cn('flex flex-col gap-6 w-full', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Bem vindo ao Adore App!</CardTitle>

          <CardDescription>
            Entre com seu email abaixo para acessar sua conta
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>

              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Senha</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Esqueceu sua senha?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </div>

              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Entrar
                </Button>

                <SignInGoogleButton />
              </div>
            </div>

            <div className="mt-4 text-center text-sm">
              Não tem uma conta?{' '}
              <a href="#" className="underline underline-offset-4">
                Criar conta
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
