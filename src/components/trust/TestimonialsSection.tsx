import React from 'react';
import { Container } from '../common/Container';
import { Card } from '../common/Card';
import { FadeIn, FadeInStagger } from '../common/FadeIn';
import { strings } from '../../constants/strings';
import { Quote, UserCheck } from 'lucide-react';

/**
 * Testimonials Section with verified MKB employer reviews and micro scroll reveals.
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
            <Card key={idx} variant="elevated" className="flex flex-col justify-between">
              <div>
                <div className="mb-4 text-wervify-cobalt dark:text-wervify-azure">
                  <Quote className="h-8 w-8 opacity-80" />
                </div>
                <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed italic mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-wervify-marine/50 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 dark:bg-wervify-marine/50 text-wervify-cobalt dark:text-wervify-azure border border-blue-200 dark:border-wervify-marine">
                  <UserCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-wervify-white">
                    {item.author}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {item.role} • {item.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
};
