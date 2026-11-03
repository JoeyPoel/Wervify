import React from 'react';

export interface AmbientBackgroundProps {
  className?: string;
  fixed?: boolean;
  intensity?: 'subtle' | 'vibrant';
  showGrid?: boolean;
}

/**
 * Ultra-Lightweight Ambient Background Engine.
 * 100% hardware-efficient CSS radial gradient mesh without artificial dot-matrix patterns.
 * Pure native CSS background layers providing vibrant ambiance with 0% CPU overhead.
 * @param props AmbientBackgroundProps
 */
export const AmbientBackground: React.FC<AmbientBackgroundProps> = ({
  className = '',
  fixed = true,
  intensity = 'vibrant',
}) => {
  const positionClass = fixed ? 'fixed inset-0 pointer-events-none z-0' : 'absolute inset-0 pointer-events-none';
  const meshOpacity = intensity === 'subtle' ? 'opacity-70' : 'opacity-100';

  return (
    <div
      aria-hidden="true"
      className={`${positionClass} overflow-hidden select-none transition-opacity duration-300 ${className}`}
    >
      {/* Strategic Ambient Radial Gradient Mesh (Light & Dark) */}
      <div className={`absolute inset-0 ${meshOpacity} bg-ambient-mesh`} />
    </div>
  );
};
