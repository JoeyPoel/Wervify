import React from 'react';
import { Container } from '../common/Container';
import { Card } from '../common/Card';
import { FadeIn, FadeInStagger } from '../common/FadeIn';
import { strings } from '../../constants/strings';
import { Star } from 'lucide-react';

/**
 * Testimonials Section with verified MKB employer reviews.
 * Rich, authentic presentation featuring 5-star rating bars and sector badges.
 */
export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-slate-100/60 dark:bg-wervify-midnight/60 border-b border-slate-200 dark:border-wervify-marine/40 transition-colors">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-wervify-white">
            {strings.testimonials.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {strings.testimonials.subtitle}
          </p>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strings.testimonials.items.map((item, idx) => (
            <Card
              key={idx}
              variant="elevated"
              className="flex flex-col justify-between p-7 sm:p-8 bg-white dark:bg-wervify-midnight/70 border border-slate-200 dark:border-wervify-marine/60 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                {/* Top Row: 5-Star Rating & Sector Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-wervify-cobalt dark:text-wervify-azure bg-blue-50 dark:bg-wervify-cobalt/20 px-2.5 py-0.5 rounded-full border border-blue-100 dark:border-wervify-cobalt/40">
                    {item.sector}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-normal mb-6">
                  “{item.quote}”
                </p>
              </div>

              {/* Author Attribution with Verified Stamp */}
              <div className="pt-5 border-t border-slate-100 dark:border-wervify-marine/50 flex items-center justify-between gap-2">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-wervify-white">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {item.role} • {item.company}
                  </p>
                </div>
                <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200/60 dark:border-emerald-800/40 shrink-0">
                  {strings.testimonials.verifiedLabel}
                </span>
              </div>
            </Card>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
};
