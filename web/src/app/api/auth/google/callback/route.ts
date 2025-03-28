import { createSession } from '@/lib/session'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)

  const accessToken = searchParams.get('accessToken')
  const refreshToken = searchParams.get('refreshToken')
  const userId = searchParams.get('userId')
  const firstName = searchParams.get('firstName')
  const lastName = searchParams.get('lastName')

  if (
    !accessToken ||
    !refreshToken ||
    !userId ||
    !firstName ||
    !lastName 
  ) {
    throw new Error('Google Oauth Failed')
  }

  await createSession({
    user: {
      id: userId,
      lastName,
      firstName,
    },
    accessToken,
    refreshToken,
  })

  redirect('/home')
}