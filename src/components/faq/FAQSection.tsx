import React from 'react';
import { Container } from '../common/Container';
import { Badge } from '../common/Badge';
import { FadeIn } from '../common/FadeIn';
import { strings } from '../../constants/strings';
import { FAQ_ITEMS } from '../../constants/faq';
import { useAccordion } from '../../hooks/useAccordion';
import { HelpCircle, ChevronDown } from 'lucide-react';

/**
 * FAQ Accordion Section with smooth scroll reveal.
 */
export const FAQSection: React.FC = () => {
  const { toggle, isOpen } = useAccordion(false);

  return (
    <section className="py-20 sm:py-28 bg-slate-50 dark:bg-wervify-midnight/30 border-b border-slate-200 dark:border-wervify-marine/40 transition-colors">
      <Container size="narrow">
        <FadeIn className="text-center mb-16 space-y-4">
          <Badge variant="pill">
            <HelpCircle className="h-3.5 w-3.5 text-wervify-cobalt dark:text-wervify-azure mr-1" />
            <span>{strings.faq.eyebrow}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-wervify-white">
            {strings.faq.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {strings.faq.subtitle}
          </p>
        </FadeIn>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const open = isOpen(item.id);
            return (
              <FadeIn key={item.id} delay={idx * 0.05}>
                <div className="rounded-xl border border-slate-200 dark:border-wervify-marine/60 bg-white dark:bg-wervify-midnight/70 overflow-hidden shadow-sm transition-colors">
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    className="w-full py-5 px-6 flex items-center justify-between text-left text-sm sm:text-base font-semibold text-slate-900 dark:text-wervify-white hover:text-wervify-cobalt dark:hover:text-wervify-azure transition-colors focus:outline-none focus:ring-2 focus:ring-wervify-azure cursor-pointer"
                    aria-expanded={open}
                  >
                    <span className="pr-4">{item.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-wervify-cobalt dark:text-wervify-azure transition-transform duration-200 ${
                        open ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {open && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-wervify-marine/40">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
