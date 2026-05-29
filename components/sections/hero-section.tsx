"use client"

import { useRef, useEffect } from "react"

interface HeroSectionProps {
  onTransitionComplete: () => void
}

export default function HeroSection({ onTransitionComplete }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  /* ── Lenis init signal ───────────────────────────────────── */
  useEffect(() => {
    const t = setTimeout(onTransitionComplete, 300)
    return () => clearTimeout(t)
  }, [onTransitionComplete])

  /* ── Autoplay with interaction fallback ─────────────────── */
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    video.playsInline = true
    video.defaultMuted = true

    const play = () =>
      video.play().catch(() => {
        /* silently ignore */
      })
    play()

    const onInteract = () => play()
    window.addEventListener("touchstart", onInteract, { passive: true, once: true })
    window.addEventListener("mousedown", onInteract, { passive: true, once: true })

    return () => {
      window.removeEventListener("touchstart", onInteract)
      window.removeEventListener("mousedown", onInteract)
    }
  }, [])

  return (
    <div id="hero" className="relative w-full overflow-hidden" style={{ height: "72dvh" }}>
      <video
        ref={videoRef}
        src="/videos/hero-loop.mp4"
        poster="/images/scan-verify.jpg"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          /* GPU compositing — prevents blank-out on Safari/iOS */
          transform: "translateZ(0)",
          WebkitTransform: "translateZ(0)",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      />

      {/* Subtle bottom fade — blends into the dark content section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%]"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, var(--c-bg) 100%)",
        }}
      />
    </div>
  )
}
