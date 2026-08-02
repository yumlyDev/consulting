import { NextResponse, type NextRequest } from 'next/server';
import { supabase } from '@/lib/supabase';

// Guarda el último registro y el contador de peticiones por IP
const ipTracker = new Map<string, { lastLog: number; hits: number }>();

export default async function proxy(request: NextRequest) {
  try {
    const ip = 
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      '0.0.0.0';

    const now = Date.now();
    const data = ipTracker.get(ip) || { lastLog: 0, hits: 0 };

    // Si pasaron más de 60 segundos (60000 ms), reiniciamos y guardamos la visita
    if (now - data.lastLog > 60000) {
      data.hits = 1;
      data.lastLog = now;
      
      const pais = request.headers.get('x-vercel-ip-country') || 'Desconocido';
      await supabase.from('access_logs').insert([{ ip, pais }]);
    } else {
      data.hits++;
      
      // Si hace más de 30 peticiones en menos de 60 segundos, se bloquea el acceso
      if (data.hits > 30) {
        return new NextResponse('Acceso bloqueado por exceso de peticiones.', { status: 429 });
      }
    }

    ipTracker.set(ip, data);
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