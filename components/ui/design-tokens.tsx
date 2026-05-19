// components/ui/design-tokens.tsx
import React from 'react';

export function GlassCard({ 
  children, 
  className = "", 
  onMouseEnter, 
  onMouseLeave 
}: { 
  children: React.ReactNode, 
  className?: string,
  onMouseEnter?: () => void,
  onMouseLeave?: () => void
}) {
  return (
    <div 
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`relative p-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-gray-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:border-emerald-500 hover:shadow-2xl hover:shadow-emerald-500/10 ${className}`}
    >
      {/* Inner Light Stroke */}
      <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/50 pointer-events-none" />
      {children}
    </div>
  );
}