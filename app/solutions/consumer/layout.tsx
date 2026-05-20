import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Consumer Recycling Journey",
  description:
    "Use ECOCAN in Kenya to verify safe drinks, return empties at ECO-Stations, and earn recycling rewards to your wallet.",
  openGraph: {
    title: "ECOCAN Consumer Journey",
    description:
      "Scan, verify, recycle, and earn with ECOCAN. Built for Kenyan shoppers who want safe drinks and cleaner communities.",
  },
}

export default function ConsumerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
