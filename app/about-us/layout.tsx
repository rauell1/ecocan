import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team building a consumer-first recycling movement in Kenya with safer drinks, bottle returns, and ECO-Station rewards.",
  openGraph: {
    title: "About ECOCAN",
    description:
      "Our mission in Kenya: reward every returned bottle and help families avoid counterfeit drinks.",
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
