import { NextRequest, NextResponse } from 'next/server'

export function getTokenOrRespond(
  request: NextRequest
): { token: string } | { response: NextResponse } {
  const token = request.cookies.get('token')?.value

  if (!token) {
    const response = NextResponse.json({ detail: 'No authenticated' }, { status: 401 })
    return { response }
  }

  return { token }
}
