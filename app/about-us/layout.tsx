import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about ECOCAN's mission to create Africa's circular bottle ecosystem, fighting counterfeits and driving recycling across East Africa.",
  openGraph: {
    title: "About ECOCAN",
    description:
      "Our mission: a circular economy that rewards every bottle returned and eliminates fake drinks from African markets.",
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
