"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"

/**
 * Tabs — Ecocan design system
 *
 * Visual pattern: underline-indicator tabs (not pill/background tabs).
 * This is cleaner for content-heavy pages (solutions, about-us).
 *
 * - TabsList: borderless row, no background pill container
 * - TabsTrigger: transparent bg, active state = primary green underline
 * - TabsContent: standard fade-in via Radix data-state animation
 *
 * The active indicator is a 2px bottom border on the trigger itself,
 * using the primary color. Inactive triggers use muted-foreground.
 */
const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex items-end gap-0 border-b border-border w-full",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      // Layout
      "inline-flex items-center justify-center px-4 py-3",
      // Typography
      "text-sm font-semibold whitespace-nowrap",
      // Default colour
      "text-muted-foreground",
      // Active state — underline via border-bottom
      "border-b-2 border-transparent -mb-px",
      "data-[state=active]:border-primary data-[state=active]:text-primary",
      // Interaction
      "hover:text-foreground",
      "transition-[color,border-color] duration-[180ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
      // Focus
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
      "disabled:pointer-events-none disabled:opacity-40",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-6",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
