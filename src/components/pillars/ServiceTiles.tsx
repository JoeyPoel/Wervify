import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Bot, CheckCircle } from 'lucide-react';

export interface ServiceTileItem {
  id: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  detail: string;
  cta: string;
  icon: React.ComponentType<{ className?: string }>;
  metric: string;
}

const DEFAULT_TILES: ServiceTileItem[] = [
  {
    id: 'social-campaigns',
    category: 'CAMPAGNES & HUISSTIJL',
    title: 'Bouw je werkgeversmerk.',
    description: 'Video- en fotocampagnes op Meta en LinkedIn in jouw eigen huisstijl.',
    tags: ['Meta Ads', 'LinkedIn', 'Branding'],
    detail: '85% passief bereik',
    cta: 'Ontdek campagnes',
    icon: Target,
    metric: '85% Passief Bereik',
  },
  {
    id: 'ai-prescreening',
    category: 'AI-VOORSELECTIE',
    title: '24/7 filteren met Bo.',
    description: 'Bo toetst sollicitanten binnen 90s via WhatsApp en plant kandidaten in.',
    tags: ['WhatsApp AI', 'Geautomatiseerd', 'Directe Respons'],
    detail: '42s reactietijd',
    cta: 'Ontdek AI-Bo',
    icon: Bot,
    metric: '24/7 Directe Respons',
  },
  {
    id: 'human-validation',
    category: 'MENSELIJKE VALIDATIE',
    title: 'Alleen de beste profielen.',
    description: 'Specialisten verifiëren elk profiel vóór overdracht. Alleen gekwalificeerde vakmensen.',
    tags: ['Kwaliteitscheck', 'Persoonlijk', '0% No-Cure'],
    detail: '100% data-eigenaarschap',
    cta: 'Bekijk validatie',
    icon: CheckCircle,
    metric: '100% Geverifieerd',
  },
];

export interface ServiceTilesProps {
  tiles?: ServiceTileItem[];
  onSelectTile?: (id: string) => void;
  className?: string;
}

/**
 * ServiceTiles Component (inspired by Framer Component-01).
 * Interactive service cards with hover lift, diagram banner, category pill, tags strip, and arrow CTA.
 * Conforms to zero-hardcoded-hex invariant.
 * @param props ServiceTilesProps
 */
export const ServiceTiles: React.FC<ServiceTilesProps> = ({
  tiles = DEFAULT_TILES,
  onSelectTile,
  className = '',
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 ${className}`}>
      {tiles.map((tile, idx) => {
        const IconComponent = tile.icon;

        return (
          <motion.div
            key={tile.id}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
            className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 dark:border-wervify-marine/70 bg-white/95 dark:bg-wervify-midnight/70 backdrop-blur-md p-6 sm:p-7 card-highlight hover:border-wervify-cobalt/60 dark:hover:border-wervify-azure/70 hover:shadow-xl transition-all"
          >
            <div>
              {/* Top Banner Slot with Animated Icon Preview */}
              <div className="relative h-32 rounded-xl mb-6 overflow-hidden bg-slate-50 dark:bg-wervify-marine/30 border border-slate-100 dark:border-wervify-marine/50 flex items-center justify-center group-hover:border-wervify-cobalt/40 transition-colors">
                <div className="absolute inset-0 bg-dot-grid opacity-50 dark:opacity-20" />
                <div className="relative z-10 flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white dark:bg-wervify-midnight text-wervify-cobalt dark:text-wervify-azure shadow-md group-hover:scale-110 group-hover:bg-wervify-cobalt group-hover:text-white transition-all duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-wervify-cobalt dark:text-wervify-azure">
                    {tile.metric}
                  </span>
                </div>
              </div>

              {/* Category Pill */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-wervify-cobalt dark:text-wervify-azure bg-blue-50 dark:bg-wervify-marine/50 px-2.5 py-1 rounded-full border border-blue-200/60 dark:border-wervify-marine/70">
                  {tile.category}
                </span>
                <span className="text-xs font-mono text-slate-400 dark:text-slate-500 font-bold">
                  0{idx + 1}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 dark:text-wervify-white mb-2.5">
                {tile.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                {tile.description}
              </p>
            </div>

            {/* Footer with Tags & Arrow Link */}
            <div className="pt-5 border-t border-slate-100 dark:border-wervify-marine/50 space-y-4">
              {/* Tags Strip */}
              <div className="flex flex-wrap gap-1.5">
                {tile.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-wervify-marine/40 px-2 py-0.5 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Row */}
              <div className="flex items-center justify-between pt-1">
                <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">
                  {tile.detail}
                </span>
                <button
                  type="button"
                  onClick={() => onSelectTile && onSelectTile(tile.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-wervify-cobalt dark:text-wervify-azure group-hover:text-wervify-cerulean group-hover:translate-x-1 transition-all cursor-pointer"
                >
                  <span>{tile.cta}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

