import { NextRequest, NextResponse } from 'next/server'
import { getUser } from '@/lib/session'

export default async function middleware(req: NextRequest) {
  const user = await getUser()

  if (!user) {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  }

  const ministryId = user.ministryId

  // redirect to ministry page if user has a ministry
  const isJoinMinistryPage = req.nextUrl.pathname === '/ministerio'

  if (isJoinMinistryPage && ministryId) {
    return NextResponse.redirect(
      new URL(`/ministerio/${ministryId}`, req.nextUrl),
    )
  }

  // Check if user is trying to access a specific ministry page
  const ministryPathMatch = req.nextUrl.pathname.match(/^\/ministerio\/([^/]+)/)

  if (ministryPathMatch) {
    const requestedMinistryId = ministryPathMatch[1]

    // If user doesn't have a ministry, redirect to join page
    if (!ministryId) {
      return NextResponse.redirect(new URL('/', req.nextUrl))
    }

    // If user is trying to access a ministry they're not part of
    if (String(ministryId) !== requestedMinistryId) {
      // Redirect to their own ministry page
      return NextResponse.redirect(
        new URL(`/ministerio/${ministryId}`, req.nextUrl),
      )
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/ministerio', '/ministerio/:path*'],
}
