import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Discover ECOCAN's solutions for brands, retailers, and producers - anti-counterfeiting, deposit return systems, and sustainable packaging.",
  openGraph: {
    title: "ECOCAN Solutions",
    description:
      "From DRS integration to anti-counterfeit QR codes - ECOCAN solutions for every stakeholder in the value chain.",
  },
}

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
