import React, { useState } from 'react';
import { Container } from '../common/Container';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { FadeIn, FadeInStagger } from '../common/FadeIn';
import { strings } from '../../constants/strings';
import { PACKAGES, PRICING_ADDONS, COMPARISON_FEATURES } from '../../constants/packages';
import { Check, Info, PlusCircle, ArrowRight } from 'lucide-react';

interface PricingSectionProps {
  onSelectTier?: (tierName: string) => void;
}

/**
 * Pricing Section with 3 tiers, Add-ons list, and Detailed Comparison Matrix with micro reveals.
 * @param props PricingSectionProps
 */
export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectTier }) => {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section id="pakketten" className="py-20 sm:py-28 bg-slate-50 dark:bg-wervify-midnight/30 border-b border-slate-200 dark:border-wervify-marine/40 transition-colors">
      <Container>
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <Badge variant="pill">
            <span>{strings.pricing.eyebrow}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-wervify-white">
            {strings.pricing.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {strings.pricing.subtitle}
          </p>
        </FadeIn>

        {/* 3 Tier Cards */}
        <FadeInStagger className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PACKAGES.map((tier) => {
            const isPopular = tier.popular;
            return (
              <div
                key={tier.id}
                className={`relative rounded-2xl flex flex-col justify-between transition-all ${
                  isPopular
                    ? 'border-2 border-wervify-cobalt dark:border-wervify-azure bg-white dark:bg-wervify-midnight/90 shadow-xl shadow-wervify-cobalt/10 lg:-translate-y-2'
                    : 'border border-slate-200 dark:border-wervify-marine/70 bg-white dark:bg-wervify-midnight/50 shadow-sm'
                } p-8`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-wervify-cobalt dark:bg-wervify-azure text-white dark:text-wervify-void text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                      {strings.common.mostChosen}
                    </span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-wervify-white">{tier.name}</h3>
                    {tier.badge && (
                      <span className="text-xs font-semibold text-wervify-cobalt dark:text-wervify-azure bg-blue-50 dark:bg-wervify-marine/40 px-2.5 py-1 rounded border border-blue-200 dark:border-wervify-marine/60">
                        {tier.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-6 min-h-[3rem]">
                    {tier.tagline}
                  </p>

                  {/* Pricing Box */}
                  <div className="pb-6 mb-6 border-b border-slate-100 dark:border-wervify-marine/50">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black font-mono text-slate-900 dark:text-wervify-white">
                        {tier.monthlyPrice}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">/ maand</span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 font-mono">
                      Eenmalige onboarding: {tier.setupFee}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-slate-200 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-wervify-cobalt dark:text-wervify-azure shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div>
                  <Button
                    variant={isPopular ? 'primary' : 'ghost'}
                    size="md"
                    fullWidth
                    onClick={() => onSelectTier ? onSelectTier(tier.name) : window.location.assign('#demo')}
                    className="gap-2"
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </FadeInStagger>

        {/* Notices on Setup Fee & Ad Spend */}
        <FadeIn className="max-w-4xl mx-auto mb-16 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-start gap-2.5 p-4 rounded-xl border border-slate-200 dark:border-wervify-marine/50 bg-white dark:bg-wervify-midnight/40 shadow-sm">
            <Info className="h-4 w-4 text-wervify-cobalt dark:text-wervify-azure shrink-0 mt-0.5" />
            <p>{strings.pricing.setupNotice}</p>
          </div>
          <div className="flex items-start gap-2.5 p-4 rounded-xl border border-slate-200 dark:border-wervify-marine/50 bg-white dark:bg-wervify-midnight/40 shadow-sm">
            <Info className="h-4 w-4 text-wervify-cobalt dark:text-wervify-azure shrink-0 mt-0.5" />
            <p>{strings.pricing.adSpendNotice}</p>
          </div>
        </FadeIn>

        {/* Add-ons List */}
        <div className="mb-16">
          <FadeIn className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-wervify-white">
              {strings.pricing.addOnsHeading}
            </h3>
          </FadeIn>
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRICING_ADDONS.map((addon) => (
              <div
                key={addon.id}
                className="rounded-xl border border-slate-200 dark:border-wervify-marine/60 bg-white dark:bg-wervify-midnight/50 p-6 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-2 text-wervify-cobalt dark:text-wervify-azure mb-3">
                    <PlusCircle className="h-4 w-4" />
                    <h4 className="text-sm font-bold text-slate-900 dark:text-wervify-white">{addon.title}</h4>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {addon.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 dark:border-wervify-marine/40 text-xs font-mono font-semibold text-wervify-cobalt dark:text-wervify-ice">
                  {addon.price}
                </div>
              </div>
            ))}
          </FadeInStagger>
        </div>

        {/* Toggleable Full Comparison Matrix */}
        <FadeIn className="text-center">
          <Button
            variant="ghost"
            size="md"
            onClick={() => setShowComparison(!showComparison)}
          >
            <span>{showComparison ? 'Verberg specificatietabel' : 'Bekijk uitgebreide pakketvergelijking'}</span>
          </Button>

          {showComparison && (
            <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 dark:border-wervify-marine/70 bg-white dark:bg-wervify-midnight/80 p-4 shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-wervify-marine/60">
                    <th className="py-3 px-4 font-semibold text-slate-600 dark:text-slate-400">Functionaliteit</th>
                    <th className="py-3 px-4 font-semibold text-slate-700 dark:text-slate-300">Basis</th>
                    <th className="py-3 px-4 font-bold text-wervify-cobalt dark:text-wervify-azure bg-blue-50/70 dark:bg-wervify-cobalt/10">Groei</th>
                    <th className="py-3 px-4 font-semibold text-slate-700 dark:text-slate-300">Pro & Continu</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-wervify-marine/40">
                  {COMPARISON_FEATURES.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-wervify-marine/20">
                      <td className="py-3 px-4 text-slate-900 dark:text-wervify-white font-medium">{row.feature}</td>
                      <td className="py-3 px-4 text-slate-600 dark:text-slate-400">{row.basis}</td>
                      <td className="py-3 px-4 text-wervify-cobalt dark:text-wervify-ice bg-blue-50/70 dark:bg-wervify-cobalt/10 font-semibold">{row.groei}</td>
                      <td className="py-3 px-4 text-slate-700 dark:text-slate-300">{row.pro}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </FadeIn>
      </Container>
    </section>
  );
};
