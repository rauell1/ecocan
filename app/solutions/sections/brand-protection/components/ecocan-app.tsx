import CheckList from "@/components/contents/consumer/components/checklist";
import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import { ecocanMobile } from "@/lib/imageIndex";
import Image from "next/image";
import React from "react";
import EcocanAppFeatures from "./ecocan-app-features";
import { Nunito_Sans } from "next/font/google";
import PrimaryButton from "@/components/shared/primary-btn";
import ScanqrPopup from "@/components/shared/scan-qr";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export default function EcocanApp() {
  return (
    <div className="space-y-12">
      <div className={`text-center space-y-4 ${nunitoSans.className}`}>
        <h2 className="text-3xl font-extrabold">EcocanApp</h2>
        <p className="text-[#2F313F] lg:w-4/5 xl:w-1/2 mx-auto">
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
          alt=""
          width={1000}
          height={100}
          className="mx-auto"
        />
        <ScanqrPopup
          className="md:absolute bottom-4 lg:bottom-8 lg:left-1/2 md:-translate-x-[5.125rem] hover:bg-primary bg-primary text-sm lg:text-base text-white hover:text-white no-underline px-8"
          join="Download App"
        />
      </div>
    </div>
  );
}
