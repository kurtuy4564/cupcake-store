import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })
  const protectedRouteres = ['/cart']

  if (protectedRouteres.some(route => pathname.startsWith(route))) {
    if (!token) {
      const url = new URL('/login', request.url)
      // url.searchParams.set('message', 'Unauthorized')
      return NextResponse.redirect(url)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/cart'],
}
