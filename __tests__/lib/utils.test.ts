import { describe, it, expect } from "vitest"
import { cn } from "@/lib/utils"

describe("cn (class utility)", () => {
  it("merges class strings", () => {
    expect(cn("foo", "bar")).toBe("foo bar")
  })

  it("handles conditional classes", () => {
    expect(cn("base", false && "hidden", "visible")).toBe("base visible")
  })

  it("deduplicates Tailwind conflicting classes", () => {
    // tailwind-merge resolves conflicts — last one wins
    expect(cn("p-4", "p-8")).toBe("p-8")
  })

  it("handles undefined and null gracefully", () => {
    expect(cn("base", undefined, null as unknown as string)).toBe("base")
  })
})
