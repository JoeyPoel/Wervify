import React, { useState } from 'react';
import { Container } from '../common/Container';
import { Badge } from '../common/Badge';
import { FadeIn } from '../common/FadeIn';
import { strings } from '../../constants/strings';
import { motion, AnimatePresence } from 'framer-motion';
import { Compass, Eye, ShieldCheck, TrendingUp } from 'lucide-react';

/**
 * Procedural Vector Network Graphic inspired by KanBiosys Mission/Vision.
 */
const NetworkGraphic: React.FC<{ mode: 'mission' | 'vision' }> = ({ mode }) => {
  const isVision = mode === 'vision';

  return (
    <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden bg-slate-50 dark:bg-wervify-marine/30 border border-slate-100 dark:border-wervify-marine/50 flex items-center justify-center">
      <div className="absolute inset-0 bg-dot-grid opacity-50 dark:opacity-20" />
      
      {/* Procedural SVG Network */}
      <svg className="w-full h-full p-4" viewBox="0 0 400 200" fill="none">
        {/* Connection lines */}
        <path
          d={isVision ? "M50 100 Q 150 30 250 120 T 350 80" : "M50 120 L 150 60 L 220 140 L 350 70"}
          className="stroke-wervify-cobalt/30 dark:stroke-wervify-azure/40"
          strokeWidth="1.5"
          strokeDasharray={isVision ? "4 4" : undefined}
        />
        <path
          d={isVision ? "M80 150 Q 200 170 320 130" : "M100 140 L 200 40 L 300 110"}
          className="stroke-wervify-azure/25 dark:stroke-wervify-ice/20"
          strokeWidth="1"
        />

        {/* Nodes */}
        <circle cx="50" cy={isVision ? 100 : 120} r="6" className="fill-wervify-cobalt dark:fill-wervify-azure" />
        <circle cx="150" cy={isVision ? 60 : 60} r="9" className="fill-wervify-azure dark:fill-wervify-ice" />
        <circle cx="250" cy={isVision ? 120 : 140} r="7" className="fill-wervify-cobalt dark:fill-wervify-azure" />
        <circle cx="350" cy={isVision ? 80 : 70} r="10" className="fill-wervify-cerulean dark:fill-wervify-azure" />
      </svg>

      {/* Floating Center Badge */}
      <div className="absolute inset-auto flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 dark:bg-wervify-midnight/90 backdrop-blur-md border border-slate-200 dark:border-wervify-marine/70 shadow-sm text-xs font-mono font-bold text-slate-800 dark:text-slate-200">
        {isVision ? (
          <>
            <TrendingUp className="h-3.5 w-3.5 text-wervify-cobalt dark:text-wervify-azure" />
            <span>Schaalbaar Employer Brand</span>
          </>
        ) : (
          <>
            <ShieldCheck className="h-3.5 w-3.5 text-wervify-cobalt dark:text-wervify-azure" />
            <span>0% No-Cure Fees</span>
          </>
        )}
      </div>
    </div>
  );
};

/**
 * Interactive Mission & Vision Section (inspired by Framer MISSION-VISION-car8A4).
 * Features tabbed/dual perspective cards, procedural network graphic, and core philosophy copy.
 */
export const MissionVisionSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission');
  const mv = strings.missionVision;

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-white/60 dark:bg-wervify-void/60 border-b border-slate-200 dark:border-wervify-marine/40 transition-colors">
      <Container>
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <Badge variant="pill">
            <Compass className="h-3.5 w-3.5 text-wervify-cobalt dark:text-wervify-azure mr-1" />
            <span>{mv.eyebrow}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-wervify-white">
            {mv.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {mv.subtitle}
          </p>
        </FadeIn>

        {/* Interactive Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="relative inline-flex p-1.5 rounded-full bg-slate-100 dark:bg-wervify-midnight/80 border border-slate-200/80 dark:border-wervify-marine/60">
            <button
              type="button"
              onClick={() => setActiveTab('mission')}
              className={`relative z-10 px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                activeTab === 'mission'
                  ? 'text-white'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {activeTab === 'mission' && (
                <motion.div
                  layoutId="mv-tab-pill"
                  transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  className="absolute inset-0 rounded-full bg-wervify-cobalt shadow-sm"
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <Compass className="h-3.5 w-3.5" />
                <span>{mv.missionLabel}</span>
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('vision')}
              className={`relative z-10 px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                activeTab === 'vision'
                  ? 'text-white'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {activeTab === 'vision' && (
                <motion.div
                  layoutId="mv-tab-pill"
                  transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  className="absolute inset-0 rounded-full bg-wervify-cobalt shadow-sm"
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                <Eye className="h-3.5 w-3.5" />
                <span>{mv.visionLabel}</span>
              </span>
            </button>
          </div>
        </div>

        {/* Content Display Card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-slate-200/90 dark:border-wervify-marine/70 bg-white/95 dark:bg-wervify-midnight/70 backdrop-blur-md p-8 sm:p-12 card-highlight shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Text Column */}
                <div className="lg:col-span-7 space-y-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase text-wervify-cobalt dark:text-wervify-azure bg-blue-50 dark:bg-wervify-marine/50 px-3 py-1 rounded-full border border-blue-200/60 dark:border-wervify-marine/70">
                    {activeTab === 'mission' ? <Compass className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                    <span>{activeTab === 'mission' ? mv.missionTag : mv.visionTag}</span>
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-wervify-white">
                    {activeTab === 'mission' ? mv.missionTitle : mv.visionTitle}
                  </h3>

                  <p className="text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                    {activeTab === 'mission' ? mv.missionText : mv.visionText}
                  </p>
                </div>

                {/* Right Vector Visual Column */}
                <div className="lg:col-span-5">
                  <NetworkGraphic mode={activeTab} />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};

