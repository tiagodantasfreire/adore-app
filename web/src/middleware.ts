import { NextRequest, NextResponse } from 'next/server'
import { getSession } from '@/lib/session'

export default async function middleware(req: NextRequest) {
  const session = await getSession()

  if (!session || !session.user) {
    return NextResponse.redirect(new URL('/auth/sign-in', req.nextUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard'],
}