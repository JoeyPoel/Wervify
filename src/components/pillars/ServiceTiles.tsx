import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, MessageSquare, Calendar, Sparkles } from 'lucide-react';
import { strings } from '../../constants/strings';

export interface ServiceTileItem {
  id: string;
  category: string;
  title: string;
  description: string;
  tags?: string[];
  detail?: string;
  cta: string;
  icon?: React.ComponentType<{ className?: string }>;
  metric?: string;
}

export interface ServiceTilesProps {
  tiles?: ServiceTileItem[];
  onSelectTile?: (id: string) => void;
  className?: string;
}

/**
 * ServiceTiles Component: Shows the three tangible agency capabilities.
 * Replaces generic AI icon-boxes and monotonic numbers with real recruitment UI previews.
 */
export const ServiceTiles: React.FC<ServiceTilesProps> = ({
  onSelectTile,
  className = '',
}) => {
  const { tile1, tile2, tile3 } = strings.pillars.tiles;

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 ${className}`}>
      {/* Tile 1: Social Campagnes & Huisstijl */}
      <motion.div
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 dark:border-wervify-marine/70 bg-white dark:bg-wervify-midnight/70 p-7 shadow-sm hover:shadow-xl hover:border-wervify-cobalt/60 dark:hover:border-wervify-azure/60 transition-all"
      >
        <div>
          {/* Tangible UI Artifact: Mini Meta/Instagram Ad Card */}
          <div className="mb-6 rounded-xl border border-slate-200/80 dark:border-wervify-marine/60 bg-slate-50 dark:bg-wervify-marine/25 p-4 overflow-hidden">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200/60 dark:border-wervify-marine/40">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-wervify-cobalt flex items-center justify-center text-white text-[10px] font-bold">
                  W
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-wervify-white leading-none">
                    {tile1.company}
                  </p>
                  <p className="text-[10px] text-slate-400">{tile1.sponsored}</p>
                </div>
              </div>
              <span className="text-[10px] font-semibold text-wervify-cobalt dark:text-wervify-azure bg-blue-50 dark:bg-wervify-cobalt/20 px-2 py-0.5 rounded-full">
                {tile1.metric}
              </span>
            </div>

            <div className="space-y-1.5 text-left">
              <p className="text-xs font-bold text-slate-800 dark:text-slate-100">
                {tile1.headline}
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2">
                {tile1.subtext}
              </p>
            </div>

            <div className="mt-3 pt-2 flex items-center justify-between">
              <span className="text-[10px] font-medium text-slate-400">{tile1.platform}</span>
              <span className="text-[11px] font-bold text-wervify-cobalt dark:text-wervify-azure flex items-center gap-1">
                {tile1.cta}
                <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </div>

          <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-wervify-white mb-2.5">
            {tile1.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
            {tile1.desc}
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100 dark:border-wervify-marine/50 flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            {tile1.footer}
          </span>
          <button
            type="button"
            onClick={() => onSelectTile && onSelectTile('social-campaigns')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-wervify-cobalt dark:text-wervify-azure group-hover:translate-x-0.5 transition-transform cursor-pointer"
          >
            <span>{tile1.action}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </motion.div>

      {/* Tile 2: 24/7 AI-Screening met Bo */}
      <motion.div
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 dark:border-wervify-marine/70 bg-white dark:bg-wervify-midnight/70 p-7 shadow-sm hover:shadow-xl hover:border-wervify-cobalt/60 dark:hover:border-wervify-azure/60 transition-all"
      >
        <div>
          {/* Tangible UI Artifact: Mini WhatsApp Chat Simulation */}
          <div className="mb-6 rounded-xl border border-slate-200/80 dark:border-wervify-marine/60 bg-slate-50 dark:bg-wervify-marine/25 p-4 overflow-hidden">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200/60 dark:border-wervify-marine/40">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-emerald-600 flex items-center justify-center text-white text-[10px]">
                  <MessageSquare className="h-3.5 w-3.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-wervify-white leading-none">
                    {tile2.botName}
                  </p>
                  <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                    {tile2.status}
                  </p>
                </div>
              </div>
              <span className="text-[10px] font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full">
                {tile2.badge}
              </span>
            </div>

            <div className="space-y-2 text-left text-[11px]">
              <div className="bg-white dark:bg-wervify-marine/50 p-2 rounded-lg rounded-tl-none border border-slate-200/60 dark:border-transparent text-slate-700 dark:text-slate-200 max-w-[88%]">
                {tile2.question}
              </div>
              <div className="bg-emerald-500 text-white p-2 rounded-lg rounded-tr-none ml-auto max-w-[80%] font-medium">
                {tile2.answer}
              </div>
            </div>

            <div className="mt-3 pt-2 flex items-center justify-between">
              <span className="text-[10px] font-medium text-slate-400">{tile2.metric}</span>
              <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                {tile2.result}
                <CheckCircle2 className="h-3 w-3" />
              </span>
            </div>
          </div>

          <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-wervify-white mb-2.5">
            {tile2.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
            {tile2.desc}
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100 dark:border-wervify-marine/50 flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            {tile2.footer}
          </span>
          <button
            type="button"
            onClick={() => onSelectTile && onSelectTile('ai-prescreening')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-wervify-cobalt dark:text-wervify-azure group-hover:translate-x-0.5 transition-transform cursor-pointer"
          >
            <span>{tile2.action}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </motion.div>

      {/* Tile 3: Menselijke Validatie & Warm Gesprek */}
      <motion.div
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 dark:border-wervify-marine/70 bg-white dark:bg-wervify-midnight/70 p-7 shadow-sm hover:shadow-xl hover:border-wervify-cobalt/60 dark:hover:border-wervify-azure/60 transition-all"
      >
        <div>
          {/* Tangible UI Artifact: Candidate Verification Dossier */}
          <div className="mb-6 rounded-xl border border-slate-200/80 dark:border-wervify-marine/60 bg-slate-50 dark:bg-wervify-marine/25 p-4 overflow-hidden">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-200/60 dark:border-wervify-marine/40">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">
                  T
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-wervify-white leading-none">
                    {tile3.candidateName}
                  </p>
                  <p className="text-[10px] text-slate-400">{tile3.role}</p>
                </div>
              </div>
              <span className="text-[10px] font-semibold text-wervify-cobalt dark:text-wervify-azure bg-blue-50 dark:bg-wervify-cobalt/20 px-2 py-0.5 rounded-full flex items-center gap-1">
                <Sparkles className="h-2.5 w-2.5" />
                {tile3.badge}
              </span>
            </div>

            <div className="space-y-1.5 text-left text-[11px] text-slate-600 dark:text-slate-300">
              <div className="flex items-center justify-between">
                <span>{tile3.req1}</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">{tile3.val1}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>{tile3.req2}</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{tile3.val2}</span>
              </div>
            </div>

            <div className="mt-3 pt-2 flex items-center justify-between border-t border-slate-200/60 dark:border-wervify-marine/40">
              <span className="text-[10px] font-medium text-slate-400 flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {tile3.meeting}
              </span>
              <span className="text-[11px] font-bold text-wervify-cobalt dark:text-wervify-azure">
                {tile3.agenda}
              </span>
            </div>
          </div>

          <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-wervify-white mb-2.5">
            {tile3.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 font-normal">
            {tile3.desc}
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100 dark:border-wervify-marine/50 flex items-center justify-between">
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            {tile3.footer}
          </span>
          <button
            type="button"
            onClick={() => onSelectTile && onSelectTile('human-validation')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-wervify-cobalt dark:text-wervify-azure group-hover:translate-x-0.5 transition-transform cursor-pointer"
          >
            <span>{tile3.action}</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </motion.div>
    </div>
  );
};
