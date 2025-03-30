import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  const { url } = req

  const { searchParams } = new URL(url)

  const token = searchParams.get('token')

  if (!token) {
    return redirect('/sign-in')
  }

  const allCookies = await cookies()

  const expiredAt = new Date(
    Date.now() + 7 * 24 * 60 * 60 * 1000
  )

  allCookies.set('session', token, {
    httpOnly: true,
    sameSite: true,
    path: '/',
    expires: expiredAt,
  })

  redirect('/home')
}