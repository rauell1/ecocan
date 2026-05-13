import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ECOCAN Market",
  description:
    "The ECOCAN marketplace connecting ECO-Stations, producers, and consumers across East Africa's circular economy.",
  openGraph: {
    title: "ECOCAN Market",
    description:
      "Discover how ECOCAN connects buyers, sellers, and recyclers in one circular marketplace.",
  },
}

export default function MarketLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
