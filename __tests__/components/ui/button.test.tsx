import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "@/components/ui/button"

describe("Button component", () => {
  it("renders with default variant", () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole("button", { name: /click me/i })).toBeInTheDocument()
  })

  it("applies outline variant classes", () => {
    render(<Button variant="outline">Outline</Button>)
    const btn = screen.getByRole("button", { name: /outline/i })
    expect(btn).toHaveClass("border")
  })

  it("is disabled when disabled prop is set", () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole("button", { name: /disabled/i })).toBeDisabled()
  })

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup()
    let clicked = false
    render(
      <Button
        onClick={() => {
          clicked = true
        }}
      >
        Click
      </Button>
    )
    await user.click(screen.getByRole("button", { name: /click/i }))
    expect(clicked).toBe(true)
  })

  it("renders as child element when asChild is set", () => {
    render(
      <Button asChild>
        <a href="/download">Download</a>
      </Button>
    )
    expect(screen.getByRole("link", { name: /download/i })).toBeInTheDocument()
  })
})
