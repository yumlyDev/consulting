import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function proxy(request: NextRequest) {
  // Dejamos pasar la petición libremente sin bloquear por falta de cookies del servidor
  return NextResponse.next();
}

export const config = {
  matcher: ['/crm/administracion/:path*', '/crm/clientes/:path*'],
};