import { NextResponse, type NextRequest } from 'next/server';
import { supabase } from '@/lib/supabase';

// Almacén temporal en memoria para controlar la última vez que una IP registró una visita
const recentIps = new Map<string, number>();

export default async function proxy(request: NextRequest) {
  try {
    const ip = 
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      '0.0.0.0';

    const now = Date.now();
    const lastAccess = recentIps.get(ip) || 0;

    // Si la misma IP hace otra petición antes de 5 segundos, la ignoramos para evitar duplicados por F5 o navegación
    if (now - lastAccess < 5000) {
      return NextResponse.next();
    }

    recentIps.set(ip, now);

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