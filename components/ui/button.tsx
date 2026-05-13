"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Button  -  token-hardened, animation-ready.
 * Variants align with Ecocan design tokens + Kimi spec PillButton shape.
 * 'pill' size variant = Kimi PillButton (rounded-full, px-6).
 */
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap font-medium",
    "transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:scale-[0.97]",
  ].join(" "),
  {
    variants: {
      variant: {
        /** Primary CTA  -  solid eco-green */
        default:
          "bg-primary text-primary-foreground hover:bg-primary-dark shadow-sm hover:shadow-md",
        /** Destructive / danger */
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        /** Outlined  -  border uses input token so it adapts to dark mode */
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        /** Secondary surface */
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        /** Ghost  -  no background until hover */
        ghost: "hover:bg-accent hover:text-accent-foreground",
        /** Inline text link */
        link: "text-primary underline-offset-4 hover:underline p-0 h-auto",
        /**
         * Glass  -  Kimi-spec glassmorphism CTA variant.
         * backdrop-blur + semi-transparent white border.
         * Works on dark/coloured backgrounds.
         */
        glass:
          "bg-white/10 border border-white/20 text-white backdrop-blur-md hover:bg-white/20 hover:border-white/30 shadow-lg",
        /**
         * Eco-outline  -  white outlined pill on dark/image backgrounds.
         * Used in hero sections.
         */
        "eco-outline":
          "border-2 border-white/80 text-white bg-transparent hover:bg-white hover:text-eco-dark backdrop-blur-sm",
      },
      size: {
        default: "h-10 rounded-[var(--radius)] px-4 py-2 text-sm",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-11 rounded-md px-8 text-base",
        /** Kimi PillButton  -  full pill shape, prominent padding */
        pill: "h-12 rounded-full px-6 py-3 text-sm font-semibold tracking-wide",
        "pill-lg": "h-14 rounded-full px-8 py-4 text-base font-semibold tracking-wide",
        icon: "h-10 w-10 rounded-[var(--radius)]",
        "icon-sm": "h-8 w-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
