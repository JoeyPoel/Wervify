import React from 'react';
import { Container } from '../common/Container';
import { FadeIn } from '../common/FadeIn';
import { strings } from '../../constants/strings';
import { FAQ_ITEMS } from '../../constants/faq';
import { useAccordion } from '../../hooks/useAccordion';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * FAQ Accordion Section with smooth unfold animation and clean lineless design.
 */
export const FAQSection: React.FC = () => {
  const { toggle, isOpen } = useAccordion(false);

  return (
    <section className="py-20 sm:py-28 bg-white/60 dark:bg-wervify-void/60 border-b border-slate-200 dark:border-wervify-marine/40 transition-colors">
      <Container size="narrow">
        <FadeIn className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-wervify-white">
            {strings.faq.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            {strings.faq.subtitle}
          </p>
        </FadeIn>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const open = isOpen(item.id);
            return (
              <FadeIn key={item.id} delay={idx * 0.05}>
                <div className="rounded-2xl border border-slate-200/90 dark:border-wervify-marine/60 bg-white dark:bg-wervify-midnight/70 overflow-hidden shadow-xs hover:border-slate-300 dark:hover:border-wervify-marine transition-colors">
                  <button
                    type="button"
                    onClick={() => toggle(item.id)}
                    className="w-full py-5 px-6 flex items-center justify-between text-left text-sm sm:text-base font-semibold text-slate-900 dark:text-wervify-white hover:text-wervify-cobalt dark:hover:text-wervify-azure transition-colors border-none outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 cursor-pointer select-none"
                    aria-expanded={open}
                  >
                    <span className="pr-4">{item.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-wervify-cobalt dark:text-wervify-azure transition-transform duration-300 ease-out ${
                        open ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          <p>{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
