import { NextRequest, NextResponse } from 'next/server';
import { createCsrfCookieHeader, createCsrfToken } from '../../../lib/csrf';
import { initMonitoring } from '../../../lib/monitoring';
import { logger } from '../../../lib/logger';

initMonitoring();

export async function GET(request: NextRequest) {
  const token = createCsrfToken();
  const response = NextResponse.json({ token });

  response.headers.set('Set-Cookie', createCsrfCookieHeader(token));
  response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate');

  logger.info('CSRF cookie issued', { path: request.nextUrl.pathname });

  return response;
}
