import React from 'react';
import { Container } from '../common/Container';
import { FadeIn } from '../common/FadeIn';
import { strings } from '../../constants/strings';

/**
 * Results Band: Big-Number Metric Strip with micro scroll reveal.
 */
export const ResultsBand: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-wervify-marine via-wervify-cobalt to-wervify-marine dark:from-wervify-midnight dark:via-wervify-void dark:to-wervify-midnight border-b border-wervify-marine/50 text-white transition-colors">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/20 dark:divide-wervify-marine/50">
          {strings.results.band.map((item, idx) => (
            <FadeIn key={idx} delay={idx * 0.08} className="pt-4 lg:pt-0 lg:px-6 space-y-2">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono text-white tracking-tight">
                  {item.value}
                </span>
                {item.unit && (
                  <span className="text-lg font-bold text-wervify-ice dark:text-wervify-azure font-mono">
                    {item.unit}
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm font-medium text-blue-100 dark:text-slate-300">
                {item.label}
              </p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};
