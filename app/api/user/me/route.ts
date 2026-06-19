import { getTokenOrRespond } from '@/features/auth/utils/token'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const result = getTokenOrRespond(request)

  if ('response' in result) return result.response

  const token = result.token

  const backendResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!backendResponse.ok) {
    const errorData = await backendResponse.json().catch(() => ({ detail: 'Internal Error' }))
    return NextResponse.json(errorData, { status: backendResponse.status })
  }

  const data = await backendResponse.json()

  return NextResponse.json(data)
}
