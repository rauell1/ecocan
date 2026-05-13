"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * GlassCard  -  Kimi-spec glassmorphism card component.
 *
 * Designed for use over dark, video, image, or gradient backgrounds.
 * Implements: bg-white/10, backdrop-blur-md, border border-white/20,
 * rounded-smooth-lg, transition on hover (lift + brighten).
 *
 * Props:
 *   - hover: enable hover lift animation (default: true)
 *   - intensity: 'sm' | 'md' | 'lg'  -  controls blur + opacity strength
 */

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
  intensity?: "sm" | "md" | "lg"
  asChild?: boolean
}

const intensityMap = {
  sm: "bg-white/5 backdrop-blur-sm border-white/10",
  md: "bg-white/10 backdrop-blur-md border-white/20",
  lg: "bg-white/15 backdrop-blur-lg border-white/30",
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, hover = true, intensity = "md", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base glass styles
          "rounded-smooth-lg border text-white shadow-lg",
          intensityMap[intensity],
          // Hover lift
          hover && [
            "transition-all duration-300 ease-out",
            "hover:-translate-y-1 hover:border-white/30 hover:bg-white/20 hover:shadow-elevated",
          ],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
GlassCard.displayName = "GlassCard"

// ─── GlassCard subcomponents ─────────────────────────────────────────────────

const GlassCardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pb-0", className)} {...props} />
  )
)
GlassCardHeader.displayName = "GlassCardHeader"

const GlassCardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6", className)} {...props} />
)
GlassCardContent.displayName = "GlassCardContent"

const GlassCardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  )
)
GlassCardFooter.displayName = "GlassCardFooter"

export { GlassCard, GlassCardHeader, GlassCardContent, GlassCardFooter }
