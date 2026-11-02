import { DemoRequestPayload, ContactMessagePayload, ApiResponse } from '../types/forms.types';

/**
 * Submits a demo request to the serverless backend.
 * @param payload DemoRequestPayload
 */
export async function submitDemoRequest(payload: DemoRequestPayload): Promise<ApiResponse> {
  try {
    const res = await fetch('/api/demo-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return await res.json();
  } catch (err: any) {
    console.error('Demo request submission failed:', err);
    return { ok: false, error: 'Netwerkfout bij het versturen van uw aanvraag. Probeer het later opnieuw.' };
  }
}

/**
 * Submits a general contact inquiry.
 * @param payload ContactMessagePayload
 */
export async function submitContactMessage(payload: ContactMessagePayload): Promise<ApiResponse> {
  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    return await res.json();
  } catch (err: any) {
    console.error('Contact inquiry submission failed:', err);
    return { ok: false, error: 'Netwerkfout bij het verzenden van uw bericht.' };
  }
}

/**
 * Subscribes an email to recruitment insights.
 * @param email string
 */
export async function submitNewsletterSubscription(email: string): Promise<ApiResponse> {
  try {
    const res = await fetch('/api/newsletter/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    return await res.json();
  } catch (err: any) {
    console.error('Newsletter subscription failed:', err);
    return { ok: false, error: 'Netwerkfout bij het aanmelden.' };
  }
}
