import { SignInGoogleButton } from '@/components/sign-in-google-button'
import { getUser } from '@/lib/session'
import { redirect } from 'next/navigation'

export default async function SignIn() {
  const user = await getUser()

  if (user) return redirect('/home')

  return (
    <div className='flex flex-col gap-2 h-dvh items-center justify-center'>
      <p>Seja bem vindo</p>
      <SignInGoogleButton />
    </div>
  )
}
