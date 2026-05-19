import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import HomeNavbar from "@/components/sections/home-navbar"

let pathname = "/"

vi.mock("next/image", () => ({
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}))

vi.mock("next/link", () => ({
  default: ({ href, children, ...props }: { href: string; children: React.ReactNode }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}))

vi.mock("next/navigation", () => ({
  usePathname: () => pathname,
}))

describe("HomeNavbar", () => {
  it("updates aria-expanded as the mobile menu toggles", async () => {
    render(<HomeNavbar />)

    const menuButton = screen.getByRole("button", { name: /open menu/i })
    expect(menuButton).toHaveAttribute("aria-expanded", "false")

    fireEvent.click(menuButton)

    expect(menuButton).toHaveAttribute("aria-expanded", "true")
    expect(screen.getByRole("dialog", { name: /site navigation/i })).toBeInTheDocument()
  })

  it("closes the mobile menu on outside click", async () => {
    render(<HomeNavbar />)

    const menuButton = screen.getByRole("button", { name: /open menu/i })
    fireEvent.click(menuButton)

    fireEvent.mouseDown(document.body)

    await waitFor(() => {
      expect(menuButton).toHaveAttribute("aria-expanded", "false")
    })
  })

  it("closes the mobile menu when the route changes", async () => {
    const { rerender } = render(<HomeNavbar />)

    const menuButton = screen.getByRole("button", { name: /open menu/i })
    fireEvent.click(menuButton)

    pathname = "/about-us"
    rerender(<HomeNavbar />)

    await waitFor(() => {
      expect(menuButton).toHaveAttribute("aria-expanded", "false")
    })

    pathname = "/"
  })
})
