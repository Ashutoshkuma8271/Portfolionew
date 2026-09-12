import React, { useState, useEffect } from 'react';
import { Skeleton } from './Skeleton';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  containerClassName?: string;
  aspectRatio?: string; // e.g. 'aspect-[16/10]', 'aspect-[4/5]', 'aspect-video', 'aspect-square'
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  fallbackSrc,
  className = '',
  containerClassName = '',
  aspectRatio = 'aspect-[16/10]',
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
    setIsLoaded(false);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (!hasError && fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasError(true);
    } else {
      setHasError(true);
      setIsLoaded(true);
    }
  };

  return (
    <div className={`relative overflow-hidden ${aspectRatio} ${containerClassName} bg-[#141312]`}>
      {/* Luxury Skeleton Loading Shimmer Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 z-10">
          <Skeleton variant="rectangular" className="w-full h-full rounded-none" />
        </div>
      )}

      {/* Actual Image with Fade-in and Lazy-loading */}
      <img
        src={currentSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        className={`w-full h-full object-cover transition-all duration-700 ease-out ${
          isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-sm'
        } ${className}`}
        {...props}
      />
    </div>
  );
};
