import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Card  -  token-hardened surface component.
 * Variants: default surface, elevated, glass (Kimi-spec glassmorphism).
 */

// ─── Base Card ───────────────────────────────────────────────────────────────

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "elevated" | "glass" | "outline"
  }
>(({ className, variant = "default", ...props }, ref) => {
  const variantClasses = {
    default: "bg-card text-card-foreground shadow-card border border-border/40 rounded-smooth",
    elevated:
      "bg-card text-card-foreground shadow-elevated border border-border/20 rounded-smooth-lg",
    /**
     * Glass  -  Kimi spec GlassCard.
     * Semi-transparent white background, backdrop blur, white border.
     * Designed for use over dark / image / gradient backgrounds.
     */
    glass:
      "bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-smooth-lg shadow-lg",
    outline: "bg-transparent border border-border rounded-smooth text-card-foreground",
  }[variant]

  return (
    <div
      ref={ref}
      className={cn("transition-all duration-200", variantClasses, className)}
      {...props}
    />
  )
})
Card.displayName = "Card"

// ─── Card Header ─────────────────────────────────────────────────────────────

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  )
)
CardHeader.displayName = "CardHeader"

// ─── Card Title ──────────────────────────────────────────────────────────────

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-xl font-semibold leading-tight tracking-tight", className)}
      {...props}
    />
  )
)
CardTitle.displayName = "CardTitle"

// ─── Card Description ────────────────────────────────────────────────────────

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm leading-relaxed text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

// ─── Card Content ────────────────────────────────────────────────────────────

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
)
CardContent.displayName = "CardContent"

// ─── Card Footer ─────────────────────────────────────────────────────────────

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  )
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
