import React, { useEffect, useState } from 'react';

export const BackgroundElements: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Interactive Cursor Spotlight Glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-20 transition-transform duration-300 ease-out bg-radial from-cyan-500/30 via-indigo-600/20 to-transparent"
        style={{
          transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
        }}
      />

      {/* Ambient static glow orbs */}
      <div className="absolute -top-40 -left-40 w-[650px] h-[650px] rounded-full bg-cyan-900/15 blur-[160px]" />
      <div className="absolute top-[35%] -right-40 w-[600px] h-[600px] rounded-full bg-blue-900/15 blur-[170px]" />
      <div className="absolute bottom-20 left-[10%] w-[550px] h-[550px] rounded-full bg-emerald-900/10 blur-[160px]" />

      {/* Subtle Developer Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #94a3b8 1px, transparent 1px),
            linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Subtle Vignette */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#050505]/60 to-[#050505]" />
    </div>
  );
};
