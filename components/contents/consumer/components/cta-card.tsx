import PrimaryButton from "@/components/shared/primary-btn";
import { LucideDownload } from "lucide-react";
import Image from "next/image";
import React from "react";
import TextWithComponent from "./text-with-component";
import CtaCard from "@/components/shared/cta-card/cta-card";
import JoinEcommunity from "../../../shared/join-ecommunity";
import ScanqrPopup from "@/components/shared/scan-qr";

export default function CtaCardComponent() {
  return (
    <CtaCard
      className="bg-[url('/assets/images/consumer/consumer-cta-card.jpeg')] py-[3.75rem] px-4 lg:ps-[7.25rem] bg-cover bg-center relative after:absolute after:inset-0 after:content-[''] after:bg-black/90 after:opacity-50 after:-z-10 overflow-hidden z-50"
      item={
        <TextWithComponent
          title={
            <h2 className="text-white text-4xl lg:text-[2.5rem] mb-3">
              Cheers to ECO-
              <br />
              friendly savings!
            </h2>
          }
          description={
            <span className="text-white">
              Only with EcocanApp.
            </span>
          }
          component={
            <div className="flex flex-col md:flex-row gap-4">
              <ScanqrPopup join="Download App" className="bg-primary  hover:bg-primary px-8 font-medium text-white hover:text-white no-underline" showArrow={true} arrow={<LucideDownload className="ml-4"/>}/>
              <JoinEcommunity showArrow={false} className="text-base" join="Join the ECOmmunity"/>
            </div>
          }
        />
      }
      image={
        <div className="w-[19.75rem] h-[22.625rem] mx-auto hidden lg:block">
          <Image
            src="/assets/images/consumer/mobile-alt.svg"
            alt=""
            width={100}
            height={100}
            className="w-full h-full "
          />
        </div>
      }
    />
  );
}
