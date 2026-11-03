import React from 'react';
import { Container } from '../common/Container';
import { FadeIn, FadeInStagger } from '../common/FadeIn';
import { strings } from '../../constants/strings';

/**
 * Process Section: "Van vacature tot eerste sollicitatiegesprek in 14 dagen".
 * High-clarity roadmap layout with connected timeline mechanics.
 */
export const ProcessSection: React.FC = () => {
  return (
    <section id="werkwijze" className="py-20 sm:py-28 bg-white/60 dark:bg-wervify-void/60 border-b border-slate-200 dark:border-wervify-marine/40 transition-colors">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-wervify-white">
            {strings.process.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {strings.process.subtitle}
          </p>
        </FadeIn>

        {/* 4-Step Connected Agency Timeline */}
        <div className="relative">
          {/* Subtle connecting track line on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-slate-200 dark:bg-wervify-marine/50 -translate-y-12 z-0 pointer-events-none" />

          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {strings.process.steps.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-slate-200/90 dark:border-wervify-marine/70 bg-white dark:bg-wervify-midnight/70 p-7 flex flex-col justify-between group hover:border-wervify-cobalt/60 dark:hover:border-wervify-azure/60 shadow-sm hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-semibold tracking-wider uppercase text-wervify-cobalt dark:text-wervify-azure bg-blue-50 dark:bg-wervify-cobalt/20 px-3 py-1 rounded-full border border-blue-100 dark:border-wervify-cobalt/40">
                      Stap {idx + 1}
                    </span>
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-wervify-white mb-2.5 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </FadeInStagger>
        </div>
      </Container>
    </section>
  );
};
