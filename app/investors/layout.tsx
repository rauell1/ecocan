import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Circular Waste Infrastructure & Green ESG Bonds | ECOCAN Investors",
  description:
    "Partner with ECOCAN to fund and scale East Africa's leading deposit return circular economy networks. Download our B2B pitch deck, explore verified circularity bonds, and view regional expansion plans.",
  openGraph: {
    title: "ECOCAN Investors Portal | Circular Waste Logistics",
    description:
      "Deploying high-impact circular infrastructure across Kenya and East Africa. Access investment metrics, ESG circularity returns, and complete pitch details.",
  },
}

export default function InvestorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
