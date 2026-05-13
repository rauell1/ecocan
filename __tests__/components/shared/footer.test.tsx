import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import Footer from "@/components/shared/footer/footer"

// Next.js Image requires a mock in jsdom
vi.mock("next/image", () => ({
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}))

// Next.js Link mock
vi.mock("next/link", () => ({
  default: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href}>{children}</a>
  ),
}))

describe("Shared Footer", () => {
  it("renders the footer element", () => {
    render(<Footer />)
    expect(screen.getByRole("contentinfo")).toBeInTheDocument()
  })

  it("contains the ECOCAN logo", () => {
    render(<Footer />)
    expect(screen.getByAltText(/ecocan logo/i)).toBeInTheDocument()
  })

  it("renders navigation links", () => {
    render(<Footer />)
    // Footer should have multiple anchor links
    const links = screen.getAllByRole("link")
    expect(links.length).toBeGreaterThan(3)
  })
})
