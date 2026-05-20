import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Download the App",
  description:
    "Download EcocanApp in Kenya to verify safe drinks, find nearby ECO-Stations, and earn recycling rewards.",
  openGraph: {
    title: "Download the ECOCAN App",
    description: "Available on iOS and Android in Kenya. Verify, return, and earn with ECOCAN.",
  },
}

export default function DownloadLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
