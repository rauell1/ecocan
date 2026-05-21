import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ECOCAN Market",
  description:
    "Browse verified drinks and recyclable products for Kenyan consumers on ECOCAN Market, with clear deposit-return eligibility.",
  openGraph: {
    title: "ECOCAN Market",
    description:
      "Find safe drinks and recycling-eligible products connected to ECO-Stations and consumer rewards in Kenya.",
  },
}

export default function MarketLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
