import PrimaryButton from "@/components/shared/primary-btn";
import { Button } from "@/components/ui/button";
import { LucideDownload } from "lucide-react";
import Image from "next/image";
import React from "react";
import TextWithComponent from "./text-with-component";
import CtaCard from "@/components/shared/cta-card/cta-card";
import JoinEcommunity from "./join-ecommunity";

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
              <PrimaryButton
              className="hover:bg-primary"
                buttonText="Download App"
                buttonIcon={<LucideDownload />}
              />
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
