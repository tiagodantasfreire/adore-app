import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const { url } = req
  const { searchParams } = new URL(url)

  const token = searchParams.get('token')

  if (!token) {
    return NextResponse.redirect(new URL('/sign-in', req.url))
  }

  const expiredAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

  const response = NextResponse.redirect(new URL('/home', req.url))

  response.cookies.set({
    name: 'session',
    value: token,
    httpOnly: true,
    sameSite: 'strict',
    path: '/',
    expires: expiredAt,
  })

  return response
}
