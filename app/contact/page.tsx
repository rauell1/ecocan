import type { Metadata } from "next"
import ContactHero from "./components/hero"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the ECOCAN team. Partner with us, bring ECOCAN to your market, or ask about our deposit return system.",
  openGraph: {
    title: "Contact ECOCAN",
    description: "Partner with ECOCAN or ask us anything about our circular bottle ecosystem.",
  },
}

export default function Contact() {
  return (
    <>
      <ContactHero />
    </>
  )
}
