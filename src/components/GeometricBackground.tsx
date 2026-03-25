import React from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

const GeometricBackground: React.FC = () => {
  const { x, y } = useMousePosition();

  const shapes = [
    { id: 1, size: 120, delay: 0, type: 'circle' },
    { id: 2, size: 80, delay: 1, type: 'circle' },
    { id: 3, size: 200, delay: 2, type: 'circle' },
    { id: 4, size: 60, delay: 1.5, type: 'circle' },
    { id: 5, size: 140, delay: 0.5, type: 'circle' },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {shapes.map((shape) => (
        <div
          key={shape.id}
          className="absolute opacity-10 animate-float"
          style={{
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            left: `${20 + (shape.id * 15)}%`,
            top: `${10 + (shape.id * 12)}%`,
            transform: `translate(${x * 0.02 * shape.id}px, ${y * 0.02 * shape.id}px)`,
            animationDelay: `${shape.delay}s`,
            background: `linear-gradient(135deg, hsl(221 83% 53%), hsl(221 83% 40%))`,
            borderRadius: shape.type === 'circle' ? '50%' : '20%',
            transition: 'transform 0.2s ease-out',
          }}
        />
      ))}
      
      {/* Hexagonal shapes */}
      <div 
        className="absolute top-1/4 right-1/4 w-32 h-32 opacity-5"
        style={{
          transform: `translate(${x * 0.03}px, ${y * 0.03}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full animate-float" style={{ animationDelay: '2s' }}>
          <polygon 
            points="50,5 85,25 85,75 50,95 15,75 15,25" 
            fill="url(#hexGradient)"
          />
          <defs>
            <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(221 83% 53%)" />
              <stop offset="100%" stopColor="hsl(221 83% 40%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Additional floating geometric elements */}
      <div 
        className="absolute bottom-1/4 left-1/3 w-16 h-16 opacity-8"
        style={{
          transform: `translate(${x * 0.015}px, ${y * 0.015}px) rotate(${x * 0.1}deg)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rotate-45 animate-pulse-glow"></div>
      </div>
    </div>
  );
};

export default GeometricBackground;