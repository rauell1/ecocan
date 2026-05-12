import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Badge — Ecocan design system
 *
 * Variants:
 *   default  → eco-green filled (primary label, stat badge)
 *   outline  → green border, transparent bg (secondary tag)
 *   muted    → grey surface (neutral label)
 *   white    → white bg, dark text (on dark/hero sections)
 *   warning  → amber (caution states)
 *   error    → red (destructive states)
 *
 * Typography: 11px / uppercase / tracked — matches .section-overline pattern.
 * Shape: pill (rounded-full), no square badges in this design system.
 */
const badgeVariants = cva(
  [
    "inline-flex items-center gap-1",
    "rounded-full px-3 py-0.5",
    "text-[11px] font-semibold uppercase tracking-[0.08em]",
    "select-none whitespace-nowrap",
    "transition-colors duration-[180ms]",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground",
        outline:
          "border border-primary text-primary bg-transparent",
        muted:
          "bg-muted text-muted-foreground",
        white:
          "bg-white text-eco-dark",
        warning:
          "bg-yellow-100 text-yellow-800 border border-yellow-200",
        error:
          "bg-destructive/10 text-destructive border border-destructive/20",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
