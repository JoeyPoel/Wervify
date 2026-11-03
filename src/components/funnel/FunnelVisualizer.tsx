import React, { useState } from 'react';
import { Container } from '../common/Container';
import { FadeIn } from '../common/FadeIn';
import { strings } from '../../constants/strings';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, ArrowRight, Check, Phone, Calendar } from 'lucide-react';

/**
 * Visual Funnel Simulator: Shows the actual 3-step recruitment machine in action.
 * Step 1: Real-life Meta/Instagram Story Ad Mockup
 * Step 2: Live WhatsApp Screening with Bo
 * Step 3: Verified Candidate Dashboard Profile
 */
export const FunnelVisualizer: React.FC = () => {
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);
  const fn = strings.funnel;

  return (
    <section id="aanpak" className="relative overflow-hidden py-20 sm:py-28 bg-white/60 dark:bg-wervify-void/60 border-b border-slate-200 dark:border-wervify-marine/40 transition-colors">
      <Container>
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-wervify-white leading-tight">
            {fn.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            {fn.subtitle}
          </p>
        </FadeIn>

        {/* 3 Step Interactive Progress Pills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          <button
            type="button"
            onClick={() => setActiveStep(1)}
            className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
              activeStep === 1
                ? 'border-wervify-cobalt dark:border-wervify-azure bg-blue-50/70 dark:bg-wervify-midnight/90 shadow-md ring-1 ring-wervify-cobalt/30'
                : 'border-slate-200/90 dark:border-wervify-marine/60 bg-white dark:bg-wervify-midnight/50 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                activeStep === 1 ? 'bg-wervify-cobalt text-white' : 'bg-slate-100 dark:bg-wervify-marine text-slate-600 dark:text-slate-300'
              }`}>
                1
              </span>
              <span className="text-sm font-bold text-slate-900 dark:text-wervify-white">{fn.step1Title}</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 pl-8 leading-relaxed">
              {fn.step1Desc}
            </p>
          </button>

          <button
            type="button"
            onClick={() => setActiveStep(2)}
            className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
              activeStep === 2
                ? 'border-wervify-cobalt dark:border-wervify-azure bg-blue-50/70 dark:bg-wervify-midnight/90 shadow-md ring-1 ring-wervify-cobalt/30'
                : 'border-slate-200/90 dark:border-wervify-marine/60 bg-white dark:bg-wervify-midnight/50 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                activeStep === 2 ? 'bg-wervify-cobalt text-white' : 'bg-slate-100 dark:bg-wervify-marine text-slate-600 dark:text-slate-300'
              }`}>
                2
              </span>
              <span className="text-sm font-bold text-slate-900 dark:text-wervify-white">{fn.step2Title}</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 pl-8 leading-relaxed">
              {fn.step2Desc}
            </p>
          </button>

          <button
            type="button"
            onClick={() => setActiveStep(3)}
            className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
              activeStep === 3
                ? 'border-wervify-cobalt dark:border-wervify-azure bg-blue-50/70 dark:bg-wervify-midnight/90 shadow-md ring-1 ring-wervify-cobalt/30'
                : 'border-slate-200/90 dark:border-wervify-marine/60 bg-white dark:bg-wervify-midnight/50 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                activeStep === 3 ? 'bg-wervify-cobalt text-white' : 'bg-slate-100 dark:bg-wervify-marine text-slate-600 dark:text-slate-300'
              }`}>
                3
              </span>
              <span className="text-sm font-bold text-slate-900 dark:text-wervify-white">{fn.step3Title}</span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 pl-8 leading-relaxed">
              {fn.step3Desc}
            </p>
          </button>
        </div>

        {/* Visual Showcase Stage */}
        <div className="max-w-4xl mx-auto rounded-3xl border border-slate-200/90 dark:border-wervify-marine/80 bg-white/95 dark:bg-wervify-midnight/90 p-6 sm:p-10 card-highlight shadow-2xl overflow-hidden min-h-[460px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {/* STEP 1: The Social Ad Mockup */}
            {activeStep === 1 && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                <div className="md:col-span-6 space-y-4 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-wervify-marine/40 text-wervify-cobalt dark:text-wervify-azure text-xs font-semibold">
                    <span>Meta & LinkedIn Ad Machine</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-wervify-white">
                    Doelgerichte advertenties die passieve vakmensen stoppen met scrollen.
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Geen saaie tekstvacatures op Indeed. Wij creëren professionele video- en fotocampagnes in jouw huisstijl die laten zien waarom jouw bedrijf een geweldige werkgever is.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-wervify-cobalt dark:text-wervify-azure" />
                      <span>Hyper-regionale targeting binnen een straal van 25 km</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-wervify-cobalt dark:text-wervify-azure" />
                      <span>Geen motivatiebrief of cv vereist van de kandidaat</span>
                    </li>
                  </ul>
                </div>

                {/* Simulated Phone Story Card */}
                <div className="md:col-span-6 flex justify-center">
                  <div className="w-[280px] sm:w-[300px] rounded-3xl border-4 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl p-4 text-slate-900 dark:text-white space-y-4 transition-colors">
                    {/* Story Header */}
                    <div className="flex items-center gap-2.5 pb-2 border-b border-slate-100 dark:border-white/10 text-xs">
                      <div className="h-7 w-7 rounded-full bg-wervify-cobalt text-white flex items-center justify-center font-bold text-[10px] shadow-xs">
                        VD
                      </div>
                      <div>
                        <span className="font-bold block text-[11px] text-slate-900 dark:text-white">Van Dijk Installaties</span>
                        <span className="text-[9px] text-slate-500 dark:text-slate-400">Gesponsord • Utrecht</span>
                      </div>
                    </div>

                    {/* Creative Visual Box */}
                    <div className="relative h-44 rounded-2xl bg-gradient-to-br from-blue-50/90 via-slate-50 to-blue-50/80 border border-wervify-cobalt/20 dark:from-blue-900 dark:via-slate-900 dark:to-wervify-cobalt dark:border-blue-900/40 p-4 flex flex-col justify-between transition-colors">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-wervify-cobalt text-white px-2 py-0.5 rounded shadow-xs self-start">
                        Vacature
                      </span>
                      <div>
                        <h4 className="text-lg font-black leading-snug text-slate-900 dark:text-white">Allround Monteur</h4>
                        <p className="text-[11px] font-bold text-wervify-cobalt dark:text-blue-200 mt-0.5">€ 3.800 – € 4.500 • Eigen werkbus</p>
                      </div>
                    </div>

                    {/* Quick Perks */}
                    <div className="space-y-1.5 text-[11px] text-slate-600 dark:text-slate-300">
                      <div className="flex items-center gap-1.5">
                        <Check className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                        <span>Vast contract na 2 maanden</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                        <span>Geen storingsdiensten in het weekend</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-2">
                      <div className="w-full py-2.5 rounded-xl bg-wervify-cobalt hover:bg-wervify-cobalt/90 text-white text-center font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-wervify-cobalt/20 transition-colors cursor-pointer">
                        <span>Solliciteer via WhatsApp (60 sec)</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 2: The WhatsApp AI Screening */}
            {activeStep === 2 && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                <div className="md:col-span-6 space-y-4 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
                    <span>24/7 AI-Assistent Bo</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-wervify-white">
                    Directe reactie binnen 90 seconden, dag én nacht.
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Topkandidaten solliciteren vaak 's avonds op de bank. Bo vangt hen direct op via WhatsApp, stelt jouw 3 knock-out vragen en toetst vakkennis en beschikbaarheid.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      <span>92% van de sollicitanten voltooit de WhatsApp funnel</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                      <span>Niet-passende profielen worden direct vriendelijk afgevangen</span>
                    </li>
                  </ul>
                </div>

                {/* WhatsApp Chat Cockpit */}
                <div className="md:col-span-6 flex justify-center">
                  <div className="w-[300px] sm:w-[320px] rounded-3xl border border-slate-200 dark:border-wervify-marine/70 bg-white dark:bg-wervify-midnight p-4 shadow-xl space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-wervify-marine/60">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-wervify-cobalt text-white flex items-center justify-center font-bold text-xs">
                          <Bot className="h-4 w-4" />
                        </div>
                        <div>
                          <span className="font-bold text-xs text-slate-900 dark:text-white block">Bo • AI Recruiter</span>
                          <span className="text-[10px] text-emerald-600 font-medium">Online • 42s reactietijd</span>
                        </div>
                      </div>
                      <span className="text-[10px] bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 px-2 py-0.5 rounded-full font-bold">
                        Gecheckt
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="bg-slate-100 dark:bg-wervify-marine/40 p-2.5 rounded-xl rounded-tl-xs text-slate-800 dark:text-slate-200">
                        Hoi Robin! Leuk dat je interesse hebt in de monteur functie. Heb je ervaring met cv- en warmtepompen?
                      </div>
                      <div className="bg-wervify-cobalt text-white p-2.5 rounded-xl rounded-tr-xs ml-6 text-right">
                        Zeker, ik doe dit al 6 jaar en heb mijn F-gassen certificaat op zak.
                      </div>
                      <div className="bg-slate-100 dark:bg-wervify-marine/40 p-2.5 rounded-xl rounded-tl-xs text-slate-800 dark:text-slate-200">
                        Top! Dat sluit 100% aan. Kan je donderdag om 16:00 kennismaken met directeur Mark?
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 3: The Employer Dashboard Profile */}
            {activeStep === 3 && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
              >
                <div className="md:col-span-6 space-y-4 text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-wervify-marine/40 text-wervify-cobalt dark:text-wervify-azure text-xs font-semibold">
                    <span>Direct Sollicitatiegesprek</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-wervify-white">
                    Gekwalificeerde vakmensen, direct op gesprek.
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Geen stapels onbruikbare cv's doorspitten. Jij ontvangt een compleet dossier van de kandidaat inclusief getoetste harde eisen en kan direct bellen of inplannen.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-wervify-cobalt dark:text-wervify-azure" />
                      <span>Volledig eigenaarschap van alle kandidatendata</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-wervify-cobalt dark:text-wervify-azure" />
                      <span>0% provisie achteraf, onbeperkt personeel aannemen</span>
                    </li>
                  </ul>
                </div>

                {/* Candidate Dossier Card */}
                <div className="md:col-span-6 flex justify-center">
                  <div className="w-[320px] sm:w-[340px] rounded-2xl border-2 border-emerald-500/40 bg-white dark:bg-wervify-midnight p-5 shadow-2xl space-y-4 text-left">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-wervify-marine/60">
                      <div>
                        <h4 className="font-extrabold text-slate-900 dark:text-white text-base">Robin Jansen (32)</h4>
                        <p className="text-xs text-slate-500">Utrecht • 6 jr werkervaring</p>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 text-xs font-bold">
                        Geschikt ✓
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-wervify-marine/30">
                        <span className="text-slate-500">Rijbewijs B:</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">Ja (Eigen vervoer)</span>
                      </div>
                      <div className="flex items-center justify-between py-1 border-b border-slate-100 dark:border-wervify-marine/30">
                        <span className="text-slate-500">VCA & Certificaten:</span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">VCA-VOL, F-Gassen</span>
                      </div>
                      <div className="flex items-center justify-between py-1">
                        <span className="text-slate-500">Beschikbaarheid:</span>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">Binnen 1 maand</span>
                      </div>
                    </div>

                    <div className="pt-2 flex gap-2">
                      <div className="flex-1 py-2 rounded-xl bg-wervify-cobalt text-white font-bold text-xs text-center flex items-center justify-center gap-1 shadow-sm">
                        <Calendar className="h-3.5 w-3.5" />
                        <span>Inplannen</span>
                      </div>
                      <div className="py-2 px-3 rounded-xl border border-slate-200 dark:border-wervify-marine text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center">
                        <Phone className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};
