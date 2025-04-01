import { NextRequest, NextResponse } from 'next/server'
import { getUser } from '@/lib/session'

export default async function middleware(req: NextRequest) {
  const user = await getUser()

  if (!user) {
    return NextResponse.redirect(new URL('/auth/sign-in', req.nextUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/home'],
}
