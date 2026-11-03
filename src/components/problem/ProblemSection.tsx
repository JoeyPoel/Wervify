import React from 'react';
import { Container } from '../common/Container';
import { Card } from '../common/Card';
import { FadeIn, FadeInStagger } from '../common/FadeIn';
import { strings } from '../../constants/strings';
import { Check } from 'lucide-react';

/**
 * Problem Section: The 3 core pitfalls of traditional recruitment for Dutch SMEs.
 * Clean, editorial presentation without artificial numbers or icon-in-a-box patterns.
 */
export const ProblemSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-white/60 dark:bg-wervify-void/60 border-b border-slate-200 dark:border-wervify-marine/40 transition-colors">
      <Container className="relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-wervify-white">
            {strings.problem.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {strings.problem.subtitle}
          </p>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strings.problem.cards.map((card, idx) => (
            <Card
              key={idx}
              variant="interactive"
              className="flex flex-col justify-between p-8 bg-white dark:bg-wervify-midnight/70 border border-slate-200 dark:border-wervify-marine/60 rounded-2xl shadow-sm hover:shadow-lg transition-all"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-wervify-white mb-3.5 tracking-tight leading-snug">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 mb-8 font-normal">
                  {card.description}
                </p>
              </div>

              <div className="pt-5 border-t border-slate-100 dark:border-wervify-marine/50">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-wervify-cobalt dark:text-wervify-azure">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-wervify-cobalt/30 text-wervify-cobalt dark:text-wervify-azure">
                    <Check className="h-3 w-3 stroke-[2.5]" />
                  </span>
                  <span>{card.drawback}</span>
                </div>
              </div>
            </Card>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
};
