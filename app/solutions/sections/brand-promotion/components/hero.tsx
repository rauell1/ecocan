"use client";
import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import React from "react";

export default function PromoHero() {
  return (
    <div className="z-[999] relative">
      <TextWithComponent
        title={<div className="text-white mt-8">Brand Promotion</div>}
        description={
          <div className="space-y-4 text-white md:w-4/6 lg:w-1/2">
            <p>
              Traditional mass marketing is costly, difficult to measure impact,
              and lacks specificity. Such broad approach often oversaturates
              audiences, causing customer fatigue that lowers engagement, thus
              conversion rates.
            </p>
            <div>
              But with ECOCAN&apos;s tailored promotions, you&apos;re assured of
              standing out by directly engaging with customers through
              personalized, incentivized, and gamified campaigns— most
              affordably. Then sit back and conveniently track increased
              conversion rates, sales growth, and customer loyalty
            </div>
          </div>
        }
      />
    </div>
  );
}
