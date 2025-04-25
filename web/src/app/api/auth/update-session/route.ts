import { NextRequest, NextResponse } from 'next/server'

import api from '@/lib/api'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { ministryId, token } = body

    if (!token) {
      return NextResponse.json(
        { success: false, message: 'Token is required' },
        { status: 400 },
      )
    }

    const { data } = await api.post('/auth/update-session', {
      ministryId,
      token,
    })

    if (data.newToken) {
      return NextResponse.json({ newToken: data.newToken })
    }

    return NextResponse.json(
      { success: false, message: 'Failed to update session' },
      { status: 400 },
    )
  } catch (error) {
    console.error('Error updating session:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 },
    )
  }
}
