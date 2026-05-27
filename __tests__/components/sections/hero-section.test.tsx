import { describe, it, expect, beforeAll, afterAll, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import HeroSection from "@/components/sections/hero-section"

vi.mock("gsap", () => ({
  gsap: {
    registerPlugin: vi.fn(),
    context: (cb: () => void) => {
      cb()
      return { revert: vi.fn() }
    },
    fromTo: vi.fn(),
    set: vi.fn(),
    timeline: () => ({
      fromTo() {
        return this
      },
    }),
    utils: { toArray: () => [] },
  },
}))

vi.mock("gsap/ScrollTrigger", () => ({
  ScrollTrigger: {
    refresh: vi.fn(),
    getAll: vi.fn(() => []),
  },
}))

describe("HeroSection video setup", () => {
  const playSpy = vi.spyOn(HTMLMediaElement.prototype, "play")

  beforeAll(() => {
    playSpy.mockResolvedValue(undefined)

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query: string) => ({
        matches: query === "(prefers-reduced-motion: reduce)" ? false : false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    })
  })

  afterAll(() => {
    playSpy.mockRestore()
  })

  it("renders responsive autoplay video sources with fallback poster", () => {
    const { container } = render(<HeroSection onTransitionComplete={vi.fn()} />)

    const video = container.querySelector("video")
    expect(video).toBeInTheDocument()
    expect(video).toHaveAttribute("autoplay")
    expect(video).toHaveAttribute("muted")
    expect(video).toHaveAttribute("playsinline")
    expect(video).toHaveAttribute("preload", "metadata")
    expect(video).toHaveAttribute("poster", "/images/scan-verify.jpg")

    const sources = Array.from(video!.querySelectorAll("source")).map((source) => ({
      src: source.getAttribute("src"),
      media: source.getAttribute("media"),
    }))

    expect(sources).toEqual(
      expect.arrayContaining([
        { src: "/videos/circular-loop.mp4", media: "(max-width: 767px)" },
        { src: "/videos/hero-loop.mp4", media: "(min-width: 768px)" },
      ])
    )

    expect(screen.getByAltText(/scan and verify preview/i)).toBeInTheDocument()
  })
})
