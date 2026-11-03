import React from 'react';
import { Container } from '../common/Container';
import { Badge } from '../common/Badge';
import { FadeIn, FadeInStagger } from '../common/FadeIn';
import { strings } from '../../constants/strings';
import { Clock } from 'lucide-react';

/**
 * Process Section: "De Wervify Methode" in 4 steps with micro scroll reveals.
 */
export const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white/60 dark:bg-wervify-void/60 border-b border-slate-200 dark:border-wervify-marine/40 transition-colors">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="pill">
            <span>{strings.process.eyebrow}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-wervify-white">
            {strings.process.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {strings.process.subtitle}
          </p>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {strings.process.steps.map((step) => (
            <div
              key={step.step}
              className="relative rounded-xl border border-slate-200/90 dark:border-wervify-marine/70 bg-white dark:bg-wervify-midnight/60 p-6 flex flex-col justify-between group hover:border-wervify-cobalt/60 dark:hover:border-wervify-azure/60 shadow-sm transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black font-mono text-wervify-cobalt dark:text-wervify-azure">
                    {step.step}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-semibold text-wervify-cobalt dark:text-wervify-ice/80 bg-blue-50 dark:bg-wervify-marine/40 px-2 py-0.5 rounded border border-blue-200 dark:border-wervify-marine/60">
                    <Clock className="h-3 w-3 text-wervify-cobalt dark:text-wervify-azure" />
                    <span>{step.duration}</span>
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-wervify-white mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
};
