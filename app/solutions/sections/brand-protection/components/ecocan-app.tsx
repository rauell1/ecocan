import Image from "next/image";
import React from "react";
import ScanqrPopup from "@/components/shared/scan-qr";


export default function EcocanApp() {
  return (
    <section id="ecocan-app" className="space-y-12 border py-24">
      <div className="text-center space-y-4">
        <h2 className="text-3xl lg:text-5xl font-medium">EcocanApp</h2>
        <p className="text-secondary lg:w-4/5 xl:w-1/2 mx-auto lg:text-xl">
          EcocanApp is our proprietary,{" "}
          <span className="font-bold">free to use</span> mobile application,
          enabling ECOnsumers to easily and reliably verify genuine products. By
          simply scanning the{" "}
          <span className="font-bold">ECOCAN Security codes</span> printed onto
          eligible products&apos; packaging. To guarantee their authenticity
        </p>
      </div>
      <div className="text-center relative">
        <Image
          src="/assets/images/solutions/mobile-block.svg"
          alt="ecocan mobile app on ios"
          width={1110}
          height={100}
          className="mx-auto w-[69.375rem] h-full hidden md:block"
        />
        <ScanqrPopup
          className="md:absolute bottom-4 lg:bottom-8 lg:left-1/2 md:-translate-x-[5.125rem] hover:bg-primary bg-primary text-sm lg:text-base text-white hover:text-white no-underline px-8"
          join="Download App"
        />
      </div>
    </section>
  );
}
