import React from 'react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { FadeIn, FadeInStagger } from '../common/FadeIn';
import { LiveChatSimulation, ChatMessage } from './LiveChatSimulation';
import { strings } from '../../constants/strings';
import { ArrowRight, Target, Check, Clock, Bot, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onPlanDemo?: () => void;
  onExploreApproach?: () => void;
}

/**
 * Signature Hero Section with pristine White light mode and deep Navy dark mode.
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
    <section className="relative overflow-hidden bg-white/60 dark:bg-wervify-void/60 pt-16 pb-24 md:pt-24 md:pb-32 border-b border-slate-200/80 dark:border-wervify-marine/40">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text & CTA Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <FadeIn delay={0}>
              <Badge variant="pill" className="gap-2 shadow-xs">
                <Target className="h-3.5 w-3.5 text-wervify-cobalt dark:text-wervify-azure" />
                <span>{strings.hero.eyebrow}</span>
              </Badge>
            </FadeIn>

            <FadeIn delay={0.06}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-wervify-white leading-[1.15]">
                Bereik de{' '}
                <span className="inline-flex items-center justify-center px-3 sm:px-4 py-1 mx-1 rounded-xl bg-wervify-cobalt text-white shadow-md shadow-wervify-cobalt/25 align-baseline transform -rotate-1 font-black">
                  {strings.hero.titleHighlight || '85%'}
                </span>{' '}
                kandidaten die niet actief zoeken
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
                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-wervify-cobalt dark:text-wervify-azure shrink-0" />
                  <span>{strings.hero.microProof}</span>
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: AI Assistant "Bo" Interactive UI Card Mockup */}
          <div className="lg:col-span-5 relative">
            {/* Ambient card back-glow */}
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-wervify-azure/20 via-wervify-sky/15 to-transparent blur-xl pointer-events-none opacity-80" />

            <FadeIn delay={0.12}>
              <div className="relative rounded-2xl border border-slate-200/90 dark:border-wervify-marine/80 bg-white/95 dark:bg-wervify-midnight/90 backdrop-blur-md p-5 sm:p-6 card-highlight transition-colors shadow-xl">
                {/* Header of Simulated Candidate Cockpit */}
                <div className="flex items-center justify-between pb-3.5 border-b border-slate-100 dark:border-wervify-marine/60">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-wervify-cobalt text-white shadow-md shadow-wervify-cobalt/25">
                      <Bot className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-emerald-500 border-2 border-white dark:border-wervify-midnight" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-wervify-white flex items-center gap-1.5">
                        <span>{strings.hero.chat.botName}</span>
                        <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-blue-50 text-wervify-cobalt border border-blue-200/60 dark:border-transparent dark:bg-wervify-marine dark:text-wervify-ice font-mono">
                          {strings.hero.chat.botBadge}
                        </span>
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">{strings.hero.chat.botSub}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-200/60 dark:border-emerald-800/40">
                      <Check className="h-3.5 w-3.5" />
                      <span>{strings.hero.chat.status}</span>
                    </span>
                  </div>
                </div>

                {/* Chat Interaction Simulation */}
                <div className="my-3 min-h-[260px] flex flex-col justify-end">
                  <LiveChatSimulation
                    messages={chatMessages}
                    showTimestamps={true}
                  />
                </div>

                {/* Handover Status Indicator */}
                <div className="pt-3 border-t border-slate-100 dark:border-wervify-marine/60 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-wervify-cobalt dark:text-wervify-azure" />
                    <span>{strings.hero.chat.responseTime}</span>
                  </span>
                  <span className="text-wervify-cobalt dark:text-wervify-ice font-semibold flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block" />
                    {strings.hero.chat.handoverStatus}
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Hero Bottom: Three Proof Stat Tiles */}
        <FadeInStagger className="mt-14 sm:mt-18 grid grid-cols-1 md:grid-cols-3 gap-6">
          {strings.hero.stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative rounded-xl border border-slate-200/90 dark:border-wervify-marine/70 border-t-2 border-t-wervify-cobalt dark:border-t-wervify-azure bg-white dark:bg-wervify-midnight/60 p-6 card-highlight hover:-translate-y-0.5 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono font-bold text-wervify-cobalt dark:text-wervify-azure tracking-wider">
                  0{idx + 1}
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-wervify-white font-mono">
                  {stat.value}
                </span>
              </div>
              <h4 className="mt-2 text-base font-bold text-slate-900 dark:text-wervify-white">
                {stat.label}
              </h4>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {stat.detail}
              </p>
            </div>
          ))}
        </FadeInStagger>
      </Container>
    </section>
  );
};
