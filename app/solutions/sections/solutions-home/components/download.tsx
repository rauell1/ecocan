import PrimaryButton from "@/components/shared/primary-btn";
import { LucideArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Download() {
  return (
    <div className="max-w-[69.375rem] xl:mx-auto px-4 lg:ms-4 xl:px-0 bg-[url('/assets/images/solutions/download-bg.svg')] hidden lg:h-[43.75rem] lg:flex flex-col justify-center">
      <div className="ms-10">
        <h1 className="text-white text-5xl font-semibold">
          ECOCAN, your unfair <br />
          advantage
        </h1>
        <PrimaryButton buttonText="Download App" className="bg-white mt-5 text-primary" buttonIcon={<LucideArrowRight/>}/>
        <div className="mt-20">
          <Image
            src="/assets/images/solutions/sdgs.svg"
            alt="sdg goals"
            className="cursor-pointer"
            priority
            width={459}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
