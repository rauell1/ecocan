import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import React from "react";

export default function Community() {
  return (
    <div className="bg-[url('/assets/images/solutions/community.svg')] lg:h-[45.75rem] bg-contain lg:bg-cover bg-center bg-no-repeat bg-black relative after:absolute after:inset-0 after:content-[''] lg:after:bg-black/20 after:opacity-70 after:z-10">
      <div>
        <div className="max-w-[72rem] mx-auto lg:h-[45.75rem] relative z-[999] px-4 py-8 lg:p-0 flex items-center">
          <TextWithComponent
            className="text-white"
            title="In the ECOmmunity"
            description={
              <p className="text-white lg:w-4/6">
                We strongly believe in the power of meaningful co-operation to
                drive positive change. And the ability of technology to
                transform lives. We thus invite you to contribute to this
                once-in-a- generation revolution. As we say in Kenya;{" "}
                <HyperLink link="Harambee!" href="/" />
              </p>
            }
          />
        </div>
      </div>
    </div>
  );
}
