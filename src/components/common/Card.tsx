import React from 'react';
import { cn } from '../../lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'elevated' | 'subtle' | 'interactive' | 'outline';
  hoverEffect?: boolean;
}

/**
 * Standard Surface Card Component conforming to design tokens.
 * Adapts seamlessly between light and dark modes.
 * @param props CardProps
 */
export const Card: React.FC<CardProps> = ({
  children,
  variant = 'elevated',
  hoverEffect = true,
  className,
  ...props
}) => {
  const baseStyles = 'relative rounded-xl transition-all duration-300';

  const variantStyles = {
    elevated:
      'border border-slate-200/90 dark:border-wervify-marine/70 bg-white dark:bg-wervify-midnight/60 card-highlight p-6 sm:p-8',
    subtle:
      'border border-slate-200/70 dark:border-wervify-marine/50 bg-slate-50/90 dark:bg-wervify-midnight/40 p-6 sm:p-8',
    interactive:
      'border border-slate-200/90 dark:border-wervify-marine/70 bg-white dark:bg-wervify-midnight/60 card-highlight p-6 sm:p-8 hover:border-wervify-cobalt/60 dark:hover:border-wervify-cerulean/80 hover:shadow-xl hover:-translate-y-0.5',
    outline:
      'border border-slate-200 dark:border-wervify-marine/60 bg-transparent p-6 sm:p-8',
  }[variant];

  const hoverClass = hoverEffect && variant !== 'interactive' ? 'hover:border-wervify-cobalt/40 dark:hover:border-wervify-cerulean/60' : '';

  return (
    <div className={cn(baseStyles, variantStyles, hoverClass, className)} {...props}>
      {children}
    </div>
  );
};
