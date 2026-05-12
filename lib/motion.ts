import gsap from "gsap"

export const motionTokens = {
  ease: "power3.out",
  duration: {
    xs: 0.18,
    sm: 0.28,
    md: 0.45,
    lg: 0.72,
  },
  stagger: {
    tight: 0.04,
    base: 0.08,
    loose: 0.14,
  },
} as const

export const fadeUp = {
  from: { autoAlpha: 0, y: 24 },
  to: {
    autoAlpha: 1,
    y: 0,
    duration: motionTokens.duration.md,
    ease: motionTokens.ease,
  },
} as const

export function createLenisOptions() {
  return {
    duration: 1.05,
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 0.9,
    touchMultiplier: 1,
  }
}

export function animateIn(target: gsap.TweenTarget, vars?: gsap.TweenVars) {
  return gsap.fromTo(
    target,
    fadeUp.from,
    {
      ...fadeUp.to,
      ...vars,
    }
  )
}
