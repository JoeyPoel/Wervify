import React from 'react';
import { Container } from '../common/Container';
import { Badge } from '../common/Badge';
import { Card } from '../common/Card';
import { FadeIn, FadeInStagger } from '../common/FadeIn';
import { strings } from '../../constants/strings';
import { AlertTriangle, TrendingDown, Hourglass, DollarSign } from 'lucide-react';

/**
 * Problem Section: Why traditional recruitment fails Dutch SMEs.
 */
export const ProblemSection: React.FC = () => {
  const icons = [DollarSign, TrendingDown, Hourglass];

  return (
    <section className="py-20 sm:py-28 bg-white dark:bg-wervify-void border-b border-slate-200 dark:border-wervify-marine/40 transition-colors">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="pill">
            <AlertTriangle className="h-3.5 w-3.5 text-amber-500 mr-1" />
            <span>{strings.problem.eyebrow}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-wervify-white">
            {strings.problem.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {strings.problem.subtitle}
          </p>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strings.problem.cards.map((card, idx) => {
            const IconComponent = icons[idx] || AlertTriangle;
            return (
              <Card key={card.number} variant="interactive" className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black font-mono text-wervify-cobalt dark:text-wervify-azure/60">
                      {card.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-wervify-marine/40 text-wervify-cobalt dark:text-wervify-azure border border-blue-100 dark:border-wervify-marine">
                      <IconComponent className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-wervify-white mb-3 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 mb-6">
                    {card.description}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200 dark:border-wervify-marine/50">
                  <span className="text-xs font-semibold text-amber-700 dark:text-amber-300/90 flex items-center gap-1.5">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
                    <span>{card.drawback}</span>
                  </span>
                </div>
              </Card>
            );
          })}
        </FadeInStagger>
      </Container>
    </section>
  );
};
