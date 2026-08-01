import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function proxy(request: NextRequest) {
  try {
    // 1. Registrar la IP de quien accede
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';

    // Evitamos registrar localhost si estás probando en local
    if (ip !== '127.0.0.1' && ip !== '::1') {
      await supabase.from('access_logs').insert([{ ip }]);
    }
  } catch (error) {
    console.error('Error registrando acceso en proxy:', error);
  }

  // 2. Dejar pasar la petición libremente
  return NextResponse.next();
}

export const config = {
  matcher: ['/crm/administracion/:path*', '/crm/clientes/:path*', '/crm/actividad/:path*'],
};