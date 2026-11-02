import { prisma } from '../lib/prisma';
import { sendMail } from '../lib/mail';

/**
 * Contact Inquiry API Handler.
 * Validates inquiry fields, stores in database, and notifies Wervify consultants.
 */
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const { name, email, company, message, gdprConsent } = req.body || {};

    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ ok: false, error: 'Naam is verplicht' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
      return res.status(400).json({ ok: false, error: 'Een geldig e-mailadres is verplicht' });
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ ok: false, error: 'Bericht is verplicht' });
    }

    if (!gdprConsent) {
      return res.status(400).json({ ok: false, error: 'Toestemming voor gegevensverwerking is verplicht' });
    }

    const record = await prisma.contactMessage.create({
      data: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        company: company ? String(company).trim() : null,
        message: message.trim(),
        gdprConsent: Boolean(gdprConsent),
      },
    });

    await sendMail({
      to: process.env.ADMIN_NOTIFICATION_EMAIL || 'info@wervify.nl',
      subject: `Nieuw Contactbericht van ${name.trim()}${company ? ` (${company.trim()})` : ''}`,
      html: `
        <h2>Nieuw Contactbericht via Wervify.nl</h2>
        <p><strong>Naam:</strong> ${name.trim()}</p>
        <p><strong>E-mail:</strong> ${email.trim()}</p>
        <p><strong>Bedrijf:</strong> ${company ? company.trim() : 'Niet opgegeven'}</p>
        <p><strong>Bericht:</strong><br />${message.trim().replace(/\n/g, '<br />')}</p>
        <p><strong>Tijdstip:</strong> ${new Date().toLocaleString('nl-NL')}</p>
      `,
    });

    return res.status(200).json({
      ok: true,
      message: 'Bericht succesvol verzonden',
      id: record.id,
    });
  } catch (error: any) {
    console.error('[API Contact Error]:', error);
    return res.status(500).json({
      ok: false,
      error: 'Er is een interne serverfout opgetreden',
    });
  }
}
