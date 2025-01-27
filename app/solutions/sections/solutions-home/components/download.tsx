import AppStoreButton from "@/components/shared/download-app";
import PrimaryButton from "@/components/shared/primary-btn";
import ScanqrPopup from "@/components/shared/scan-qr";
import { LucideArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Download() {
  return (
    <div className="max-w-[72rem] xl:mx-auto px-4 lg:ms-4 xl:px-0 bg-[url('/assets/images/solutions/download-bg.svg')] hidden lg:h-[43.75rem] lg:flex flex-col justify-center">
      <div className="ms-10">
        <h1 className="text-white text-5xl font-semibold">
          ECOCAN, your unfair <br />
          advantage
        </h1>
        <AppStoreButton
          className="bg-white hover:bg-white text-primary mt-8 border px-8 no-underline font-medium"
          playStoreUrl="https://play.google.com/store/apps/details?id=com.superapp.ecocanapp"
          appStoreUrl="https://apps.apple.com/app/6502695438"
          showArrow={true}
        />
        <div className="mt-20">
          <Image
            src="/assets/images/solutions/sdgs.svg"
            alt="sdg goals"
            priority
            width={459}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
