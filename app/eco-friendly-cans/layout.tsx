import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Eco-Friendly Cans",
  description:
    "ECOCAN's aluminium can program - traceable, recyclable, and integrated into Africa's deposit return system.",
  openGraph: {
    title: "Eco-Friendly Cans | ECOCAN",
    description: "Every aluminium can in the ECOCAN system is traceable, recyclable, and rewarded.",
  },
}

export default function EcoFriendlyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
