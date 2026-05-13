import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Download the App",
  description:
    "Download the ECOCAN app to scan bottles, find your nearest ECO-Station, and earn M-Pesa rewards for recycling.",
  openGraph: {
    title: "Download the ECOCAN App",
    description: "Available on iOS and Android. Scan. Return. Earn. Available now in Kenya.",
  },
}

export default function DownloadLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
