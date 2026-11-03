import React from 'react';
import { Container } from '../common/Container';
import { Badge } from '../common/Badge';
import { FadeIn } from '../common/FadeIn';
import { strings } from '../../constants/strings';
import { Check, X, ArrowLeftRight } from 'lucide-react';

/**
 * Comparison Section: Traditional Recruitment Agency vs. Wervify Hiring System with micro scroll reveal.
 */
export const ComparisonSection: React.FC = () => {
  const { headers, rows } = strings.comparison;

  return (
    <section className="py-20 sm:py-28 bg-slate-100/60 dark:bg-wervify-midnight/60 border-b border-slate-200 dark:border-wervify-marine/40 transition-colors">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="pill">
            <ArrowLeftRight className="h-3.5 w-3.5 text-wervify-cobalt dark:text-wervify-azure mr-1" />
            <span>{strings.comparison.eyebrow}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-wervify-white">
            {strings.comparison.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {strings.comparison.subtitle}
          </p>
        </FadeIn>

        {/* Comparison Table */}
        <FadeIn delay={0.1}>
          <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-wervify-marine/70 bg-white dark:bg-wervify-midnight/60 shadow-sm dark:shadow-xl dark:backdrop-blur-md">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-200 dark:border-wervify-marine/60 bg-slate-100/90 dark:bg-wervify-midnight/90">
                  <th className="py-4 px-6 text-sm font-semibold text-slate-600 dark:text-slate-400 w-1/4">
                    {headers.criteria}
                  </th>
                  <th className="py-4 px-6 text-sm font-semibold text-slate-600 dark:text-slate-400 w-3/8">
                    {headers.agency}
                  </th>
                  <th className="py-4 px-6 text-sm font-bold text-wervify-cobalt dark:text-wervify-ice bg-blue-50/70 dark:bg-wervify-cobalt/20 border-l border-blue-200 dark:border-wervify-marine/60 w-3/8">
                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      <span>{headers.wervify}</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-wervify-marine/40 text-xs sm:text-sm">
                {rows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-wervify-marine/20 transition-colors">
                    <td className="py-4 px-6 font-semibold text-slate-900 dark:text-wervify-white">
                      {row.criteria}
                    </td>
                    <td className="py-4 px-6 text-slate-600 dark:text-slate-400">
                      <div className="flex items-start gap-2">
                        <X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                        <span>{row.agency}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-slate-900 dark:text-wervify-white bg-blue-50/40 dark:bg-wervify-cobalt/10 border-l border-blue-200 dark:border-wervify-marine/60 font-medium">
                      <div className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{row.wervify}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};
