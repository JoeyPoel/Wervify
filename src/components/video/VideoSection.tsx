import React, { useState } from 'react';
import { Container } from '../common/Container';
import { Badge } from '../common/Badge';
import { FadeIn } from '../common/FadeIn';
import { strings } from '../../constants/strings';
import { Play, Video } from 'lucide-react';

/**
 * Video Slot Component with Poster Frame & Play Affordance.
 */
export const VideoSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 sm:py-28 bg-slate-100/60 dark:bg-wervify-midnight/60 border-b border-slate-200 dark:border-wervify-marine/40 transition-colors">
      <Container size="narrow">
        <FadeIn className="text-center mb-12 space-y-4">
          <Badge variant="pill">
            <Video className="h-3.5 w-3.5 text-wervify-cobalt dark:text-wervify-azure mr-1" />
            <span>{strings.video.eyebrow}</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-wervify-white">
            {strings.video.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            {strings.video.subtitle}
          </p>
        </FadeIn>

        {/* Video Player Frame Placeholder */}
        <FadeIn delay={0.1}>
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-300 dark:border-wervify-marine/80 bg-slate-900 dark:bg-wervify-midnight/90 shadow-2xl group flex items-center justify-center">
            {/* Subtle grid pattern background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-blue-950/40 dark:from-wervify-void dark:via-wervify-midnight dark:to-wervify-marine/40 opacity-80" />

            {/* Ambient Glow */}
            <div className="absolute -inset-1 rounded-2xl bg-wervify-cobalt/20 blur-2xl pointer-events-none" />

            {/* Centered Play Affordance */}
            <div className="relative z-10 text-center space-y-4 p-6">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-wervify-cobalt text-white shadow-xl shadow-wervify-cobalt/40 border border-blue-300/40 group-hover:scale-110 group-hover:bg-wervify-cerulean transition-all focus:outline-none focus:ring-4 focus:ring-wervify-azure/40 cursor-pointer"
                aria-label={strings.video.playLabel}
              >
                <Play className="h-8 w-8 ml-1 fill-current" />
              </button>
              <p className="text-xs sm:text-sm text-slate-300 font-medium max-w-md mx-auto">
                {strings.video.placeholderText}
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};
