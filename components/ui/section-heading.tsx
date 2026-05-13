"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * SectionHeading  -  Kimi-spec overline + headline pair.
 *
 * Renders an optional overline (small caps, tracked) above the main heading.
 * Entrance animation is CSS-based (opacity + translateY via Tailwind animate
 * utilities) so it works without GSAP. When GSAP ScrollTrigger is available
 * in a parent, the parent can target `.section-heading` and override.
 *
 * Props:
 *   - overline: small label above the heading (e.g. "How it works")
 *   - heading: main headline text (supports ReactNode for <br /> splits)
 *   - subheading: optional paragraph below the heading
 *   - align: 'left' | 'center' | 'right'
 *   - theme: 'light' | 'dark'  -  adapts text colours for bg context
 *   - size: 'sm' | 'md' | 'lg'  -  heading size scale
 */

interface SectionHeadingProps extends React.HTMLAttributes<HTMLDivElement> {
  overline?: string
  heading: React.ReactNode
  subheading?: React.ReactNode
  align?: "left" | "center" | "right"
  theme?: "light" | "dark"
  size?: "sm" | "md" | "lg"
  as?: "h1" | "h2" | "h3"
}

const sizeClasses = {
  sm: "text-2xl md:text-3xl font-bold leading-tight",
  md: "text-3xl md:text-4xl font-bold leading-tight",
  lg: "text-4xl md:text-5xl font-extrabold leading-tight",
}

const SectionHeading = React.forwardRef<HTMLDivElement, SectionHeadingProps>(
  (
    {
      overline,
      heading,
      subheading,
      align = "left",
      theme = "light",
      size = "md",
      as: HeadingTag = "h2",
      className,
      ...props
    },
    ref
  ) => {
    const isDark = theme === "dark"

    return (
      <div
        ref={ref}
        className={cn(
          "section-heading flex flex-col gap-3",
          align === "center" && "items-center text-center",
          align === "right" && "items-end text-right",
          className
        )}
        {...props}
      >
        {/* Overline  -  typewriter target for GSAP */}
        {overline && (
          <span
            className={cn(
              "section-heading-overline",
              "text-xs font-semibold uppercase tracking-widest",
              isDark ? "text-white/60" : "text-primary"
            )}
          >
            {overline}
          </span>
        )}

        {/* Main heading */}
        <HeadingTag
          className={cn(
            "section-heading-title",
            sizeClasses[size],
            isDark ? "text-white" : "text-foreground"
          )}
        >
          {heading}
        </HeadingTag>

        {/* Subheading */}
        {subheading && (
          <p
            className={cn(
              "section-heading-sub",
              "max-w-2xl text-base leading-relaxed",
              isDark ? "text-white/70" : "text-muted-foreground"
            )}
          >
            {subheading}
          </p>
        )}
      </div>
    )
  }
)
SectionHeading.displayName = "SectionHeading"

export { SectionHeading }
export type { SectionHeadingProps }
