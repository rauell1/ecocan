import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore ECOCAN solutions led by consumer recycling outcomes in Kenya, with additional tools for brands, retailers, and investors.",
  openGraph: {
    title: "ECOCAN Solutions",
    description:
      "From consumer recycling journeys to anti-counterfeit protection and DRS infrastructure for every stakeholder.",
  },
}

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
