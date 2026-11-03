import React from 'react';
import { Container } from '../common/Container';
import { Card } from '../common/Card';
import { FadeIn, FadeInStagger } from '../common/FadeIn';
import { strings } from '../../constants/strings';
import { CASE_STUDIES } from '../../constants/cases';
import { Quote } from 'lucide-react';

/**
 * Cases Section: Demonstrating verified client outcomes across MKB sectors with micro scroll reveals.
 */
export const CasesSection: React.FC = () => {
  return (
    <section id="cases" className="py-20 sm:py-28 bg-white/60 dark:bg-wervify-void/60 border-b border-slate-200 dark:border-wervify-marine/40 transition-colors">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-wervify-white">
            {strings.cases.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {strings.cases.subtitle}
          </p>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((c) => (
            <Card key={c.id} variant="elevated" className="flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-wervify-cobalt dark:text-wervify-azure bg-blue-50 dark:bg-wervify-marine/40 px-3 py-1 rounded-full border border-blue-200 dark:border-wervify-marine/50">
                    {c.companySector}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    {c.timeframe}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-wervify-white mb-1">
                  {c.vacancyRole}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 font-mono">
                  {c.title}
                </p>

                {/* Big Metric Box */}
                <div className="rounded-xl border border-blue-100 dark:border-wervify-marine/80 bg-blue-50/70 dark:bg-wervify-marine/20 p-4 mb-6">
                  <div className="text-2xl sm:text-3xl font-black font-mono text-wervify-cobalt dark:text-wervify-azure">
                    {c.primaryMetric}
                  </div>
                  <div className="text-xs font-medium text-slate-700 dark:text-slate-300 mt-1">
                    {c.metricLabel}
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {c.summary}
                </p>
              </div>

              {/* Quote Footer */}
              <div className="pt-4 border-t border-slate-200 dark:border-wervify-marine/50">
                <div className="flex items-start gap-2">
                  <Quote className="h-4 w-4 text-wervify-cobalt dark:text-wervify-azure shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs italic text-slate-700 dark:text-wervify-ice/90 leading-normal">
                      "{c.highlightQuote}"
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium mt-1 font-mono">
                      {c.authorTitle}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
};
