import { NextResponse, type NextRequest } from 'next/server';
import { supabase } from '@/lib/supabase';

// Mapas separados: uno para el log en BD, otro para el baneo de ataques
const ipLogs = new Map<string, number>(); 
const ipBanCounter = new Map<string, { hits: number; lastReset: number }>();

export default async function proxy(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || '0.0.0.0';
  const now = Date.now();

  // 1. LÓGICA DE BANEADO (Si hace más de 50 peticiones en 1 minuto)
  const banData = ipBanCounter.get(ip) || { hits: 0, lastReset: now };
  if (now - banData.lastReset > 60000) {
    banData.hits = 1;
    banData.lastReset = now;
  } else {
    banData.hits++;
  }
  ipBanCounter.set(ip, banData);

  if (banData.hits > 50) {
    return new NextResponse('Bloqueado', { status: 429 });
  }

  // 2. LÓGICA DE LOG EN BD (Solo guardamos una vez cada 24 horas por IP)
  const lastLogged = ipLogs.get(ip) || 0;
  if (now - lastLogged > 86400000) { // 86400000 ms = 24 horas
    ipLogs.set(ip, now);
    const pais = request.headers.get('x-vercel-ip-country') || 'Desconocido';
    
    // Disparamos el insert sin esperar (no usamos await para no ralentizar la web)
    supabase.from('access_logs').insert([{ ip, pais }]).then();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /* 
       IMPORTANTE: Solo ejecutamos esto en la raíz '/' y rutas internas.
       Excluimos todo lo demás (js, css, png, etc).
    */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|css|js)).*)',
  ],
};