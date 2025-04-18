import { redirect } from 'next/navigation'

import { LoginForm } from '@/components/login-form'
import { getUser } from '@/lib/session'
import { AudioLines } from 'lucide-react'

export default async function Login() {
  const user = await getUser()

  if (user) return redirect('/ministerio')

  return (
    <div className="flex flex-col gap-12 h-dvh items-center justify-center px-10 max-w-md mx-auto">
      <AudioLines size={64} />
      <LoginForm />
    </div>
  )
}
