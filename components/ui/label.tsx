"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Label  -  Ecocan design system
 *
 * Two visual modes:
 *   default  → 14px semi-bold, dark text (standard form label)
 *   overline → 12px, uppercase, tracked, primary green (section-overline pattern)
 *
 * The "overline" variant matches .section-overline from globals.css and
 * is used as decorative section headers throughout the site.
 */
const labelVariants = cva(
  "leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-40",
  {
    variants: {
      variant: {
        default: "text-sm font-semibold text-foreground",
        overline: "text-[12px] font-semibold uppercase tracking-[0.1em] text-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface LabelProps
  extends
    React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {}

const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, LabelProps>(
  ({ className, variant, ...props }, ref) => (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(labelVariants({ variant }), className)}
      {...props}
    />
  )
)
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
