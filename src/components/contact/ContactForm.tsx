import React, { useState } from 'react';
import { Button } from '../common/Button';
import { strings } from '../../constants/strings';
import { submitContactMessage } from '../../lib/api';
import { CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

/**
 * General Contact Form with adaptive light/dark theme.
 */
export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    gdprConsent: false,
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Vul alle verplichte velden in.');
      return;
    }

    if (!formData.gdprConsent) {
      setStatus('error');
      setErrorMessage('Ga akkoord met de verwerking van je gegevens om door te gaan.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const res = await submitContactMessage(formData);
    if (res.ok) {
      setStatus('success');
    } else {
      setStatus('error');
      setErrorMessage(res.error || 'Er is een fout opgetreden bij het verzenden.');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-emerald-500/40 bg-emerald-50 dark:bg-wervify-midnight/90 p-8 text-center space-y-4 shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
          <CheckCircle className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-wervify-white">
          Bericht succesvol verzonden!
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
          Bedankt voor je bericht, <span className="font-semibold text-wervify-cobalt dark:text-wervify-ice">{formData.name}</span>. Wij nemen binnen één werkdag contact met je op.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      {status === 'error' && (
        <div className="flex items-center gap-2 p-3.5 rounded-lg border border-red-500/30 bg-red-500/10 text-xs text-red-600 dark:text-red-300">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div>
        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
          {strings.contact.nameLabel}
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={strings.contact.namePlaceholder}
          required
          className="w-full rounded-lg border border-slate-300 dark:border-wervify-marine bg-slate-50/80 dark:bg-wervify-midnight/70 px-3.5 py-2.5 text-sm text-slate-900 dark:text-wervify-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-wervify-azure focus:outline-none focus:ring-1 focus:ring-wervify-azure"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            {strings.contact.emailLabel}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={strings.contact.emailPlaceholder}
            required
            className="w-full rounded-lg border border-slate-300 dark:border-wervify-marine bg-slate-50/80 dark:bg-wervify-midnight/70 px-3.5 py-2.5 text-sm text-slate-900 dark:text-wervify-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-wervify-azure focus:outline-none focus:ring-1 focus:ring-wervify-azure"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            {strings.contact.companyLabel}
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder={strings.contact.companyPlaceholder}
            className="w-full rounded-lg border border-slate-300 dark:border-wervify-marine bg-slate-50/80 dark:bg-wervify-midnight/70 px-3.5 py-2.5 text-sm text-slate-900 dark:text-wervify-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-wervify-azure focus:outline-none focus:ring-1 focus:ring-wervify-azure"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
          {strings.contact.messageLabel}
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder={strings.contact.messagePlaceholder}
          required
          className="w-full rounded-lg border border-slate-300 dark:border-wervify-marine bg-slate-50/80 dark:bg-wervify-midnight/70 px-3.5 py-2.5 text-sm text-slate-900 dark:text-wervify-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-wervify-azure focus:outline-none focus:ring-1 focus:ring-wervify-azure resize-none"
        />
      </div>

      <div className="pt-1">
        <label className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-400 cursor-pointer select-none">
          <input
            type="checkbox"
            name="gdprConsent"
            checked={formData.gdprConsent}
            onChange={handleChange}
            required
            className="mt-0.5 rounded border-slate-300 dark:border-wervify-marine text-wervify-cobalt focus:ring-wervify-azure"
          />
          <span>{strings.contact.gdprLabel}</span>
        </label>
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={status === 'submitting'}
          className="gap-2 cursor-pointer"
        >
          {status === 'submitting' ? (
            <span>{strings.common.loading}</span>
          ) : (
            <>
              <span>{strings.contact.submitButton}</span>
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
};
