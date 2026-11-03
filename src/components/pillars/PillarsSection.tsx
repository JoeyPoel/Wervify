import React from 'react';
import { Container } from '../common/Container';
import { Badge } from '../common/Badge';
import { FadeIn } from '../common/FadeIn';
import { ServiceTiles } from './ServiceTiles';
import { strings } from '../../constants/strings';

/**
 * Pillars Section: Core Building Blocks of Wervify with Framer-inspired interactive ServiceTiles.
 */
export const PillarsSection: React.FC = () => {
  return (
    <section id="aanpak" className="py-20 sm:py-28 bg-slate-100/60 dark:bg-wervify-midnight/60 border-b border-slate-200 dark:border-wervify-marine/40 transition-colors">
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

        <FadeIn delay={0.1}>
          <ServiceTiles />
        </FadeIn>
      </Container>
    </section>
  );
};
