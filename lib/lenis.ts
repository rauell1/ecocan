/**
 * lib/lenis.ts
 * ============
 * Lenis smooth-scroll singleton + GSAP ScrollTrigger sync.
 *
 * Usage
 * -----
 * Call `initLenis()` ONCE after the hero transition completes (the scroll lock
 * is removed). The returned cleanup function should be called on unmount.
 *
 * import { initLenis } from '@/lib/lenis'
 *
 * // Inside your orchestration component (e.g. app/layout.tsx or a client wrapper):
 * const cleanup = initLenis()
 * return () => cleanup()
 *
 * Notes
 * -----
 * - gsap and lenis are both runtime deps added in Layer 1.
 * - ScrollTrigger.refresh() must be called by the caller after initLenis()
 *   if any ScrollTrigger instances were created before Lenis was ready.
 * - This file is intentionally side-effect free on import; nothing runs
 *   until initLenis() is explicitly called.
 */

import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let lenisInstance: Lenis | null = null

export function initLenis(): () => void {
  if (lenisInstance) {
    // Already initialised — return a no-op cleanup to avoid double-init.
    return () => {}
  }

  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })

  // Feed Lenis scroll position into GSAP ticker so ScrollTrigger
  // receives the smoothed value — this must be set up exactly once.
  lenisInstance.on('scroll', () => ScrollTrigger.update())

  const rafCallback = (time: number) => {
    lenisInstance?.raf(time * 1000)
  }

  gsap.ticker.add(rafCallback)
  gsap.ticker.lagSmoothing(0)

  return () => {
    gsap.ticker.remove(rafCallback)
    lenisInstance?.destroy()
    lenisInstance = null
  }
}

export function getLenis(): Lenis | null {
  return lenisInstance
}
