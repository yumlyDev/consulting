import { NextResponse, type NextRequest } from 'next/server';
import { supabase } from '@/lib/supabase';

export default async function proxy(request: NextRequest) {
  try {
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';
    const ruta = request.nextUrl.pathname;

    // Inserción directa a Supabase sin filtros de memoria complejos
    const { error } = await supabase.from('access_logs').insert([{ ip, ruta }]);
    
    if (error) {
      console.error('Error insertando en Supabase:', error);
    }
  } catch (error) {
    console.error('Excepción en proxy:', error);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|css|js)).*)',
  ],
};