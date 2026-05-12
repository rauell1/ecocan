"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"

/**
 * PillButton — Kimi-spec pill-shaped CTA button.
 *
 * This is a standalone component (not a variant of Button) to keep it
 * self-contained for hero and CTA sections that need precise control.
 *
 * Variants:
 *   - primary: solid green pill (default CTA)
 *   - white: white pill on dark/image backgrounds
 *   - outline: outlined white pill on dark backgrounds
 *   - glass: glassmorphism pill
 *
 * The pulsing dot (live indicator) can be added by passing `withDot`.
 */

interface PillButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "white" | "outline" | "glass"
  size?: "sm" | "md" | "lg"
  withDot?: boolean
  asChild?: boolean
}

const variantMap = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-glow",
  white:
    "bg-white text-eco-dark hover:bg-white/90 shadow-md",
  outline:
    "border-2 border-white/80 text-white bg-transparent hover:bg-white hover:text-eco-dark",
  glass:
    "bg-white/10 border border-white/20 text-white backdrop-blur-md hover:bg-white/20",
}

const sizeMap = {
  sm: "px-4 py-2 text-sm gap-2",
  md: "px-6 py-3 text-sm font-semibold gap-2.5",
  lg: "px-8 py-4 text-base font-semibold gap-3",
}

const PillButton = React.forwardRef<HTMLButtonElement, PillButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      withDot = false,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium",
          "transition-all duration-200 ease-out active:scale-[0.97]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          variantMap[variant],
          sizeMap[size],
          className
        )}
        {...props}
      >
        {withDot && (
          <span
            className={cn(
              "h-2 w-2 rounded-full bg-current animate-pulse-dot shrink-0",
              variant === "primary" ? "bg-white" : "bg-current"
            )}
            aria-hidden="true"
          />
        )}
        {children}
      </Comp>
    )
  }
)
PillButton.displayName = "PillButton"

export { PillButton }
export type { PillButtonProps }
