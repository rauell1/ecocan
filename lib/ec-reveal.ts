/**
 * ecReveal — canonical GSAP scroll-reveal helper.
 *
 * Call once per section inside a gsap.context() to animate all .ec-reveal
 * children with the site-wide timing from design-tokens.css.
 *
 * Usage:
 *   import { ecReveal } from '@/lib/ec-reveal'
 *   const ctx = gsap.context(() => { ecReveal(sectionRef.current) }, sectionRef)
 */
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export interface EcRevealOptions {
  /** Root element to query .ec-reveal children from. Defaults to sectionRef itself. */
  root?: Element | null
  /** ScrollTrigger start. Default: 'top 72%' */
  start?: string
  /** Duration in seconds. Default: 0.9 */
  duration?: number
  /** Stagger between siblings in seconds. Default: 0.12 */
  stagger?: number
  /** Y-offset to start from in px. Default: 32 */
  fromY?: number
  /** Blur in px. Default: 6 */
  blur?: number
}

export function ecReveal(
  root: Element | null | undefined,
  options: EcRevealOptions = {}
) {
  if (!root) return

  const {
    start    = 'top 72%',
    duration = 0.9,
    stagger  = 0.12,
    fromY    = 32,
    blur     = 6,
  } = options

  const els = root.querySelectorAll('.ec-reveal')
  if (!els.length) return

  gsap.fromTo(
    els,
    { opacity: 0, y: fromY, filter: `blur(${blur}px)` },
    {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration,
      stagger,
      ease: 'power3.out',
      scrollTrigger: { trigger: root, start, once: true },
    }
  )
}
