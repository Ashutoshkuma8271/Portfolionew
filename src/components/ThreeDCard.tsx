import React, { useRef, useState, useCallback } from 'react';

interface ThreeDCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  glareOpacity?: number;
  glowColor?: string;
}

export const ThreeDCard: React.FC<ThreeDCardProps> = ({
  children,
  className = '',
  depth = 10,
  glareOpacity = 0.22,
  glowColor = 'rgba(242, 202, 80, 0.35)',
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -depth;
    const rotateY = ((x - centerX) / centerX) * depth;

    setRotation({ x: rotateX, y: rotateY });
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  }, [depth]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
    setGlarePosition({ x: 50, y: 50 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1200,
        transformStyle: 'preserve-3d',
      }}
      className={`relative group/card ${className}`}
      {...props}
    >
      <div
        style={{
          transform: isHovered
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(8px)`
            : 'rotateX(0deg) rotateY(0deg) translateZ(0px)',
          transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="w-full h-full relative"
      >
        {children}

        {/* Dynamic Specular Light Glare Overlay */}
        <div
          style={{
            background: isHovered
              ? `radial-gradient(circle 350px at ${glarePosition.x}% ${glarePosition.y}%, ${glowColor}, transparent 65%)`
              : 'transparent',
            opacity: isHovered ? glareOpacity : 0,
            transition: 'opacity 0.25s ease-out',
          }}
          className="absolute inset-0 rounded-2xl pointer-events-none z-30 mix-blend-screen"
        />

        {/* Dynamic Golden Edge Reflection */}
        <div
          style={{
            background: isHovered
              ? `linear-gradient(${glarePosition.x * 3.6}deg, rgba(242,202,80,0.3) 0%, transparent 40%, rgba(212,175,55,0.2) 100%)`
              : 'transparent',
            opacity: isHovered ? 0.7 : 0,
            transition: 'opacity 0.3s ease',
          }}
          className="absolute inset-0 rounded-2xl pointer-events-none z-20 border border-transparent"
        />
      </div>
    </div>
  );
};
