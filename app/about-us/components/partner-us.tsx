import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import Image from "next/image";
import React from "react";

export default function PartnerUS() {
  return (
    <div>
      <div className="px-4 xl:px-0 py-24 space-y-12 z-[999]">
        <ImageAndItem
          className="lg:flex-row-reverse items-center gap-12"
          image={
            <Image
              src="/assets/images/solutions/hands.svg"
              alt="community of people on ground"
              width={540}
              height={540}
              className="ms-auto"
              priority
            />
          }
          item={
            <TextWithComponent
              description={
                <div className="space-y-4">
                  <h2
                    className={`bg-gradient-to-r my-2 from-[#228B22] via-[#FFDD4C] to-[#FFDD4C] text-transparent bg-clip-text font-semibold text-3xl lg:text-5xl`}
                  >
                    COme partner <span className="text-[#FFDD4C]">with Us</span>
                  </h2>
                  <p className="font-semibold text-lg text-[#888D92]">
                    To COntribute in shaping the future;
                  </p>
                  <p className="text-base">
                    Environmental, health and economic sustainability are our
                    north stars. And nurturing healthier and thriving
                    communities remains our focus. We think we have a solid plan
                    to archive this. To drive this purposeful movement. And
                    bring about meaningful change. But we can&apos;t do this
                    alone
                  </p>
                </div>
              }
            />
          }
        />
      </div>
    </div>
  );
}
