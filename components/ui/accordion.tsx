"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Accordion — Ecocan design system
 *
 * Styled to match the FAQ section from the Kimi spec:
 *   - Trigger text uses section-body sizing (18px, 0.7 opacity)
 *   - Chevron is primary green, rotates 180° on open
 *   - Content panel has a smooth height transition via Radix CSS variables
 *   - Focus ring uses primary green ring (matches globals.css --ring)
 *   - No background on trigger — separator lines provide structure
 */
const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-border last:border-0", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        // Layout
        "flex flex-1 items-center justify-between",
        "py-5 pr-1 text-left",
        // Typography — matches .section-body
        "text-[18px] font-medium leading-snug text-foreground",
        // Interaction
        "transition-[color] duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
        "hover:text-primary",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        // Chevron rotate
        "[&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className="h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
        aria-hidden="true"
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div
      className={cn(
        "pb-5 pt-1 text-[16px] leading-relaxed text-muted-foreground",
        className
      )}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
