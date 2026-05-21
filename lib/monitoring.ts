import * as Sentry from '@sentry/node';

const dsn = process.env.SENTRY_DSN;

export function initMonitoring() {
  if (!dsn) {
    return;
  }

  Sentry.init({
    dsn,
    environment: process.env.NODE_ENV,
    tracesSampleRate: 0.05,
  });
}

export function captureException(error: unknown) {
  if (!dsn) {
    return;
  }

  Sentry.captureException(error);
}
