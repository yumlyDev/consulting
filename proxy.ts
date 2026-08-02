import { NextResponse, type NextRequest } from 'next/server';
import { supabase } from '@/lib/supabase';

export default async function proxy(request: NextRequest) {
  try {
    const forwardedFor = request.headers.get('x-forwarded-for');
    const ip = forwardedFor ? forwardedFor.split(',')[0].trim() : '127.0.0.1';

    if (ip === '127.0.0.1' || ip === '::1' || ip === 'localhost') {
      return NextResponse.next();
    }

    const ruta = request.nextUrl.pathname;

    await supabase.from('access_logs').insert([{ ip, ruta }]);
  } catch (error) {
    // Silenciar errores
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Coincide solo con las rutas de páginas, excluyendo:
     * - api (rutas de API)
     * - _next/static (archivos estáticos)
     * - _next/image (optimización de imágenes)
     * - favicon.ico, archivos comunes (png, jpg, css, js, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|css|js)).*)',
  ],
};