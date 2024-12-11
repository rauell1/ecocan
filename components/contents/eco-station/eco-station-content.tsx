import React from "react";
import { ArrowRight } from "lucide-react";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import { FaqSection } from "../consumer/components/faq";
import CtaCard from "@/components/shared/cta-card/cta-card";
import { Button } from "@/components/ui/button";
import HowTo from "../../shared/HowTo";
import TextWithComponent from "../consumer/components/text-with-component";
import SellMore from "./components/sell-more";
import News from "../consumer/components/news";
import WhyEcostation from "./components/why-ecostation";
import AvailRvm from "./components/avail-rvm";
import BusinessInsights from "./components/business-insights";
import SideHustle from "./components/side-hustle";


const howToData = [
  {
    id: 1,
    title: (
      <div>
        <HyperLink link="Register Here" href="/" /> to grow your business
      </div>
    ),
    description: (
      <p className="text-sm mt-2">
        We&apos;ll then reach out to you with next steps
      </p>
    ),
  },
  {
    id: 2,
    title: "Sign the ECO-partnership agreement",
    description: (
      <p className="text-sm mt-2">
        Everything is transparent, no hidden clauses
      </p>
    ),
  },
  {
    id: 3,
    title: "Update your profile on ECOCAN Market",
    description: (
      <p className="text-sm mt-2">
        We&apos;ll leave this to you, try to be creative
      </p>
    ),
  },
  {
    id: 4,
    title: "Set your status “live”  and start earning",
    description: (
      <p className="text-sm mt-2">
        We&apos;ll ensure you are prominently visible
      </p>
    ),
  },
];

export default function EcoStationContent() {
  return (
    <div className="py-8">
      <WhyEcostation />
      <HowTo
        itemsTitle="How to become an ECO-station"
        itemsSubtitle="4 easy steps to unlock limitless opportunities"
        items={howToData}
        imageSrc="/assets/images/eco-station/become-ecostation.svg"
        imageAlt="Become an Eco-station"
      />

      <SideHustle />
      <div className="max-w-[69.375rem] mx-auto space-y-24 px-4 xl:px-0">
        <SellMore />
        <AvailRvm />
        <BusinessInsights />
        <News />
        <FaqSection />
        <CtaCard
          className="bg-[url('/assets/images/eco-station/join-ecommunity-bg.svg')] ps-4 lg:ps-[7.25rem] h-[30.125rem] bg-cover bg-center relative"
          item={
            <TextWithComponent
              title={
                <p className="text-white text-5xl">Sustainable commerce</p>
              }
              description={<span className="text-white">With ECOCAN</span>}
              component={
                <Button
                  variant="outline"
                  className="bg-[#FFDD4C] hover:bg-[#FFDD4C] rounded-full h-[3rem] w-[24.3125rem] border-none px-8 text-base"
                >
                  Join ECOmmunity
                  <ArrowRight className="ms-4" />
                </Button>
              }
            />
          }
        />
      </div>
      {/* faq */}

      {/* call to action */}
    </div>
  );
}
