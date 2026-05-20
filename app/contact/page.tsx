import type { Metadata } from "next"
import ContactHero from "./components/hero"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact ECOCAN Kenya for ECO-Station support, recycling rewards help, counterfeit reporting, or partnership requests.",
  openGraph: {
    title: "Contact ECOCAN",
    description:
      "Need help with bottle returns, safe drink verification, or ECOCAN partnerships in Kenya? Reach out.",
  },
}

export default function Contact() {
  return (
    <>
      <ContactHero />
    </>
  )
}
