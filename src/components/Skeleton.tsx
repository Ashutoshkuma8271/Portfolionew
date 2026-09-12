import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'rectangular' | 'circular' | 'text' | 'card' | 'avatar' | 'metric';
  width?: string | number;
  height?: string | number;
  rounded?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  variant = 'rectangular',
  width,
  height,
  rounded,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'circular':
        return 'rounded-full aspect-square';
      case 'avatar':
        return 'w-12 h-12 rounded-full shrink-0';
      case 'text':
        return 'h-4 w-full rounded-sm';
      case 'metric':
        return 'h-16 w-full rounded-xl';
      case 'card':
        return 'h-64 w-full rounded-2xl';
      case 'rectangular':
      default:
        return 'w-full h-full rounded-md';
    }
  };

  const inlineStyles: React.CSSProperties = {
    ...(width ? { width: typeof width === 'number' ? `${width}px` : width } : {}),
    ...(height ? { height: typeof height === 'number' ? `${height}px` : height } : {}),
  };

  return (
    <div
      style={inlineStyles}
      className={`relative overflow-hidden bg-[#161412] border border-[#2d2516]/60 ${getVariantStyles()} ${
        rounded || ''
      } ${className}`}
    >
      {/* Dynamic Gold Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f2ca50]/10 to-transparent -translate-x-full animate-[shimmer_1.8s_infinite] pointer-events-none" />
      {/* Subtle pulsing background */}
      <div className="absolute inset-0 bg-[#d4af37]/[0.03] animate-pulse pointer-events-none" />
    </div>
  );
};

export const CardSkeleton: React.FC<{ count?: number; className?: string }> = ({
  count = 1,
  className = '',
}) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`p-6 bg-[#161412] border border-[#2d2516] rounded-2xl space-y-4 ${className}`}
        >
          <div className="flex items-center gap-3">
            <Skeleton variant="circular" className="w-10 h-10" />
            <div className="space-y-2 flex-1">
              <Skeleton variant="text" className="w-2/3 h-3.5" />
              <Skeleton variant="text" className="w-1/3 h-2.5" />
            </div>
          </div>
          <Skeleton variant="rectangular" className="w-full h-40 rounded-xl" />
          <div className="space-y-2 pt-2">
            <Skeleton variant="text" className="w-full h-3" />
            <Skeleton variant="text" className="w-4/5 h-3" />
          </div>
        </div>
      ))}
    </>
  );
};
