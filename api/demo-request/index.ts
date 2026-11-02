import { prisma } from '../lib/prisma';
import { sendMail } from '../lib/mail';

/**
 * Demo Request API Handler.
 * Validates lead parameters, persists to database/fallback, and dispatches notification.
 */
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const { companyName, vacancyTitle, salaryRange, notes, email, phone, gdprConsent } = req.body || {};

    if (!companyName || typeof companyName !== 'string' || !companyName.trim()) {
      return res.status(400).json({ ok: false, error: 'Bedrijfsnaam is verplicht' });
    }

    if (!vacancyTitle || typeof vacancyTitle !== 'string' || !vacancyTitle.trim()) {
      return res.status(400).json({ ok: false, error: 'Functietitel is verplicht' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
      return res.status(400).json({ ok: false, error: 'Een geldig e-mailadres is verplicht' });
    }

    if (!gdprConsent) {
      return res.status(400).json({ ok: false, error: 'Toestemming voor gegevensverwerking is verplicht' });
    }

    const record = await prisma.demoRequest.create({
      data: {
        companyName: companyName.trim(),
        vacancyTitle: vacancyTitle.trim(),
        salaryRange: salaryRange ? String(salaryRange).trim() : null,
        notes: notes ? String(notes).trim() : null,
        email: email.trim().toLowerCase(),
        phone: phone ? String(phone).trim() : null,
        gdprConsent: Boolean(gdprConsent),
      },
    });

    // Notify team
    await sendMail({
      to: process.env.ADMIN_NOTIFICATION_EMAIL || 'leads@wervify.nl',
      subject: `Nieuwe Demo Aanvraag: ${companyName.trim()} (${vacancyTitle.trim()})`,
      html: `
        <h2>Nieuwe Demo Aanvraag via Wervify.nl</h2>
        <p><strong>Bedrijf:</strong> ${companyName.trim()}</p>
        <p><strong>Vacature:</strong> ${vacancyTitle.trim()}</p>
        <p><strong>E-mail:</strong> ${email.trim()}</p>
        <p><strong>Telefoon:</strong> ${phone ? phone.trim() : 'Niet opgegeven'}</p>
        <p><strong>Salarisindicatie:</strong> ${salaryRange ? salaryRange.trim() : 'Niet opgegeven'}</p>
        <p><strong>Toelichting:</strong> ${notes ? notes.trim() : '-'}</p>
        <p><strong>Tijdstip:</strong> ${new Date().toLocaleString('nl-NL')}</p>
      `,
    });

    return res.status(200).json({
      ok: true,
      message: 'Demo-aanvraag succesvol ontvangen',
      id: record.id,
    });
  } catch (error: any) {
    console.error('[API Demo Request Error]:', error);
    return res.status(500).json({
      ok: false,
      error: 'Er is een interne fout opgetreden bij het verwerken van de aanvraag',
    });
  }
}
