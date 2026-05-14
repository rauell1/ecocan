"use client"

import React, { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps {
  children: React.ReactNode
  showArrow?: boolean
  onPageChange?: (pageIndex: number) => void
  currentPage: number
  setCurrentPage: (page: number) => void
  autoScrollInterval?: number
  autoScroll?: boolean
  enableScrollTracking?: boolean
}

const variants = {
  enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 72 : -72 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -72 : 72 }),
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  onPageChange,
  currentPage,
  setCurrentPage,
  autoScrollInterval = 5000,
  autoScroll = true,
  enableScrollTracking = true,
}) => {
  const [isPaused, setIsPaused] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [direction, setDirection] = useState<1 | -1>(1)
  const pages = React.Children.toArray(children)
  const scrollTimeout = useRef<NodeJS.Timeout>()
  const lastScrollTime = useRef<number>(0)

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentPage) return
      setDirection(index > currentPage ? 1 : -1)
      setIsTransitioning(true)
      setCurrentPage(index)
      onPageChange?.(index)
      setTimeout(() => setIsTransitioning(false), 600)
    },
    [currentPage, isTransitioning, setCurrentPage, onPageChange]
  )

  const nextPage = useCallback(() => {
    if (currentPage < pages.length - 1) goTo(currentPage + 1)
  }, [currentPage, pages.length, goTo])

  const prevPage = useCallback(() => {
    if (currentPage > 0) goTo(currentPage - 1)
  }, [currentPage, goTo])

  // Wheel scroll: advance page when at top/bottom of current slide content
  const handleScroll = useCallback(
    (event: WheelEvent) => {
      const now = Date.now()
      const content = document.querySelector(".carousel-content") as HTMLElement
      if (!content) return
      if (isTransitioning) {
        event.preventDefault()
        return
      }
      if (now - lastScrollTime.current < 600) {
        event.preventDefault()
        return
      }
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current)

      const atTop = content.scrollTop <= 0
      const atBottom = Math.abs(content.scrollHeight - content.scrollTop - content.clientHeight) < 1

      scrollTimeout.current = setTimeout(() => {
        if (event.deltaY > 0 && atBottom) {
          nextPage()
          lastScrollTime.current = now
        } else if (event.deltaY < 0 && atTop) {
          prevPage()
          lastScrollTime.current = now
        }
      }, 50)
    },
    [nextPage, prevPage, isTransitioning]
  )

  useEffect(() => {
    if (!enableScrollTracking) return
    window.addEventListener("wheel", handleScroll, { passive: false })
    return () => {
      window.removeEventListener("wheel", handleScroll)
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current)
    }
  }, [handleScroll, enableScrollTracking])

  // Auto-advance
  useEffect(() => {
    if (!autoScroll || isPaused) return
    const id = setInterval(nextPage, autoScrollInterval)
    return () => clearInterval(id)
  }, [autoScroll, isPaused, nextPage, autoScrollInterval])

  const isFirst = currentPage === 0
  const isLast = currentPage === pages.length - 1

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/*
       * PRELOAD ZONE — every non-active slide is rendered here at full
       * viewport dimensions but completely invisible. This forces the
       * browser to fetch every image (Next.js <Image>, CSS background-image,
       * SVGs) before the user ever swipes to that slide.
       *
       * opacity:0  → images load (unlike display:none which skips them)
       * pointer-events:none + z-index:-1 → completely non-interactive
       * position:absolute inset:0 → full dimensions so images size correctly
       */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        {pages.map((page, i) =>
          i !== currentPage ? (
            <div key={`preload-${i}`} style={{ position: "absolute", inset: 0, opacity: 0 }}>
              {page}
            </div>
          ) : null
        )}
      </div>

      {/* Active slide with direction-aware slide-fade animation */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentPage}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
          className="carousel-content w-full overflow-y-auto"
        >
          {pages[currentPage]}
        </motion.div>
      </AnimatePresence>

      {/* ── Left arrow ─────────────────────────────────────────────────── */}
      <button
        onClick={prevPage}
        disabled={isFirst || isTransitioning}
        aria-label="Previous slide"
        className="fixed left-3 top-1/2 z-[1000] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 text-gray-800 shadow-xl backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white hover:shadow-2xl disabled:pointer-events-none disabled:opacity-0 md:left-5"
      >
        <ChevronLeft size={22} strokeWidth={2.2} />
      </button>

      {/* ── Right arrow ────────────────────────────────────────────────── */}
      <button
        onClick={nextPage}
        disabled={isLast || isTransitioning}
        aria-label="Next slide"
        className="fixed right-3 top-1/2 z-[1000] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 text-gray-800 shadow-xl backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:bg-white hover:shadow-2xl disabled:pointer-events-none disabled:opacity-0 md:right-5"
      >
        <ChevronRight size={22} strokeWidth={2.2} />
      </button>

      {/* ── Dot navigation ─────────────────────────────────────────────── */}
      <div className="fixed bottom-6 left-0 right-0 z-[999] flex items-center justify-center">
        <div className="flex items-center gap-1.5 rounded-full bg-black/20 px-3 py-2 backdrop-blur-sm">
          {pages.map((_, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentPage === index ? "true" : "false"}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentPage === index ? "w-8 bg-green-400" : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel
