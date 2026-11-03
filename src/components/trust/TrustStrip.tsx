import React from 'react';
import { Container } from '../common/Container';
import { strings } from '../../constants/strings';
import { Building2 } from 'lucide-react';

/**
 * Trust Strip Section with clean light border and logo marquee.
 */
export const TrustStrip: React.FC = () => {
  const logos = [...strings.trust.logos, ...strings.trust.logos];

  return (
    <section className="py-8 border-b border-slate-200/80 dark:border-wervify-marine/40 bg-slate-100/60 dark:bg-wervify-midnight/60 overflow-hidden transition-colors">
      <Container>
        <div className="text-center mb-5">
          <p className="text-[11px] uppercase tracking-widest font-bold text-wervify-cobalt dark:text-wervify-azure">
            {strings.trust.heading}
          </p>
        </div>
      </Container>

      {/* Marquee ticker container with smooth edge fades */}
      <div className="relative w-full flex overflow-x-hidden">
        {/* Left edge fade - Light & Dark smooth cross-fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent opacity-100 dark:opacity-0 transition-opacity duration-300 z-10" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-wervify-midnight/50 to-transparent opacity-0 dark:opacity-100 transition-opacity duration-300 z-10" />

        {/* Right edge fade - Light & Dark smooth cross-fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent opacity-100 dark:opacity-0 transition-opacity duration-300 z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-wervify-midnight/50 to-transparent opacity-0 dark:opacity-100 transition-opacity duration-300 z-10" />

        <div className="animate-marquee flex items-center gap-6 py-1">
          {logos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex items-center gap-3 px-4 py-2.5 rounded-lg border border-slate-200/90 dark:border-wervify-marine/50 bg-white dark:bg-wervify-midnight/80 shadow-xs whitespace-nowrap shrink-0 hover:border-wervify-cobalt dark:hover:border-wervify-azure/60 transition-colors"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-blue-50 dark:bg-wervify-marine/40 text-wervify-cobalt dark:text-wervify-azure">
                <Building2 className="h-3.5 w-3.5" />
              </div>
              <div className="text-left">
                <span className="text-xs font-semibold text-slate-800 dark:text-slate-300 block">
                  {logo.name}
                </span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 block">
                  {logo.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
