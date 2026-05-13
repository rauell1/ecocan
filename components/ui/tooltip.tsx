"use client"

import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import { cn } from "@/lib/utils"

/**
 * Tooltip - Ecocan design system
 *
 * Styled to match eco.dark surface (#101010) with white text,
 * consistent with the dark sections in the Kimi spec.
 * Slight blur + rounded-xl for the Ecocan glass language.
 * Default delay: 300ms (fast enough to feel responsive).
 */
const TooltipProvider = TooltipPrimitive.Provider

const Tooltip = TooltipPrimitive.Root

const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 6, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      // Surface - eco.dark bg matches dark sections
      "z-50 overflow-hidden rounded-xl",
      "bg-eco-dark text-white",
      // Spacing + typography
      "px-4 py-2 text-[13px] font-medium leading-snug",
      "max-w-[240px]",
      // Shadow
      "shadow-elevated",
      // Enter/exit animations
      "animate-in fade-in-0 zoom-in-95",
      "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
      "data-[side=bottom]:slide-in-from-top-2",
      "data-[side=left]:slide-in-from-right-2",
      "data-[side=right]:slide-in-from-left-2",
      "data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
TooltipContent.displayName = TooltipPrimitive.Content.displayName

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
