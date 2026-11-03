import React from 'react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { FadeIn } from '../common/FadeIn';
import { LiveChatSimulation, ChatMessage } from './LiveChatSimulation';
import { strings } from '../../constants/strings';
import { ArrowRight, MessageCircle } from 'lucide-react';

interface HeroProps {
  onPlanDemo?: () => void;
  onExploreApproach?: () => void;
}

/**
 * Confident Editorial Hero Section without artificial badges, rotated pill stickers, or clutter.
 * Modeled after high-converting Dutch agency standards (Pulse / Toppa / Sticky Chapters).
 * @param props HeroProps
 */
export const Hero: React.FC<HeroProps> = ({ onPlanDemo, onExploreApproach }) => {
  const chatMessages: ChatMessage[] = [
    {
      speaker: strings.hero.chat.msg1Speaker,
      text: strings.hero.chat.msg1Text,
      sender: 'them',
      timestamp: '14:22',
    },
    {
      speaker: strings.hero.chat.msg2Speaker,
      text: strings.hero.chat.msg2Text,
      sender: 'me',
      timestamp: '14:22',
    },
    {
      speaker: strings.hero.chat.msg3Speaker,
      text: strings.hero.chat.msg3Text,
      sender: 'them',
      timestamp: '14:23',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white/60 dark:bg-wervify-void/60 pt-16 pb-20 md:pt-24 md:pb-28 border-b border-slate-200/80 dark:border-wervify-marine/40">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Text & CTA Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <FadeIn delay={0}>
              <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-wervify-cobalt dark:text-wervify-azure">
                {strings.hero.eyebrow}
              </p>
            </FadeIn>

            <FadeIn delay={0.06}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-wervify-white leading-[1.12]">
                Bereik de <span className="text-wervify-cobalt dark:text-wervify-azure">85% vakmensen</span> die niet actief zoeken
              </h1>
            </FadeIn>

            <FadeIn delay={0.12}>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-wervify-ice/85 max-w-2xl leading-relaxed font-normal">
                {strings.hero.subtitle}
              </p>
            </FadeIn>

            <FadeIn delay={0.18}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={onPlanDemo}
                  className="gap-2 shadow-lg shadow-wervify-cobalt/20"
                >
                  <span>{strings.hero.primaryCta}</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  onClick={onExploreApproach}
                  className="shadow-xs"
                >
                  <span>{strings.hero.secondaryCta}</span>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div className="pt-2">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {strings.hero.microProof}
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: AI Assistant "Bo" Interactive UI Card Mockup */}
          <div className="lg:col-span-5 relative">
            <FadeIn delay={0.12}>
              <div className="relative rounded-2xl border border-slate-200/90 dark:border-wervify-marine/80 bg-white/95 dark:bg-wervify-midnight/90 backdrop-blur-md p-5 sm:p-6 transition-colors shadow-xl">
                {/* Header of Simulated Candidate Cockpit */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 dark:border-wervify-marine/60">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md">
                      <MessageCircle className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-emerald-400 border-2 border-white dark:border-wervify-midnight" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-wervify-white">
                        {strings.hero.chat.botName}
                      </h3>
                      <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                        {strings.hero.chat.botSub}
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full">
                    {strings.hero.chat.botBadge}
                  </span>
                </div>

                {/* Sequential Typing & Message Animation */}
                <div className="my-3 min-h-[260px] flex flex-col justify-end">
                  <LiveChatSimulation
                    messages={chatMessages}
                    showTimestamps={true}
                  />
                </div>

                {/* Handover Status Indicator */}
                <div className="pt-3 border-t border-slate-100 dark:border-wervify-marine/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>
                    {strings.hero.chat.responseTime}
                  </span>
                  <span className="text-wervify-cobalt dark:text-wervify-azure font-semibold flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 inline-block" />
                    {strings.hero.chat.handoverStatus}
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
};
