import React from 'react';
import { cn } from '../../lib/utils';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'narrow' | 'wide';
}

/**
 * Responsive Page Section Container.
 * @param props ContainerProps
 */
export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'default',
  className,
  ...props
}) => {
  const sizeMap = {
    narrow: 'max-w-4xl',
    default: 'max-w-7xl',
    wide: 'max-w-[88rem]',
  }[size];

  return (
    <div className={cn('mx-auto px-6 sm:px-10 lg:px-14 xl:px-20 w-full', sizeMap, className)} {...props}>
      {children}
    </div>
  );
};

