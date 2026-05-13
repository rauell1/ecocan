import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Input  -  token-hardened.
 * Focus ring uses primary token. Border adapts to dark mode via --input CSS var.
 * 16px font-size prevents iOS auto-zoom on focus.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          // Layout
          "flex h-10 w-full rounded-[var(--radius)] px-3 py-2",
          // Typography  -  16px minimum prevents iOS zoom
          "text-base md:text-sm",
          // Colours
          "border border-input bg-background text-foreground",
          "placeholder:text-muted-foreground",
          // Focus  -  primary ring
          "focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          // States
          "disabled:cursor-not-allowed disabled:opacity-50",
          // File input reset
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          // Transition
          "transition-colors duration-150",
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
