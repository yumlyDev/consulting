import { NextResponse, type NextRequest } from 'next/server';

const ipBanCounter = new Map<string, { hits: number; lastReset: number }>();

export default async function proxy(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0].trim() || '0.0.0.0';
  const now = Date.now();

  // 1. Control de Rate Limiting y Anti-Ataques eficiente
  let banData = ipBanCounter.get(ip);
  if (!banData || now - banData.lastReset > 60000) {
    banData = { hits: 1, lastReset: now };
  } else {
    banData.hits++;
  }
  ipBanCounter.set(ip, banData);

  if (banData.hits > 50) {
    return new NextResponse('Bloqueado', { status: 429 });
  }

  // 2. Registro selectivo (Evitar registrar bots o IPs vacías)
  if (ip !== '0.0.0.0' && ip !== '127.0.0.1' && ip !== '::1') {
    const pais = request.headers.get('x-vercel-ip-country') || 'Desconocido';
    
    // Opcional: Si quieres registrar únicamente tráfico de España o bloquear US/SE, hazlo aquí:
    // if (pais === 'ES') { ... }

    // Usamos event.waitUntil (si aplica) o dejamos la promesa controlada
    try {
      fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/access_logs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
          'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''}`,
          'Prefer': 'resolution=merge-duplicates', // Evita errores si configuras la tabla como única por IP
        },
        body: JSON.stringify({ ip, pais }),
      }).catch(() => {});
    } catch {}
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|css|js)).*)',
  ],
};