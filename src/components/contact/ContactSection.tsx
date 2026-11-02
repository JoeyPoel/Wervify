import React from 'react';
import { Container } from '../common/Container';
import { Badge } from '../common/Badge';
import { ContactForm } from './ContactForm';
import { strings } from '../../constants/strings';
import { Mail, PhoneCall, MapPin } from 'lucide-react';

/**
 * Dedicated Contact Section for General Inquiries with adaptive theme.
 */
export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-white dark:bg-wervify-void border-b border-slate-200 dark:border-wervify-marine/40 transition-colors">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="pill">
              <Mail className="h-3.5 w-3.5 text-wervify-cobalt dark:text-wervify-azure mr-1" />
              <span>{strings.contact.eyebrow}</span>
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-wervify-white">
              {strings.contact.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
              {strings.contact.subtitle}
            </p>

            <div className="space-y-4 pt-4 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-wervify-marine/50 text-wervify-cobalt dark:text-wervify-azure border border-blue-200 dark:border-wervify-marine">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Telefoon</p>
                  <a href={`tel:${strings.common.directPhone}`} className="font-semibold text-slate-900 dark:text-wervify-white hover:text-wervify-cobalt dark:hover:text-wervify-ice">
                    {strings.common.directPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-wervify-marine/50 text-wervify-cobalt dark:text-wervify-azure border border-blue-200 dark:border-wervify-marine">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">E-mail</p>
                  <a href={`mailto:${strings.common.directEmail}`} className="font-semibold text-slate-900 dark:text-wervify-white hover:text-wervify-cobalt dark:hover:text-wervify-ice">
                    {strings.common.directEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-wervify-marine/50 text-wervify-cobalt dark:text-wervify-azure border border-blue-200 dark:border-wervify-marine">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Locatie</p>
                  <p className="font-semibold text-slate-900 dark:text-wervify-white">{strings.footer.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 dark:border-wervify-marine/80 bg-white dark:bg-wervify-midnight/80 p-6 sm:p-10 shadow-xl dark:shadow-2xl dark:backdrop-blur-xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
