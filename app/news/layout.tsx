import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "News",
  description:
    "Latest news and updates from ECOCAN - funding rounds, partnerships, electric mobility launches, and expansion across East Africa.",
  openGraph: {
    title: "ECOCAN News",
    description:
      "Stay up to date with ECOCAN's latest milestones, partnerships, and impact stories.",
  },
}

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
