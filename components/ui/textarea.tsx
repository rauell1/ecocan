import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Textarea — Ecocan design system
 *
 * Matches Input visual spec with two adjustments:
 *   - rounded-2xl instead of rounded-full (pill textarea looks odd with tall height)
 *   - resize: vertical only (resize-y) — horizontal resize breaks layout grids
 *   - min-height: 120px (3 visible lines)
 */
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          // Shape — rounded-2xl, not pill (tall textarea with pill looks broken)
          "min-h-[120px] w-full rounded-2xl",
          // Spacing
          "px-5 py-4",
          // Typography
          "text-sm font-normal text-foreground leading-relaxed",
          "placeholder:text-muted-foreground",
          // Surface + border
          "bg-background border border-input",
          // Focus
          "focus-visible:outline-none",
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
          // Transition
          "transition-[border-color,box-shadow] duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
          // States
          "disabled:cursor-not-allowed disabled:opacity-40",
          // Resize
          "resize-y",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
