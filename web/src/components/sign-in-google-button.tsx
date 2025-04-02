'use client'
import redirectToLogin from '@/actions/redirect-to-login'
import { Button } from '@/components/ui/button'

export function SignInGoogleButton() {
  return (
    <Button variant="outline" onClick={redirectToLogin}>
      Entrar com Google
    </Button>
  )
}
