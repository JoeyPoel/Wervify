import React, { useState, useId } from 'react';
import { Container } from '../common/Container';
import { Button } from '../common/Button';
import { FadeIn } from '../common/FadeIn';
import { strings } from '../../constants/strings';
import { ArrowRight, TrendingDown } from 'lucide-react';

interface SavingsCalculatorProps {
  onPlanDemo?: () => void;
}

/**
 * Interactive W&S vs Wervify Cost Savings Calculator.
 * Enables employers to slide open vacancies and see direct bottom-line cash savings.
 */
export const SavingsCalculator: React.FC<SavingsCalculatorProps> = ({ onPlanDemo }) => {
  const [vacancies, setVacancies] = useState<number>(2);
  const sliderId = useId();
  const calc = strings.calculator;

  // Traditional recruitment agency: 22% fee on €45k salary = ~€10.000 per hire
  const agencyCostPerHire = 10000;
  const totalAgencyCost = vacancies * agencyCostPerHire;

  // Wervify system: ~€2.490/mo + ad spend. Average campaign fills 1-2 vacancies per 6 weeks.
  const wervifyEstimatedCost = Math.round(2950 + (vacancies - 1) * 1400);

  // Total savings
  const totalSavings = Math.max(0, totalAgencyCost - wervifyEstimatedCost);

  const formatEuro = (amount: number) => {
    return new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(amount);
  };

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 bg-white/60 dark:bg-wervify-void/60 border-b border-slate-200 dark:border-wervify-marine/40 transition-colors">
      <Container size="narrow">
        {/* Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-14 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-wervify-white">
            {calc.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            {calc.subtitle}
          </p>
        </FadeIn>

        {/* Interactive Calculator Card */}
        <FadeIn delay={0.1}>
          <div className="rounded-3xl border border-slate-200/90 dark:border-wervify-marine/80 bg-white dark:bg-wervify-midnight/90 p-8 sm:p-12 card-highlight shadow-xl space-y-10">
            {/* Vacancy Slider Control */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label htmlFor={sliderId} className="text-sm font-bold text-slate-800 dark:text-slate-200">
                  {calc.sliderLabel}:
                </label>
                <div className="flex items-baseline gap-1 font-mono">
                  <span className="text-3xl font-black text-wervify-cobalt dark:text-wervify-azure">
                    {vacancies}
                  </span>
                  <span className="text-xs text-slate-500 font-bold">
                    {vacancies === 1 ? 'vacature' : 'vacatures'}
                  </span>
                </div>
              </div>

              {/* Slider Track */}
              <input
                id={sliderId}
                type="range"
                min="1"
                max="10"
                step="1"
                value={vacancies}
                onChange={(e) => setVacancies(Number(e.target.value))}
                aria-label={calc.sliderLabel}
                className="w-full h-3 bg-slate-200 dark:bg-wervify-marine/60 rounded-lg appearance-none cursor-pointer accent-wervify-cobalt"
              />

              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>1 vacature</span>
                <span>5 vacatures</span>
                <span>10 vacatures</span>
              </div>
            </div>

            {/* Split Comparison Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Traditional Agency */}
              <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-wervify-marine/50 bg-slate-50 dark:bg-wervify-void/50 space-y-3">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block">
                  {calc.traditionalLabel}
                </span>
                <span className="text-3xl font-black font-mono text-slate-700 dark:text-slate-300 block line-through decoration-red-500/70">
                  {formatEuro(totalAgencyCost)}
                </span>
                <p className="text-[11px] text-slate-500 leading-relaxed">
                  {calc.traditionalSub}
                </p>
              </div>

              {/* Wervify System */}
              <div className="p-6 rounded-2xl border-2 border-wervify-cobalt dark:border-wervify-azure bg-blue-50/50 dark:bg-wervify-midnight/80 space-y-3">
                <span className="text-xs font-semibold text-wervify-cobalt dark:text-wervify-azure block">
                  {calc.wervifyLabel}
                </span>
                <span className="text-3xl font-black font-mono text-slate-900 dark:text-wervify-white block">
                  {formatEuro(wervifyEstimatedCost)}
                </span>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                  {calc.wervifySub}
                </p>
              </div>
            </div>

            {/* Giant Highlight Savings Banner */}
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-wervify-cobalt to-wervify-cerulean text-white text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-wervify-cobalt/20">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-100 flex items-center justify-center sm:justify-start gap-1.5">
                  <TrendingDown className="h-4 w-4" />
                  <span>{calc.savingsLabel}</span>
                </span>
                <div className="text-4xl sm:text-5xl font-black font-mono tracking-tight">
                  {formatEuro(totalSavings)}
                </div>
                <p className="text-xs text-blue-100">
                  Direct bespaard op wervingskosten die in jouw bedrijf blijven.
                </p>
              </div>

              <Button
                variant="ghost"
                size="lg"
                onClick={onPlanDemo || (() => window.location.assign('#demo'))}
                className="bg-white text-wervify-cobalt hover:bg-blue-50 border-transparent shrink-0 shadow-md font-bold text-sm"
              >
                <span>{calc.ctaText}</span>
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};
