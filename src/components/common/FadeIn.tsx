import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'none';
  fullWidth?: boolean;
}

/**
 * Smooth, subtle scroll reveal wrapper.
 * Respects reduced-motion preferences with zero jitter or pulsing.
 * @param props FadeInProps
 */
export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.45,
  direction = 'up',
  fullWidth = false,
  className,
  ...props
}) => {
  const shouldReduceMotion = useReducedMotion();

  const getInitialY = () => {
    if (shouldReduceMotion || direction === 'none') return 0;
    return direction === 'up' ? 14 : -14;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: getInitialY() }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: shouldReduceMotion ? 0.1 : duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={fullWidth ? `w-full ${className || ''}` : className}
      {...(props as any)}
    >
      {children}
    </motion.div>
  );
};

export interface FadeInStaggerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  staggerDelay?: number;
}

/**
 * Container that reveals child elements in a gentle stagger.
 * @param props FadeInStaggerProps
 */
export const FadeInStagger: React.FC<FadeInStaggerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={className} {...props}>
      {React.Children.map(children, (child, idx) => {
        if (!React.isValidElement(child)) return child;
        return <FadeIn delay={idx * 0.08}>{child}</FadeIn>;
      })}
    </div>
  );
};

