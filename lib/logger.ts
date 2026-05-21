type Meta = Record<string, string | number | boolean | undefined>;

function maskEmail(email: string) {
  return email.replace(/(^.{2})(.*)(.{2}@.*$)/, (_, start, middle, suffix) => {
    return `${start}${middle.replace(/./g, '*')}${suffix}`;
  });
}

export const logger = {
  info(message: string, meta: Meta = {}) {
    console.info(JSON.stringify({ level: 'info', message, timestamp: new Date().toISOString(), ...meta }));
  },
  error(message: string, error?: unknown, meta: Meta = {}) {
    const payload: Record<string, unknown> = {
      level: 'error',
      message,
      timestamp: new Date().toISOString(),
      ...meta,
    };

    if (error instanceof Error) {
      payload.error = error.message;
      payload.stack = error.stack;
    } else if (typeof error === 'string') {
      payload.error = error;
    }

    if (typeof payload.email === 'string') {
      payload.email = maskEmail(payload.email as string);
    }

    console.error(JSON.stringify(payload));
  },
};
