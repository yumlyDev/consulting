import { NextResponse, type NextRequest } from 'next/server';
import { supabase } from '@/lib/supabase';

export default async function proxy(request: NextRequest) {
  try {
    const ip = 
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      '0.0.0.0';

    await supabase.from('access_logs').insert([{ ip }]);
  } catch (error) {
    // Silenciar errores
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|css|js)).*)',
  ],
};