"use client";

import React from "react";
import TextWithComponent from "../consumer/components/text-with-component";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import Image from "next/image";
import CtaCard from "@/components/shared/cta-card/cta-card";
import DepositRefundSystem from "./components/drs";
import Matters from "./components/matters";

export default function RecyclerContent() {
  return (
    <div className="space-y-24 py-8 max-w-[72rem] mx-auto px-4 xl:px-0">
      <div className="space-y-12">
        <TextWithComponent
          title="Closed-loop recycling"
          description={
            <div className="w-4/5">
              <p>
                <HyperLink link="Register here" href="/" /> to join the
                ECOmmunity on one fundamental guarantee; you WILL NOT{" "}
                <HyperLink link="downcycle" href="/" /> empties collected by the
                ECOmmunity. To us, that&apos;s worse than doing nothing at all!
              </p>
            </div>
          }
        />
      </div>
      <DepositRefundSystem />
      {/* DRS takeover */}
      <ImageAndItem
        image={
          <div className="relative w-[31.013rem] h-[30.719rem]">
            <Image
              src="/assets/images/recycler/takeover.svg"
              width={500}
              height={100}
              priority
              alt="How to return eligible empties"
            />
          </div>
        }
        item={
          <TextWithComponent
            title="DRS takeover"
            description={
              <p className="lg:w-5/6">
                Due to its efficacy, the{" "}
                <HyperLink link="Nordic-design DRS" href="/" /> is rapidly
                becoming a near universal feature of the Developed Markets’
                recycling landscape; with 18 countries having already
                established nationwide Nordic DRSs. And many others have passed
                legislation to establish the one.
              </p>
            }
          />
        }
        className="md:flex-row-reverse items-center"
      />
      <div className="bg-white rounded-2xl mt-6 p-6">
        <TextWithComponent
          title="But developing markets have been left behind"
          description={
            <div className="space-y-4 lg:w-5/6">
              <p>
                We at ECOCAN are on the forefront of championing this DRS
                revolution in developing markets where it is needed the most.
                But numerous bottlenecks have been hindering implementation,
                until now. Leveraging our advanced technologies and extensive
                recycling experience, we&apos;ve overcome those prohibitive
                barriers. By tailoring a DRS to developing markets&apos;
                environment, made it over 70% cheaper to set up, and slashed
                administration cost by millions of dollars
              </p>

              <p>
                Curious how we&apos;ve archived this? Join the ECOmmunity to
                find out
              </p>
            </div>
          }
          component={
            <Image
              src="/assets/images/recycler/drs-world.png"
              alt="DRS"
              width={1000}
              height={1000}
              className="w-full h-full"
            />
          }
        />
      </div>

      {/* that which matters */}
      <Matters />
      {/* faq */}
      {/* call to action */}

      <CtaCard
        className="bg-[url('/assets/images/recycler/recycler-cta.jpeg')] ps-[7.25rem] h-[30.125rem] bg-cover bg-center items-center"
        item={
          <TextWithComponent
            title={
              <p className="text-white text-[2.5rem]">
                Recycling is
                <br />
                Cooperation
              </p>
            }
            description={
              <p className="text-black mt-4">We can&apos;t do this alone.</p>
            }
          />
        }
      />
    </div>
  );
}
