import crypto from 'crypto';
import { NextRequest } from 'next/server';

const CSRF_COOKIE_NAME = 'ngwebo_csrf';
const CSRF_LIFETIME_SECONDS = 60 * 60;

export function createCsrfToken() {
  return crypto.randomBytes(32).toString('hex');
}

export function createCsrfCookieHeader(token: string) {
  const secureFlag = process.env.NODE_ENV === 'production' ? 'Secure; ' : '';
  return `${CSRF_COOKIE_NAME}=${token}; Path=/; HttpOnly; ${secureFlag}SameSite=Lax; Max-Age=${CSRF_LIFETIME_SECONDS}`;
}

export function verifyCsrfToken(request: NextRequest, token?: string) {
  const cookieValue = request.cookies.get(CSRF_COOKIE_NAME)?.value;
  return Boolean(cookieValue && token && cookieValue === token);
}
