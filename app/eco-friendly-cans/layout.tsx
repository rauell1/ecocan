import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Eco-Friendly Cans",
  description:
    "Learn how ECOCAN smart cans in Kenya help shoppers recycle faster, prevent counterfeit returns, and unlock rewards.",
  openGraph: {
    title: "Eco-Friendly Cans | ECOCAN",
    description:
      "Every ECOCAN return point is built for secure bottle recovery, cleaner communities, and consumer rewards.",
  },
}

export default function EcoFriendlyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
