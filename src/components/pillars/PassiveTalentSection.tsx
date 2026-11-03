import React from 'react';
import { Container } from '../common/Container';
import { Card } from '../common/Card';
import { FadeIn } from '../common/FadeIn';
import { strings } from '../../constants/strings';
import { Target, Users } from 'lucide-react';

/**
 * "Hoe het wél moet" - Active vs. Passive Talent Pool Visual with micro scroll reveal.
 */
export const PassiveTalentSection: React.FC = () => {
  const { activePool, passivePool } = strings.passiveTalent;

  return (
    <section className="py-20 sm:py-28 bg-slate-100/60 dark:bg-wervify-midnight/60 border-b border-slate-200 dark:border-wervify-marine/40 transition-colors">
      <Container>
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-wervify-white">
            {strings.passiveTalent.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {strings.passiveTalent.subtitle}
          </p>
        </FadeIn>

        {/* The 15% vs 85% Split Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Active Job Seekers (15%) */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.08} className="h-full">
              <Card variant="outline" className="h-full border-dashed border-slate-300 dark:border-slate-700 bg-white/60 dark:bg-wervify-void/50 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase font-mono font-bold tracking-wider text-slate-500 dark:text-slate-400">
                      Traditioneel Kanaal
                    </span>
                    <span className="text-2xl font-black font-mono text-slate-700 dark:text-slate-400">
                      {activePool.percentage}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-200 mb-2">
                    {activePool.label}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {activePool.description}
                  </p>
                </div>

                {/* Visual Bar Indicator */}
                <div>
                  <div className="h-3 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-400 dark:bg-slate-500 rounded-full w-[15%]" />
                  </div>
                  <p className="text-[11px] text-slate-500 mt-2 font-mono">
                    15% van de markt • Hoge concurrentie op vacaturesites
                  </p>
                </div>
              </Card>
            </FadeIn>
          </div>

          {/* Passive Job Seekers (85%) - Wervify Focus */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.16} className="h-full">
              <div className="relative h-full rounded-2xl border border-blue-200 dark:border-wervify-cerulean/60 bg-gradient-to-br from-blue-50/80 via-white to-blue-50/40 dark:from-wervify-midnight dark:to-wervify-void p-8 shadow-xl flex flex-col justify-between transition-colors">
                {/* Highlight ribbon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-wervify-cobalt text-white shadow-sm">
                    <Target className="h-3 w-3" />
                    <span>Wervify Domein</span>
                  </span>
                  <span className="text-4xl font-black font-mono text-wervify-cobalt dark:text-wervify-azure">
                    {passivePool.percentage}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-wervify-white mb-3">
                    {passivePool.label}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-700 dark:text-wervify-ice/90 leading-relaxed mb-6">
                    {passivePool.description}
                  </p>

                  {/* Visual Bar Indicator */}
                  <div className="h-4 w-full bg-blue-100 dark:bg-wervify-marine/60 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-wervify-cobalt to-wervify-azure rounded-full w-[85%]" />
                  </div>
                  <p className="text-xs text-wervify-cobalt dark:text-wervify-azure mt-2 font-mono font-medium">
                    85% van de markt • Exclusief bereikbaar via gerichte social media funnels
                  </p>
                </div>

                {/* Bottom Callout Box */}
                <div className="mt-8 pt-6 border-t border-blue-100 dark:border-wervify-marine/60 flex items-start gap-4 bg-white/70 dark:bg-wervify-marine/20 -mx-8 -mb-8 p-8 rounded-b-2xl">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-wervify-cobalt/40 text-wervify-cobalt dark:text-wervify-azure border border-blue-200 dark:border-wervify-marine">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-wervify-white mb-1">
                      {strings.passiveTalent.takeawayTitle}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {strings.passiveTalent.takeawayText}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
};
