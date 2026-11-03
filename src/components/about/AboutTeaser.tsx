import React from 'react';
import { Container } from '../common/Container';
import { Card } from '../common/Card';
import { FadeIn } from '../common/FadeIn';
import { strings } from '../../constants/strings';
import { MessageSquare, MapPin, CheckCircle } from 'lucide-react';

/**
 * About Section Teaser with Real Founder Story (Justin Bassa & Bart).
 * Genuine Dutch agency presence with direct founder contact channels.
 */
export const AboutTeaser: React.FC = () => {
  const ab = strings.about;

  return (
    <section id="over-ons" className="py-20 sm:py-28 bg-slate-100/60 dark:bg-wervify-midnight/60 border-b border-slate-200 dark:border-wervify-marine/40 transition-colors">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Mission Narrative */}
          <FadeIn className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-wervify-white">
              {ab.title}
            </h2>
            <p className="text-lg text-wervify-cobalt dark:text-wervify-azure font-semibold">
              {ab.subtitle}
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {ab.story}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4 text-xs font-semibold text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>{strings.pricing.guaranteePill1}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                <span>{strings.pricing.guaranteePill2}</span>
              </div>
            </div>
          </FadeIn>

          {/* Founder Spotlight Card */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.12}>
              <Card variant="elevated" className="border-slate-200 dark:border-wervify-marine/70 p-6 sm:p-7 space-y-5 shadow-lg">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-wervify-marine/50">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                    <MapPin className="h-3.5 w-3.5 text-wervify-cobalt dark:text-wervify-azure" />
                    <span>{ab.location}</span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full">
                    Actief in heel NL
                  </span>
                </div>

                <div className="space-y-3">
                  {/* Founder 1 */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-wervify-white">
                        {ab.founder1Name}
                      </h3>
                      <p className="text-xs text-wervify-cobalt dark:text-wervify-azure">
                        {ab.founder1Role}
                      </p>
                    </div>
                  </div>

                  {/* Founder 2 */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-wervify-marine/40">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-wervify-white">
                        {ab.founder2Name}
                      </h3>
                      <p className="text-xs text-wervify-cobalt dark:text-wervify-azure">
                        {ab.founder2Role}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-wervify-marine/50 text-xs text-slate-600 dark:text-slate-300">
                  <p className="leading-relaxed">
                    {ab.consultantSubtitle}
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href="https://wa.me/31850000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-colors"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>{ab.directWhatsAppText}</span>
                  </a>
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
};
