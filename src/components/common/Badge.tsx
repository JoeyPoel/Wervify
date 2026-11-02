import React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'pill' | 'subtle' | 'accent' | 'warning';
  className?: string;
}

/**
 * Standard Eyebrow / Tag Badge Component with Light & Dark support.
 * @param props BadgeProps
 */
export const Badge: React.FC<BadgeProps> = ({ children, variant = 'pill', className }) => {
  const baseStyles = 'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors';

  const variantStyles = {
    pill: 'bg-blue-50 text-wervify-cobalt border border-blue-200 dark:bg-wervify-marine/50 dark:text-wervify-ice dark:border-wervify-marine/80 backdrop-blur-sm',
    subtle: 'bg-slate-100 text-slate-700 border border-slate-200 dark:bg-wervify-midnight/80 dark:text-wervify-azure dark:border-wervify-marine/60',
    accent: 'bg-blue-50 text-wervify-cobalt border border-blue-200 dark:bg-wervify-cobalt/20 dark:text-wervify-azure dark:border-wervify-cobalt/40',
    warning: 'bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30',
  }[variant];

  return <span className={cn(baseStyles, variantStyles, className)}>{children}</span>;
};
