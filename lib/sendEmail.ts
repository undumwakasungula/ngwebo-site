import { ContactInput } from './validators';

function parseRecipients(value: string | undefined) {
  if (!value) {
    return [];
  }

  return value
    .split(/[;,\s]+/)
    .map((address) => address.trim())
    .filter((address) => address.length > 0);
}

export async function sendContactNotification(input: ContactInput) {
  const apiKey = process.env.SENDGRID_API_KEY;
  const fromEmail = process.env.SENDGRID_FROM_EMAIL;
  const recipientValue = process.env.SENDGRID_TO_EMAIL;
  const recipients = parseRecipients(recipientValue);

  if (!apiKey || !fromEmail || recipients.length === 0) {
    return { status: 'skipped' };
  }

  const body = {
    personalizations: [
      {
        to: recipients.map((email) => ({ email })),
      },
    ],
    from: { email: fromEmail },
    subject: `Ngwebo contact form submission from ${input.name}`,
    content: [
      {
        type: 'text/plain',
        value: `Name: ${input.name}\nEmail: ${input.email}\n\n${input.message}`,
      },
    ],
  };

  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Email provider returned ${response.status}: ${text}`);
  }

  return { status: 'sent' };
}
