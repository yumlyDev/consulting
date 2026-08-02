import { NextResponse, type NextRequest } from 'next/server';
import { supabase } from '@/lib/supabase';

export default async function proxy(request: NextRequest) {
  try {
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';

    if (ip === '127.0.0.1' || ip === '::1' || ip === 'localhost') {
      return NextResponse.next();
    }

    await supabase.from('access_logs').insert([{ ip }]);
  } catch (error) {
    // Silenciamos errores
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};