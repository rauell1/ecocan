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

export function useEcReveal<T extends HTMLElement = HTMLDivElement>(
  options?: {
    start?: string
    stagger?: number
    duration?: number
    y?: number
  }
): RefObject<T> {
  const ref = useRef<T>(null)

  // Options are intentionally excluded from the dep array — they are
  // configuration values passed at mount time and do not change.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const els = (ref.current as HTMLElement).querySelectorAll('.ec-reveal')
      if (!els.length) return
      gsap.to(els, {
        opacity: 1,
        y: 0,
        duration:  options?.duration ?? 0.9,
        stagger:   options?.stagger  ?? 0.12,
        ease:      'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start:   options?.start ?? 'top 68%',
          once:    true,
        },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return ref
}
