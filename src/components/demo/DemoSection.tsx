import React from 'react';
import { Container } from '../common/Container';
import { FadeIn } from '../common/FadeIn';
import { DemoRequestForm } from './DemoRequestForm';
import { strings } from '../../constants/strings';
import { PhoneCall, Check } from 'lucide-react';

interface DemoSectionProps {
  selectedTier?: string;
}

/**
 * Closing CTA Section with Demo Request Form & Direct Phone Link.
 * @param props DemoSectionProps
 */
export const DemoSection: React.FC<DemoSectionProps> = ({ selectedTier }) => {
  return (
    <section id="demo" className="py-20 sm:py-28 bg-slate-100/60 dark:bg-wervify-midnight/60 border-b border-slate-200 dark:border-wervify-marine/40 relative overflow-hidden transition-colors">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          {/* Left Column: Benefits & Direct Call Line */}
          <FadeIn className="lg:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-wervify-white leading-[1.15]">
              {strings.demo.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {strings.demo.subtitle}
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-200">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>Volledig vrijblijvend adviesgesprek van 20 minuten</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-200">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>Direct inzicht in passieve kandidaten in jouw wervingsregio</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-200">
                <div className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                  <Check className="h-3.5 w-3.5" />
                </div>
                <span>Live demonstratie van AI-assistent Bo in WhatsApp</span>
              </div>
            </div>

            {/* Direct Phone Assistance Box */}
            <div className="mt-8 rounded-xl border border-slate-200 dark:border-wervify-marine/70 bg-slate-50 dark:bg-wervify-midnight/60 p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-wervify-white mb-1">
                {strings.demo.phoneCallHeading}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
                {strings.demo.phoneCallText}
              </p>
              <a
                href={`tel:${strings.common.directPhone}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-wervify-cobalt dark:text-wervify-azure hover:underline transition-colors"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 dark:bg-wervify-cobalt/30 border border-blue-200 dark:border-wervify-marine text-wervify-cobalt dark:text-wervify-azure">
                  <PhoneCall className="h-4 w-4" />
                </div>
                <span>{strings.common.directPhone}</span>
              </a>
            </div>
          </FadeIn>

          {/* Right Column: Lead Capture Form Card */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-slate-200 dark:border-wervify-marine/80 bg-white dark:bg-wervify-midnight/80 p-6 sm:p-10 shadow-xl dark:shadow-2xl dark:backdrop-blur-xl">
                {selectedTier && (
                  <div className="mb-6 p-3 rounded-lg bg-blue-50 dark:bg-wervify-marine/40 border border-blue-200 dark:border-wervify-azure/40 text-xs font-semibold text-wervify-cobalt dark:text-wervify-ice">
                    Gekozen pakket: <span className="text-slate-900 dark:text-wervify-white font-bold">{selectedTier}</span>
                  </div>
                )}
                <DemoRequestForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
};
