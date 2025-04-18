'use server'
import { redirect } from 'next/navigation'

import { env } from '@/lib/env'

export default async function redirectToLoginWithGoogle() {
  redirect(`${env.BACKEND_URL}/auth/google/login`)
}
