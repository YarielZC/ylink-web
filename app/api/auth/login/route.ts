import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const formData = await request.formData()

  const backendResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login/`, {
    method: 'POST',
    body: formData,
  })

  if (!backendResponse.ok) {
    const error = await backendResponse.json()
    return NextResponse.json(error, { status: backendResponse.status })
  }

  const data = await backendResponse.json()

  const response = NextResponse.json({ success: true })
  response.cookies.set('token', data.access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })

  return response
}
