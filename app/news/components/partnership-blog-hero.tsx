import PrimaryButton from "@/components/shared/primary-btn";
import { Badge } from "@/components/ui/badge";
import { blogHero } from "@/lib/imageIndex";
import { LucideArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function PartnershipBlogHero() {
  return (
    <div className="lg:flex rounded-2xl shadow-xl lg:h-[32.25rem] overflow-hidden items-center mx-auto">
      <div className="lg:w-1/2 h-[20rem] lg:h-full">
        <Image
          src="/assets/images/blog/partnership.jpg"
          alt="white man collecting plastic"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 lg:p-8 lg:w-1/2">
        <div className="lg:w-4/5 mx-auto">
          <h2 className="text-[2.5rem] font-semibold">
            Finnpartnership invests in ECOCAN
          </h2>
          <p className="my-4">
            ECOCAN Secures grant funding to pilot it&apos;s traceability and
            recycling technologies in Kenya{" "}
          </p>
          <PrimaryButton
            buttonText="Read more"
            className="hover:bg-primary"
            buttonIcon={<LucideArrowRight />}
          />
        </div>
      </div>
    </div>
  );
}
