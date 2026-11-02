import React, { useState } from 'react';
import { Button } from '../common/Button';
import { strings } from '../../constants/strings';
import { submitDemoRequest } from '../../lib/api';
import { CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

interface DemoRequestFormProps {
  initialVacancy?: string;
  onSuccess?: () => void;
}

/**
 * Lead-Capture Demo Request Form with adaptive light/dark theme.
 * @param props DemoRequestFormProps
 */
export const DemoRequestForm: React.FC<DemoRequestFormProps> = ({ initialVacancy = '', onSuccess }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    vacancyTitle: initialVacancy,
    salaryRange: '',
    notes: '',
    email: '',
    phone: '',
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
    if (!formData.companyName.trim() || !formData.vacancyTitle.trim() || !formData.email.trim()) {
      setStatus('error');
      setErrorMessage('Vul alle verplichte velden in.');
      return;
    }

    if (!formData.gdprConsent) {
      setStatus('error');
      setErrorMessage('Ga akkoord met het privacybeleid om door te gaan.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const res = await submitDemoRequest(formData);
    if (res.ok) {
      setStatus('success');
      if (onSuccess) onSuccess();
    } else {
      setStatus('error');
      setErrorMessage(res.error || 'Er is een fout opgetreden bij het versturen.');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-emerald-500/40 bg-emerald-50 dark:bg-wervify-midnight/90 p-8 text-center space-y-4 shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
          <CheckCircle className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-wervify-white">
          Aanvraag succesvol ontvangen!
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
          Bedankt voor je aanvraag voor <span className="font-semibold text-wervify-cobalt dark:text-wervify-ice">{formData.vacancyTitle}</span> bij <span className="font-semibold text-wervify-cobalt dark:text-wervify-ice">{formData.companyName}</span>. Onze recruitment strategist neemt binnen één werkdag contact met je op voor het inplannen van de 20-minuten demo.
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

      {/* Row 1: Company + Vacancy */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            {strings.demo.companyNameLabel}
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder={strings.demo.companyNamePlaceholder}
            required
            className="w-full rounded-lg border border-slate-300 dark:border-wervify-marine bg-slate-50/80 dark:bg-wervify-midnight/70 px-3.5 py-2.5 text-sm text-slate-900 dark:text-wervify-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-wervify-azure focus:outline-none focus:ring-1 focus:ring-wervify-azure"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            {strings.demo.vacancyTitleLabel}
          </label>
          <input
            type="text"
            name="vacancyTitle"
            value={formData.vacancyTitle}
            onChange={handleChange}
            placeholder={strings.demo.vacancyTitlePlaceholder}
            required
            className="w-full rounded-lg border border-slate-300 dark:border-wervify-marine bg-slate-50/80 dark:bg-wervify-midnight/70 px-3.5 py-2.5 text-sm text-slate-900 dark:text-wervify-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-wervify-azure focus:outline-none focus:ring-1 focus:ring-wervify-azure"
          />
        </div>
      </div>

      {/* Row 2: Salary Range + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            {strings.demo.salaryRangeLabel}
          </label>
          <input
            type="text"
            name="salaryRange"
            value={formData.salaryRange}
            onChange={handleChange}
            placeholder={strings.demo.salaryRangePlaceholder}
            className="w-full rounded-lg border border-slate-300 dark:border-wervify-marine bg-slate-50/80 dark:bg-wervify-midnight/70 px-3.5 py-2.5 text-sm text-slate-900 dark:text-wervify-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-wervify-azure focus:outline-none focus:ring-1 focus:ring-wervify-azure"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            {strings.demo.phoneLabel}
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={strings.demo.phonePlaceholder}
            className="w-full rounded-lg border border-slate-300 dark:border-wervify-marine bg-slate-50/80 dark:bg-wervify-midnight/70 px-3.5 py-2.5 text-sm text-slate-900 dark:text-wervify-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-wervify-azure focus:outline-none focus:ring-1 focus:ring-wervify-azure"
          />
        </div>
      </div>

      {/* Row 3: Email */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
          {strings.demo.emailLabel}
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder={strings.demo.emailPlaceholder}
          required
          className="w-full rounded-lg border border-slate-300 dark:border-wervify-marine bg-slate-50/80 dark:bg-wervify-midnight/70 px-3.5 py-2.5 text-sm text-slate-900 dark:text-wervify-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-wervify-azure focus:outline-none focus:ring-1 focus:ring-wervify-azure"
        />
      </div>

      {/* Row 4: Notes */}
      <div>
        <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
          {strings.demo.notesLabel}
        </label>
        <textarea
          name="notes"
          rows={3}
          value={formData.notes}
          onChange={handleChange}
          placeholder={strings.demo.notesPlaceholder}
          className="w-full rounded-lg border border-slate-300 dark:border-wervify-marine bg-slate-50/80 dark:bg-wervify-midnight/70 px-3.5 py-2.5 text-sm text-slate-900 dark:text-wervify-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-wervify-azure focus:outline-none focus:ring-1 focus:ring-wervify-azure resize-none"
        />
      </div>

      {/* Row 5: GDPR Consent */}
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
          <span>{strings.demo.gdprLabel}</span>
        </label>
      </div>

      {/* Submit */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          disabled={status === 'submitting'}
          className="gap-2 shadow-lg shadow-wervify-cobalt/25"
        >
          {status === 'submitting' ? (
            <span>{strings.common.loading}</span>
          ) : (
            <>
              <span>{strings.demo.submitButton}</span>
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </form>
  );
};
