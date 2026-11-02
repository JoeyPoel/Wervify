import React from 'react';
import { Container } from '../common/Container';
import { Badge } from '../common/Badge';
import { Card } from '../common/Card';
import { FadeIn } from '../common/FadeIn';
import { strings } from '../../constants/strings';
import { Compass, User, PhoneCall, ShieldCheck } from 'lucide-react';

/**
 * About Section Teaser with Founder Mission & Dedicated Consultant Card.
 */
export const AboutTeaser: React.FC = () => {
  return (
    <section id="over-ons" className="py-20 sm:py-28 bg-white dark:bg-wervify-void border-b border-slate-200 dark:border-wervify-marine/40 transition-colors">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Mission Narrative */}
          <FadeIn className="lg:col-span-7 space-y-6">
            <Badge variant="pill">
              <Compass className="h-3.5 w-3.5 text-wervify-cobalt dark:text-wervify-azure mr-1" />
              <span>{strings.about.eyebrow}</span>
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-wervify-white">
              {strings.about.title}
            </h2>
            <p className="text-lg text-wervify-cobalt dark:text-wervify-azure font-semibold">
              {strings.about.subtitle}
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {strings.about.story}
            </p>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-wervify-cobalt dark:text-wervify-azure shrink-0" />
                <span>Geen wurgcontracten</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-wervify-cobalt dark:text-wervify-azure shrink-0" />
                <span>100% eigenaarschap van data</span>
              </div>
            </div>
          </FadeIn>

          {/* Consultant Spotlight Card */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.12}>
              <Card variant="elevated" className="border-blue-200/80 dark:border-wervify-azure/40">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-wervify-cobalt to-wervify-cerulean text-white shadow-lg">
                    <User className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-wervify-white">
                      {strings.about.consultantName}
                    </h3>
                    <p className="text-xs text-wervify-cobalt dark:text-wervify-azure font-medium">
                      {strings.about.consultantRole}
                    </p>
                  </div>
                </div>

                <div className="pt-2 pb-4 text-xs text-slate-600 dark:text-slate-300 space-y-2 border-t border-slate-100 dark:border-wervify-marine/50">
                  <p className="font-semibold text-slate-900 dark:text-wervify-ice">
                    {strings.about.consultantTitle}
                  </p>
                  <p className="leading-relaxed">
                    {strings.about.consultantSubtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-wervify-marine/50 flex items-center justify-between text-xs">
                  <span className="text-slate-500 dark:text-slate-400">Direct contact:</span>
                  <a
                    href={`tel:${strings.common.directPhone}`}
                    className="inline-flex items-center gap-1.5 font-bold text-wervify-cobalt dark:text-wervify-azure hover:underline"
                  >
                    <PhoneCall className="h-3.5 w-3.5" />
                    <span>{strings.common.directPhone}</span>
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
