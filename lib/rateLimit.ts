import { ApiError } from './errors';

const WINDOW_MS = 60 * 1000;
const MAX_REQUESTS = 8;

interface RateEntry {
  count: number;
  expiresAt: number;
}

const requestLog = new Map<string, RateEntry>();

export function enforceRateLimit(identifier: string) {
  const now = Date.now();
  const entry = requestLog.get(identifier);

  if (!entry || entry.expiresAt <= now) {
    requestLog.set(identifier, { count: 1, expiresAt: now + WINDOW_MS });
    return;
  }

  if (entry.count >= MAX_REQUESTS) {
    throw new ApiError('Too many requests. Please try again later.', 429);
  }

  entry.count += 1;
}
