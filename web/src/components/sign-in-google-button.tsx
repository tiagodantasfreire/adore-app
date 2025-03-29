'use client'
import { Button } from '@/components/ui/button'
import { redirect } from 'next/navigation'

export function SignInGoogleButton() {
  const handleLoginRedirect = () => {
    redirect('http://localhost:3000/auth/google/login')
  }
  return (
    <Button
      variant="outline"
      onClick={handleLoginRedirect}
    >
      Entrar com Google
    </Button>
  )
}
