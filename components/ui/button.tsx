import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Button — Ecocan design system
 *
 * Variants mirror the Kimi spec's .pill-btn-* classes from globals.css:
 *   filled   → green filled pill (primary CTA)
 *   outline  → green border pill (secondary CTA)
 *   ghost    → no background, green text (tertiary)
 *   white    → white bg, dark text (on dark/hero sections)
 *   destructive → red pill
 *
 * Sizes:
 *   default → 14px / 48px tall (standard CTA)
 *   sm      → 13px / 36px (compact UI)
 *   lg      → 16px / 56px (hero CTA)
 *   icon    → 44×44px square (touch-safe icon-only)
 *
 * Transitions: only bg-color, color, box-shadow, border-color animated.
 * NO transition:all — animating layout properties causes main-thread jank.
 */
const buttonVariants = cva(
  // Base — always applied
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-full font-semibold",
    "transition-[background-color,color,box-shadow,border-color]",
    "duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-40",
    "whitespace-nowrap select-none",
  ].join(" "),
  {
    variants: {
      variant: {
        /** Green filled — primary CTA */
        filled:
          "bg-primary text-primary-foreground hover:bg-primary-dark hover:shadow-glow",
        /** Green outline — secondary CTA */
        outline:
          "border border-primary text-primary bg-transparent hover:bg-primary hover:text-primary-foreground",
        /** Ghost — tertiary / nav links */
        ghost:
          "bg-transparent text-primary hover:bg-primary/10",
        /** White — for hero / dark-background sections */
        white:
          "bg-white text-eco-dark hover:shadow-glow",
        /** Destructive — delete / irreversible actions */
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        /** Link — looks like a hyperlink */
        link:
          "bg-transparent text-primary underline-offset-4 hover:underline px-0",
      },
      size: {
        default: "h-12 px-8 text-sm",
        sm: "h-9 px-5 text-[13px]",
        lg: "h-14 px-10 text-base",
        icon: "h-11 w-11 p-0 flex-shrink-0",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Render as child element (e.g. wrap a Next.js <Link>) */
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
