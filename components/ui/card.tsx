import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/**
 * Card — Ecocan design system
 *
 * Variants:
 *   default      → white surface, subtle border, soft shadow (light sections)
 *   glass        → semi-transparent white bg, white border (dark / hero sections)
 *   glass-light  → high-opacity white bg, translucent border (light overlay sections)
 *   elevated     → white surface, stronger shadow, no border
 *   flat         → surface bg, no shadow, hairline border (dense lists / data)
 *
 * Border-radius tokens:
 *   The outer card always uses rounded-3xl (24px).
 *   Inner padded content naturally creates the correct nested-radius relationship.
 *
 * NO colored side-borders — status is communicated via badges/text, not painted edges.
 */
const cardVariants = cva(
  "flex flex-col rounded-3xl overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-card border border-border shadow-card text-card-foreground",
        glass:
          "glass-card text-white",
        "glass-light":
          "glass-card-light text-eco-dark",
        elevated:
          "bg-card shadow-elevated text-card-foreground",
        flat:
          "bg-secondary border border-border text-secondary-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant }), className)}
      {...props}
    />
  )
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl font-semibold leading-tight tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-[15px] leading-relaxed text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center gap-3 p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  cardVariants,
}
