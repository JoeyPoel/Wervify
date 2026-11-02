import React, { useState } from 'react';
import { Container } from '../common/Container';
import { strings } from '../../constants/strings';
import { submitNewsletterSubscription } from '../../lib/api';
import { ArrowRight, CheckCircle, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

/**
 * Global Footer with Newsletter Subscription & Legal Notices.
 * @param props FooterProps
 */
export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;

    setStatus('loading');
    const res = await submitNewsletterSubscription(email);
    if (res.ok) {
      setStatus('success');
      setMessage(res.message || strings.common.success);
      setEmail('');
    } else {
      setStatus('error');
      setMessage(res.error || strings.common.error);
    }
  };

  const handleLink = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.hash = path;
    }
  };

  return (
    <footer className="border-t border-wervify-marine/50 bg-wervify-midnight/90 pt-16 pb-12 text-slate-300">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-wervify-marine/40">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-wervify-cobalt to-wervify-cerulean text-wervify-white shadow-sm">
                <svg className="h-5 w-5" viewBox="0 0 32 32" fill="none">
                  <path d="M7 9L11.5 23L16 13.5L20.5 23L25 9" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 9L25 15" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-wervify-white">
                {strings.common.brandName}
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {strings.footer.description}
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-wervify-azure" />
                <span>{strings.footer.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-wervify-azure" />
                <a href={`mailto:${strings.common.directEmail}`} className="hover:text-wervify-ice">
                  {strings.common.directEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-wervify-white mb-4">
              {strings.footer.navigationHeading}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/aanpak" onClick={(e) => handleLink('/aanpak', e)} className="hover:text-wervify-ice transition-colors">
                  {strings.nav.approach}
                </a>
              </li>
              <li>
                <a href="/pakketten" onClick={(e) => handleLink('/pakketten', e)} className="hover:text-wervify-ice transition-colors">
                  {strings.nav.pricing}
                </a>
              </li>
              <li>
                <a href="/cases" onClick={(e) => handleLink('/cases', e)} className="hover:text-wervify-ice transition-colors">
                  {strings.nav.cases}
                </a>
              </li>
              <li>
                <a href="/over-ons" onClick={(e) => handleLink('/over-ons', e)} className="hover:text-wervify-ice transition-colors">
                  {strings.nav.about}
                </a>
              </li>
              <li>
                <a href="/contact" onClick={(e) => handleLink('/contact', e)} className="hover:text-wervify-ice transition-colors">
                  {strings.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-wervify-white mb-4">
              {strings.footer.legalHeading}
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li>{strings.footer.kvkLabel}</li>
              <li>{strings.footer.btwLabel}</li>
              <li>
                <a href="#privacy" className="hover:text-wervify-ice transition-colors">
                  {strings.footer.privacyLink}
                </a>
              </li>
              <li>
                <a href="#voorwaarden" className="hover:text-wervify-ice transition-colors">
                  {strings.footer.termsLink}
                </a>
              </li>
              <li>
                <a href="#cookies" className="hover:text-wervify-ice transition-colors">
                  {strings.footer.cookiesLink}
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-wervify-white">
              {strings.footer.newsletterHeading}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {strings.footer.newsletterSubtitle}
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={strings.footer.newsletterPlaceholder}
                  required
                  className="w-full rounded-lg border border-wervify-marine bg-wervify-void/80 px-3.5 py-2.5 text-xs text-slate-100 placeholder-slate-500 focus:border-wervify-azure focus:outline-none focus:ring-1 focus:ring-wervify-azure"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full inline-flex items-center justify-center gap-1.5 rounded-lg bg-wervify-marine hover:bg-wervify-cobalt px-3 py-2 text-xs font-semibold text-wervify-white transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <span>{strings.common.loading}</span>
                ) : (
                  <>
                    <span>{strings.footer.newsletterButton}</span>
                    <ArrowRight className="h-3 w-3" />
                  </>
                )}
              </button>
            </form>
            {status === 'success' && (
              <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                <CheckCircle className="h-3.5 w-3.5" />
                <span>{message}</span>
              </div>
            )}
            {status === 'error' && (
              <p className="text-xs text-red-400">{message}</p>
            )}
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>{strings.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <span>{strings.common.tagline}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

