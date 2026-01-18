import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory rate limiter
const rateLimit = new Map()

function getRateLimitKey(request) {
  const forwarded = request.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0] : request.ip || 'unknown'
  return ip
}

function isRateLimited(key, limit, windowMs) {
  const now = Date.now()
  const record = rateLimit.get(key)

  if (!record || now > record.resetTime) {
    rateLimit.set(key, { count: 1, resetTime: now + windowMs })
    return false
  }

  if (record.count >= limit) {
    return true
  }

  record.count++
  return false
}

export function middleware(request) {
  // Apply rate limiting to API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    const key = getRateLimitKey(request)
    const limit = 60 // Default rate limit
    const windowMs = 60 * 1000 // 1 minute

    if (isRateLimited(key, limit, windowMs)) {
      return new NextResponse('Too Many Requests', { status: 429 })
    }
  }

  // Add security headers
  const response = NextResponse.next()
  
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  
  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}