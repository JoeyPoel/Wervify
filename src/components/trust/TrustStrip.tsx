import React from 'react';
import { Container } from '../common/Container';
import { strings } from '../../constants/strings';

/**
 * Clean Sector & Trust Strip.
 * Eliminates artificial marquee animations and fake category boxes.
 */
export const TrustStrip: React.FC = () => {
  return (
    <section className="py-7 border-b border-slate-200/80 dark:border-wervify-marine/40 bg-slate-100/50 dark:bg-wervify-midnight/50 transition-colors">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-wervify-cobalt dark:text-wervify-azure">
              {strings.trust.heading}
            </p>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              {strings.trust.subheading}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {strings.trust.logos.map((item, idx) => (
              <span
                key={idx}
                className="text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-wervify-midnight px-3 py-1.5 rounded-lg border border-slate-200 dark:border-wervify-marine/60 shadow-xs"
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
