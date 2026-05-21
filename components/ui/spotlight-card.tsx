"use client"

import * as React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"

export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  spotlightColor?: string
  spotlightSize?: number
}

export const SpotlightCard = React.forwardRef<HTMLDivElement, SpotlightCardProps>(
  ({ children, className = "", spotlightColor = "rgba(16,185,129,0.12)", spotlightSize = 350, ...props }, ref) => {
    const [coords, setCoords] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      setCoords({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    return (
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c100c]/50 backdrop-blur-md p-8 shadow-2xl transition-all duration-500 hover:border-emerald-500/35 hover:scale-[1.01]",
          className
        )}
        {...props}
      >
        <div
          className="absolute -inset-px rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
          style={{
            background: `radial-gradient(${spotlightSize}px circle at ${coords.x}px ${coords.y}px, ${spotlightColor}, transparent 80%)`,
          }}
        />
        <div className="relative z-10">{children}</div>
      </div>
    )
  }
)

SpotlightCard.displayName = "SpotlightCard"
