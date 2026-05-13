import Image from "next/image"
import React from "react"
import ScanqrPopup from "@/components/shared/scan-qr"
import AppStoreButton from "@/components/shared/download-app"
import { LucideDownload } from "lucide-react"

export default function EcocanApp() {
  return (
    <section id="ecocan-app" className="space-y-12 border py-24">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-medium lg:text-5xl">EcocanApp</h2>
        <p className="mx-auto text-muted-foreground lg:w-4/5 lg:text-xl xl:w-1/2">
          EcocanApp is our proprietary, <span className="font-bold">free to use</span> mobile
          application, enabling ECOnsumers to easily and reliably verify genuine products. By simply
          scanning the <span className="font-bold">ECOCAN Security codes</span> printed onto
          eligible products&apos; packaging. To guarantee their authenticity
        </p>
      </div>
      <div className="relative text-center">
        <Image
          src="/assets/images/solutions/mobile-block.svg"
          alt="ecocan mobile app on ios"
          width={1110}
          height={100}
          className="mx-auto hidden h-full w-[69.375rem] md:block"
        />
        <AppStoreButton
          className="bottom-4 bg-primary px-8 text-sm text-white no-underline hover:bg-primary hover:text-white md:absolute md:-translate-x-[5.125rem] lg:bottom-8 lg:left-1/2 lg:hidden lg:text-base"
          playStoreUrl="https://play.google.com/store/apps/details?id=com.superapp.ecocanapp"
          appStoreUrl="https://apps.apple.com/app/6502695438"
        />
        <ScanqrPopup
          join="Download App"
          arrow={<LucideDownload className="ml-4" />}
          className="bottom-4 hidden bg-primary px-8 text-sm text-white no-underline hover:bg-primary hover:text-white md:absolute md:-translate-x-[5.125rem] lg:bottom-8 lg:left-1/2 lg:flex lg:text-base"
        />
      </div>
    </section>
  )
}
