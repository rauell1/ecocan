import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Badge  -  token-hardened, Kimi stat-badge variant added.
 * 'stat' variant = large, prominent badge used in stat/counter sections.
 * 'trust' variant = small pill used as hero trust indicators.
 */
const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium transition-colors",
  {
    variants: {
      variant: {
        default:
          "border border-transparent bg-primary text-primary-foreground hover:bg-primary/80 px-2.5 py-0.5 text-xs",
        secondary:
          "border border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-2.5 py-0.5 text-xs",
        destructive:
          "border border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80 px-2.5 py-0.5 text-xs",
        outline: "border border-border text-foreground px-2.5 py-0.5 text-xs",
        eco: "border border-transparent bg-eco-dark/10 text-eco-dark px-2.5 py-0.5 text-xs font-semibold",
        /**
         * Stat badge  -  Kimi spec. Large, glass-style, used over dark sections.
         * Displays a number + label pair.
         */
        stat: "bg-white/15 border border-white/25 text-white backdrop-blur-sm px-4 py-2 text-sm font-semibold gap-1.5",
        /**
         * Trust badge  -  small pill in hero for credibility signals.
         * e.g. "DRS Certified", "ISO 9001"
         */
        trust:
          "bg-primary/10 border border-primary/20 text-primary px-3 py-1 text-xs font-medium gap-1",
        /**
         * Pulsing dot  -  animated status indicator.
         * Wrap the dot span and label inside this badge.
         */
        live: "bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 px-3 py-1 text-xs font-medium gap-2",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
