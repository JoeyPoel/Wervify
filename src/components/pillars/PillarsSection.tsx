import React from 'react';
import { Container } from '../common/Container';
import { Badge } from '../common/Badge';
import { Card } from '../common/Card';
import { FadeIn, FadeInStagger } from '../common/FadeIn';
import { strings } from '../../constants/strings';
import { Share2, Bot, UserCheck, LayoutDashboard } from 'lucide-react';

/**
 * Pillars Section: 4 Core Building Blocks of Wervify with micro scroll reveal.
 */
export const PillarsSection: React.FC = () => {
  const pillarIcons = [Share2, Bot, UserCheck, LayoutDashboard];

  return (
    <section id="aanpak" className="py-20 sm:py-28 bg-white dark:bg-wervify-void border-b border-slate-200 dark:border-wervify-marine/40 transition-colors">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="pill">
            <span>{strings.pillars.eyebrow}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-wervify-white">
            {strings.pillars.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {strings.pillars.subtitle}
          </p>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {strings.pillars.items.map((pillar, idx) => {
            const Icon = pillarIcons[idx] || Share2;
            return (
              <Card key={pillar.id} variant="elevated" className="group">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-100 dark:border-wervify-marine bg-blue-50 dark:bg-wervify-marine/40 text-wervify-cobalt dark:text-wervify-azure group-hover:bg-wervify-cobalt group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-wervify-cobalt dark:text-wervify-ice/80 bg-blue-50 dark:bg-wervify-marine/40 px-3 py-1 rounded-full border border-blue-200 dark:border-wervify-marine/50">
                    {pillar.highlight}
                  </span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-wervify-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {pillar.description}
                </p>
              </Card>
            );
          })}
        </FadeInStagger>
      </Container>
    </section>
  );
};
