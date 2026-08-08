import { NextResponse, type NextRequest } from 'next/server';

const ipLogs = new Map<string, number>(); 
const ipBanCounter = new Map<string, { hits: number; lastReset: number }>();

export default async function proxy(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || '0.0.0.0';
  const now = Date.now();

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

  const lastLogged = ipLogs.get(ip) || 0;
  if (now - lastLogged > 86400000) {
    ipLogs.set(ip, now);
    const pais = request.headers.get('x-vercel-ip-country') || 'Desconocido';
    
    // Petición directa a la REST API de Supabase para evitar contaminar las cookies de Auth
    fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/access_logs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''}`,
      },
      body: JSON.stringify([{ ip, pais }]),
    }).catch(() => {});
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|css|js)).*)',
  ],
};