import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// All valid routes in your portfolio
const VALID_ROUTES = [
  '/',
  '/about',
  '/projects',
  '/contact',
]

// Valid route prefixes (for dynamic routes)
const VALID_PREFIXES = [
  '/achievements/',
  '/projects/',
  '/_next/',
  '/api/',
  '/images/',
  '/icons/',
  '/fonts/',
  '/resume',
  '/certificates/',
]

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Allow exact valid routes
  if (VALID_ROUTES.includes(pathname)) {
    return NextResponse.next()
  }

  // Allow valid prefixes (dynamic routes + assets)
  if (VALID_PREFIXES.some((prefix) => pathname.startsWith(prefix))) {
    return NextResponse.next()
  }

  // Allow static files
  if (
    pathname.includes('.') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon')
  ) {
    return NextResponse.next()
  }

  // Unknown route → redirect to home
  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*$).*)',
  ],
}