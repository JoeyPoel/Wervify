import React from 'react';
import { cn } from '../../lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

/**
 * Standard Wervify Button Component conforming to design tokens.
 * @param props ButtonProps
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  disabled,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-wervify-azure disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs rounded-md',
    md: 'px-6 py-3 text-sm rounded-lg',
    lg: 'px-8 py-4 text-base rounded-xl',
  }[size];

  const variantStyles = {
    primary:
      'text-white bg-wervify-cobalt hover:bg-wervify-cerulean shadow-md shadow-wervify-cobalt/25 active:scale-[0.98]',
    ghost:
      'text-slate-700 dark:text-wervify-ice bg-white dark:bg-wervify-midnight/60 border border-slate-300 dark:border-wervify-marine hover:bg-slate-100 dark:hover:bg-wervify-marine/40 hover:text-slate-900 dark:hover:text-wervify-white active:scale-[0.98]',
    secondary:
      'text-white bg-wervify-marine/80 hover:bg-wervify-marine border border-wervify-azure/40 active:scale-[0.98]',
    accent:
      'text-slate-900 dark:text-wervify-void bg-blue-100 dark:bg-wervify-ice hover:bg-blue-200 dark:hover:bg-wervify-white shadow-md active:scale-[0.98]',
  }[variant];

  return (
    <button
      className={cn(baseStyles, sizeStyles, variantStyles, fullWidth && 'w-full', className)}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
