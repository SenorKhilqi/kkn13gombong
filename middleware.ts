import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '@/lib/auth';

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token');
  const { pathname } = request.nextUrl;

  console.log('Middleware - Path:', pathname, 'Token exists:', !!token);

  // Protected admin routes
  if (pathname.startsWith('/dashboard/admin')) {
    if (!token) {
      console.log('No token - redirecting to login');
      return NextResponse.redirect(new URL('/login', request.url));
    }

    const payload = await verifyToken(token.value);
    console.log('Token payload:', payload);

    if (!payload || payload.role !== 'admin') {
      console.log('Invalid token or not admin - redirecting to home');
      return NextResponse.redirect(new URL('/', request.url));
    }

    console.log('Admin verified - allowing access');
  }

  // Redirect logged in users from auth pages
  if (pathname === '/login' || pathname === '/register') {
    if (token) {
      const payload = await verifyToken(token.value);
      if (payload) {
        // Redirect admin ke dashboard, user biasa ke home
        if (payload.role === 'admin') {
          return NextResponse.redirect(new URL('/dashboard/admin', request.url));
        }
        return NextResponse.redirect(new URL('/', request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/admin/:path*', '/dashboard', '/login', '/register'],
};
