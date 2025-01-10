import React from "react";
import { LucideArrowRight } from "lucide-react";
import CtaCard from "@/components/shared/cta-card/cta-card";
import HowTo from "../../shared/HowTo";
import TextWithComponent from "../consumer/components/text-with-component";
import SellMore from "./components/our-success";
import News from "../consumer/components/news";
import WhyEcostation from "./components/why-ecostation";
import AvailRvm from "./components/avail-rvm";
import BusinessInsights from "./components/business-insights";
import SideHustle from "./components/side-hustle";
import RegisterPopup from "@/components/shared/register-popup";
import EcostationForm from "@/components/shared/hero-form/hero-form";
import Faq from "./components/faq";
import HyperLink from "@/components/shared/hyperlink/hyperlink";

const howToData = [
  {
    id: 1,
    title: (
      <div className="text-white">
        <RegisterPopup
          join="Register here"
          className="text-lg h-0 font-semibold"
          form={<EcostationForm className="mx-auto lg:w-[33.125rem]" />}
        />{" "}
        to grow your business
      </div>
    ),
    description: (
      <p className="mt-2">
        We&apos;ll then reach out with next steps. Have your business
        documentation ready
      </p>
    ),
  },
  {
    id: 2,
    title: <div className="text-white">Sign the ECO-partnership agreement</div>,
    description: (
      <p className="mt-2">
        Everything is transparent, no hidden clauses. We&apos;ll also be on
        standby to help if needed
      </p>
    ),
  },
  {
    id: 3,
    title: (
      <div className="text-white">Update your profile on ECOCAN Market</div>
    ),
    description: (
      <p className="mt-2">
        We&apos;ll leave this to you, so try to be creative. That you stand out
        more, and generate even better leads
      </p>
    ),
  },
  {
    id: 4,
    title: (
      <div className="text-white">Go &ldquo;live&rdquo; and start earning</div>
    ),
    description: (
      <p className="mt-2">
        ECOnsumers will come to you to recycle, and to buy more from you. See{" "}
        <HyperLink
          href="/solutions/packaging-recycling#how-it-works"
          link="here"
        />{" "}
        how this ECO-system works
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
      <div className="max-w-[72rem] mx-auto space-y-24 px-4 xl:px-0">
        <SellMore />
        <AvailRvm />
        <BusinessInsights />
        <News />
        <Faq />
        <CtaCard
          className="bg-[url('/assets/images/eco-station/join-ecommunity-bg.svg')] ps-4 lg:ps-[5.25rem] h-[30.125rem] bg-cover bg-center relative after:absolute after:inset-0 after:content-[''] after:bg-black/60 after:opacity-70 after:z-10 overflow-hidden"
          item={
            <TextWithComponent
              title={
                <p className="text-white text-5xl">Sustainable commerce</p>
              }
              description={
                <span className="text-white">
                  Save BIG while saving the planet!
                </span>
              }
              component={
                <>
                  <RegisterPopup
                    join="Join ECOmmunity"
                    className="bg-[#FFDD4C] hover:bg-[#FFDD4C] no-underline rounded-full h-[3rem] lg:w-[24.3125rem] border-none px-8 text-base text-black font-medium hover:text-black mt-8"
                    arrow={<LucideArrowRight className="ml-4" />}
                    showArrow={true}
                    form={
                      <EcostationForm className="mx-auto lg:w-[33.125rem]" />
                    }
                  />
                </>
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
