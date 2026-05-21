import { ApiError } from './errors';

export interface ContactInput {
  name: string;
  email: string;
  message: string;
  csrfToken: string;
}

export function sanitizeString(value: string) {
  return value
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

export function validateContactPayload(body: unknown): ContactInput {
  if (!body || typeof body !== 'object') {
    throw new ApiError('Invalid form submission.', 400);
  }

  const raw = body as Record<string, unknown>;
  const name = typeof raw.name === 'string' ? raw.name.trim() : '';
  const email = typeof raw.email === 'string' ? raw.email.trim().toLowerCase() : '';
  const message = typeof raw.message === 'string' ? raw.message.trim() : '';
  const csrfToken = typeof raw.csrfToken === 'string' ? raw.csrfToken.trim() : '';

  if (!name) {
    throw new ApiError('Name is required.', 400);
  }

  if (name.length > 80) {
    throw new ApiError('Name is too long.', 400);
  }

  if (!email || !isValidEmail(email)) {
    throw new ApiError('A valid email is required.', 400);
  }

  if (message.length < 10 || message.length > 1000) {
    throw new ApiError('Message must be between 10 and 1000 characters.', 400);
  }

  if (!csrfToken) {
    throw new ApiError('Missing CSRF token.', 403);
  }

  return {
    name: sanitizeString(name),
    email: sanitizeString(email),
    message: sanitizeString(message),
    csrfToken,
  };
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
