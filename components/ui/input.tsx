import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Input — Ecocan design system
 *
 * Visual spec (from Kimi index.css + globals.css):
 *   - border-radius: 9999px (pill shape) — consistent with pill-btn
 *   - border: 1.5px, color: border token
 *   - focus ring: primary green (--ring token), 2px ring, 1px offset
 *   - placeholder: muted-foreground
 *   - height: 48px (matches button default height)
 *   - Disabled: 40% opacity, no pointer events
 *   - Transition: border-color + box-shadow only (no layout props)
 */
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // Shape
          "h-12 w-full rounded-full",
          // Spacing
          "px-5 py-3",
          // Typography
          "text-sm font-normal text-foreground",
          "placeholder:text-muted-foreground",
          // Surface
          "bg-background",
          // Border
          "border border-input",
          // Focus
          "focus-visible:outline-none",
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
          // Transition — only the properties that actually change
          "transition-[border-color,box-shadow] duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
          // States
          "disabled:cursor-not-allowed disabled:opacity-40",
          // File input reset
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
