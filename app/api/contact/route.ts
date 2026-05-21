import { NextRequest, NextResponse } from 'next/server';
import { ApiError } from '../../../lib/errors';
import { verifyCsrfToken } from '../../../lib/csrf';
import { validateContactPayload } from '../../../lib/validators';
import { enforceRateLimit } from '../../../lib/rateLimit';
import { logger } from '../../../lib/logger';
import { initMonitoring, captureException } from '../../../lib/monitoring';
import { sendContactNotification } from '../../../lib/sendEmail';

initMonitoring();

function getClientIp(request: NextRequest) {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  return 'unknown';
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  try {
    enforceRateLimit(ip);

    const body = await request.json();
    const csrfToken = typeof body?.csrfToken === 'string' ? body.csrfToken : '';

    if (!verifyCsrfToken(request, csrfToken)) {
      throw new ApiError('Invalid CSRF token.', 403);
    }

    const payload = validateContactPayload(body);
    const result = await sendContactNotification(payload);

    logger.info('Contact submission accepted', {
      ip,
      email: payload.email,
      providerStatus: result.status,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    captureException(error);

    if (error instanceof ApiError) {
      logger.error('Validation error on contact submission', error, { ip });
      return NextResponse.json({ error: error.message }, { status: error.status });
    }

    logger.error('Unhandled contact submission error', error, { ip });
    return NextResponse.json(
      { error: 'Unable to submit the form at this time. Please try again later.' },
      { status: 500 }
    );
  }
}
