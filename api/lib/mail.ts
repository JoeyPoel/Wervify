/**
 * Resilient Mail Dispatcher for Wervify Lead Capture.
 * Degrades gracefully if RESEND_API_KEY or SMTP parameters are unconfigured.
 */

export interface SendMailOptions {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}

/**
 * Dispatches an email or logs the output safely if credentials are not configured.
 * @param options SendMailOptions
 */
export async function sendMail(options: SendMailOptions): Promise<{ ok: boolean; messageId?: string; fallback?: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.info('[Wervify Mail Fallback] RESEND_API_KEY not configured. Simulating delivery:');
    console.info(`  To: ${options.to}`);
    console.info(`  Subject: ${options.subject}`);
    console.info(`  HTML Length: ${options.html.length} chars`);
    return { ok: true, fallback: true, messageId: `mock-mail-${Date.now()}` };
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: process.env.MAIL_FROM || 'Wervify <info@wervify.nl>',
        to: options.to,
        subject: options.subject,
        html: options.html,
        reply_to: options.replyTo,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error('[Wervify Mail Error] Resend API responded with error:', err);
      return { ok: false, fallback: true };
    }

    const data = (await response.json()) as { id: string };
    return { ok: true, messageId: data.id };
  } catch (error) {
    console.error('[Wervify Mail Exception] Exception occurred while sending email:', error);
    return { ok: false, fallback: true };
  }
}
