import PrimaryButton from "@/components/shared/primary-btn";
import { Button } from "@/components/ui/button";
import { LucideDownload } from "lucide-react";
import Image from "next/image";
import React from "react";
import TextWithComponent from "./text-with-component";
import CtaCard from "@/components/shared/cta-card/cta-card";

export default function CtaCardComponent() {
  return (
    <CtaCard
      className="bg-[url('/assets/images/consumer/consumer-cta-card.jpeg')] py-[3.75rem] ps-[7.25rem] bg-cover bg-center relative after:absolute after:inset-0 after:content-[''] after:bg-black/90 after:opacity-50 after:-z-10 overflow-hidden z-50"
      item={
        <TextWithComponent
          title={
            <h2 className="text-white text-[2.5rem] mb-3">
              Cheers to ECO-
              <br />
              friendly savings!
            </h2>
          }
          description={
            <span className="text-white">
              Save BIG, while, Saving the planet. Only with <br /> EcocanApp.
            </span>
          }
          component={
            <div className="flex gap-4">
              <PrimaryButton
                buttonText="Download App"
                buttonIcon={<LucideDownload />}
              />
              <Button
                variant="outline"
                className="bg-transparent hover:bg-transparent border-white text-white hover:text-white rounded-full h-[3rem] py-3 px-8 text-base"
              >
                Join the ECOmmunity
              </Button>
            </div>
          }
        />
      }
      image={
        <div className="w-[19.75rem] h-[22.625rem] mx-auto">
          <Image
            src="/assets/images/mobile-alt.svg"
            alt=""
            width={100}
            height={100}
            className="w-full h-full"
          />
        </div>
      }
    />
  );
}
