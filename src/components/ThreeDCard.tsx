import React, { useRef, useState } from 'react';

interface ThreeDCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  glareOpacity?: number;
}

export const ThreeDCard: React.FC<ThreeDCardProps> = ({
  children,
  className = '',
  depth = 12,
  glareOpacity = 0.2,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
      className={`relative transition-transform duration-300 ease-out ${className}`}
      {...props}
    >
      <div
        style={{
          transform: isHovered
            ? `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateZ(10px)`
            : 'rotateX(0deg) rotateY(0deg) translateZ(0px)',
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
        }}
        className="w-full h-full relative"
      >
        {children}

        {/* Dynamic Specular Light Glare Overlay */}
        <div
          style={{
            background: isHovered
              ? `radial-gradient(circle 300px at ${glarePosition.x}% ${glarePosition.y}%, rgba(242, 202, 80, ${glareOpacity}), transparent 70%)`
              : 'transparent',
            transition: 'opacity 0.3s ease',
          }}
          className="absolute inset-0 rounded-2xl pointer-events-none z-30 mix-blend-screen"
        />
      </div>
    </div>
  );
};
