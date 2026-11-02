import { prisma } from '../lib/prisma';

/**
 * Newsletter Subscription API Handler.
 */
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  try {
    const { email } = req.body || {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== 'string' || !emailRegex.test(email)) {
      return res.status(400).json({ ok: false, error: 'Ongeldig e-mailadres' });
    }

    const cleanEmail = email.trim().toLowerCase();

    await prisma.newsletterSubscriber.upsert({
      where: { email: cleanEmail },
      create: { email: cleanEmail },
      update: { active: true },
    });

    return res.status(200).json({
      ok: true,
      message: 'Succesvol ingeschreven voor recruitment inzichten',
    });
  } catch (error: any) {
    console.error('[API Newsletter Error]:', error);
    return res.status(500).json({
      ok: false,
      error: 'Er is een fout opgetreden bij het inschrijven',
    });
  }
}
