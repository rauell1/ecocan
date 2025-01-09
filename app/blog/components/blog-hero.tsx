import PrimaryButton from "@/components/shared/primary-btn";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogHero } from "@/lib/imageIndex";
import { LucideArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function BlogHero() {
  return (
    <div className="flex rounded-2xl shadow-xl lg:h-[32.25rem] overflow-hidden items-center mx-auto">
      <div className="w-1/2">
        <Image
          src={blogHero}
          alt="white man collecting plastic"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-8 w-1/2">
        <div className="w-4/5 mx-auto">
          <Badge className="bg-black">Tips and Tricks</Badge>
          <h2 className="text-[2.5rem] font-semibold">
            Kenya gazettes new EPR laws.
          </h2>
          <p className="my-4">
            Kenya becomes the Second Country in Africa to enact EPR...
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
