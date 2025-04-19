import { env } from '@/lib/env'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { url } = req
  const { searchParams } = new URL(url)

  const token = searchParams.get('token')

  if (!token) {
    return NextResponse.redirect(new URL('/sign-in', req.url))
  }

  const expiredAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

  const response = NextResponse.redirect(new URL('/ministerio', req.url))

  const isProduction = process.env.NODE_ENV === 'production'
  const domain = env.WEB_URL

  response.cookies.set({
    name: 'session',
    value: token,
    path: '/',
    expires: expiredAt,
    secure: isProduction,
    domain,
  })

  return response
}
