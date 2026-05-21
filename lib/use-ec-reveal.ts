/**
 * useEcReveal
 * ─────────────────────────────────────────────────────────────────────────
 * Shared GSAP ScrollTrigger fade-up hook for all sections.
 * Replaces .reveal / .ps-reveal / .text-slide / .si-heading / .inv-reveal
 * with a single .ec-reveal class + this one hook.
 *
 * Usage:
 *   const ref = useEcReveal()
 *   <section ref={ref}> … <div className="ec-reveal"> … </div> … </section>
 */

import { useRef, useEffect, RefObject } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface EcRevealOptions {
  start?: string
  stagger?: number
  duration?: number
  y?: number
}

export function useEcReveal<T extends HTMLElement = HTMLDivElement>(
  options?: EcRevealOptions
): RefObject<T> {
  const ref = useRef<T>(null)

  // options are intentionally stable mount-time config values —
  // capturing them once is correct and intentional.
  const start    = options?.start    ?? 'top 68%'
  const stagger  = options?.stagger  ?? 0.12
  const duration = options?.duration ?? 0.9

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const els = (ref.current as HTMLElement).querySelectorAll('.ec-reveal')
      if (!els.length) return
      gsap.to(els, {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start,
          once: true,
        },
      })
    }, ref)
    return () => ctx.revert()
  }, []) // mount-only: options don't change after first render
  /* eslint-enable react-hooks/exhaustive-deps */

  return ref
}
