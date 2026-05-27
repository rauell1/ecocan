import { describe, it, expect, beforeAll, afterAll, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import Home from "@/app/page"

vi.mock("lenis", () => ({
  default: class {
    raf() {}
    destroy() {}
  },
}))

vi.mock("@/components/sections/home-navbar", () => ({
  default: () => <div data-testid="home-navbar" />,
}))
vi.mock("@/components/sections/hero-section", () => ({
  default: () => <div data-testid="hero-section" />,
}))
vi.mock("@/components/sections/how-it-works-section", () => ({
  default: () => <div data-testid="how-it-works" />,
}))
vi.mock("@/components/sections/ecocan-model-section", () => ({
  default: () => <div data-testid="ecocan-model" />,
}))
vi.mock("@/components/sections/electric-mobility-section", () => ({
  default: () => <div data-testid="electric-mobility" />,
}))
vi.mock("@/components/sections/for-investors-section", () => ({
  default: () => <div data-testid="investors" />,
}))
vi.mock("@/components/sections/partners-testimonials-section", () => ({
  default: () => <div data-testid="stories" />,
}))
vi.mock("@/components/sections/call-to-action-section", () => ({
  default: () => <div data-testid="cta" />,
}))
vi.mock("@/components/sections/faq-section", () => ({
  default: () => <div data-testid="faq" />,
}))
vi.mock("@/components/sections/home-footer", () => ({
  default: () => <div data-testid="footer" />,
}))

describe("Home page section flags", () => {
  const rafSpy = vi.spyOn(window, "requestAnimationFrame")

  beforeAll(() => {
    rafSpy.mockImplementation(() => 1)
  })

  afterAll(() => {
    rafSpy.mockRestore()
  })

  it("does not render the second scroll magnification section by default", () => {
    render(<Home />)

    expect(screen.getByTestId("how-it-works")).toBeInTheDocument()
    expect(screen.queryByTestId("ecocan-model")).not.toBeInTheDocument()
    expect(screen.getByTestId("electric-mobility")).toBeInTheDocument()
  })
})
