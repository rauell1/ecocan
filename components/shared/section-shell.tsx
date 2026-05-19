/**
 * SectionShell
 * ─────────────────────────────────────────────────────────────────────────
 * Wraps every section with:
 *   • Consistent vertical padding  (--py-section)
 *   • Consistent max-width + px    (--max-w-site / --px-site)
 *   • Background variant           ('light' | 'white' | 'alt' | 'dark')
 *   • Optional className passthrough for section-specific overrides
 *
 * SectionOverline
 * ─────────────────────────────────────────────────────────────────────────
 * Renders the standard pill-less overline with a 2px lead bar.
 */

import { ReactNode } from 'react'

type Variant = 'light' | 'white' | 'alt' | 'dark'

interface SectionShellProps {
  id?: string
  variant?: Variant
  /** skip the inner .site-container (for full-bleed sections) */
  noContainer?: boolean
  className?: string
  children: ReactNode
  sectionRef?: React.RefObject<HTMLDivElement>
}

const variantClass: Record<Variant, string> = {
  light: 'section-light',
  white: 'section-white',
  alt:   'section-alt',
  dark:  'section-dark',
}

export function SectionShell({
  id,
  variant = 'light',
  noContainer = false,
  className = '',
  children,
  sectionRef,
}: SectionShellProps) {
  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative w-full overflow-hidden section-py ${
        variantClass[variant]
      } ${className}`}
    >
      {noContainer ? (
        children
      ) : (
        <div className="site-container">{children}</div>
      )}
    </section>
  )
}

interface OverlineProps {
  children: ReactNode
  inv?: boolean
}

export function SectionOverline({ children, inv = false }: OverlineProps) {
  return (
    <p className={`section-overline ${inv ? 'section-overline-inv' : ''}`}>
      {children}
    </p>
  )
}
