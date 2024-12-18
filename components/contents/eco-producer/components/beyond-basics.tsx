import { ReusableAccordion } from "@/components/shared/accordion";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import TextWithCards from "@/components/shared/text-with-cards/text-with-cards";
import React from "react";
import {
  AIFeatureCard,
  SecurityFeatureCard,
} from "../../consumer/components/security-features";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import clsx from "clsx";
import { title } from "process";
import { number } from "zod";
import Image from "next/image";

const accordionItems = [
  {
    id: "item-1",
    question: "Increase your sustainability",
    answer: (
      <div>
        <p>
          <HyperLink link="Register here" href="/" /> to join the Ecommunity,
          and reduce your carbon, litter and energy footprint.
        </p>
      </div>
    ),
  },
  {
    id: "item-2",
    question: "Protect your integrity!",
    answer: (
      <div>
        <p>
          Deploy <HyperLink link="ECOCAN security codes" href="/solutions/brand-protection#security-codes" />,{" "}
          <HyperLink link="ECOCAN TnT" href="/solutions/brand-protection" />, and{" "}
          <HyperLink link="ECOCAN DRS" href="/" />, to prevent faking of your
          products. Then sit back, and watch your revenues grow from the
          reclaimed market share, and increased customer loyalty!
        </p>
      </div>
    ),
  },
  {
    id: "item-3",
    question: "Increase sales",
    answer: (
      <div className="space-y-6">
        <p>
          Get your products listed on{" "}
          <HyperLink link="ECOCAN Market" href="/" />, and tap into the large
          pool of ECOnsumers.
        </p>
        <p>
          As bonus to increased revenues from this new market, you&apos;ll
          receive unique insights from <HyperLink link="ECOCAN TnT" href="/" />,
          and engage ECOnsumers with targeted marketing campaigns via{" "}
          <HyperLink link="EcocanApp" href="/" />
        </p>
      </div>
    ),
  },
  {
    id: "item-4",
    question: "Cut production cost",
    answer: (
      <div className="space-y-6">
        <p>
          Packaging costs are skyrocketing! But we can help keep your costs down
          by collecting your empties for reuse or recycling, through the
          clean-loop ECOCAN DRS. If you prefer, we can even process the
          collected empties for you.
        </p>
      </div>
    ),
  },
];

const features = [
  {
    number: "assets/images/producer/integrity.svg",
    title: "Preserve your integrity",
    description: (
      <div>
        Deploy <HyperLink href="/solutions/brand-protection#security-codes" link="ECOCAN Security codes" />,{" "}
        <HyperLink href="/solutions/brand-protection#tnt" link="ECOCAN TnT" />, and{" "}
        <HyperLink href="/solutions/brand-protection#ecocan-app" link="EcocanApp" />, to prevent faking of your
        products
      </div>
    ),
  },
  {
    number: "assets/images/producer/sustainability.svg",
    title: "Increase your sustainability",
    description: (
      <div>
        Reduce your carbon, litter and energy footprint via the{" "}
        <HyperLink href="/solutions/packaging-recycling" link="ECOCAN DRS" />
      </div>
    ),
  },
  {
    number: "assets/images/producer/compliance.svg",
    title: "Regulatory compliance",
    description:
      "Comply with EPR laws through the ECOCAN DRS. And Anti-counterfeit regulations via our Brand Protection suite",
  },
];

export default function BeyondBasics() {
  return (
    <div>
      <TextWithCards
        title="Beyond the Basics"
        customCard={
          <div className="md:flex lg:h-[33.75rem] lg:gap-6 mt-8">
            <div className="grid gap-6 lg:w-1/2 mb-6 lg:mb-0">
              {features.map((feature) => (
                <SecurityFeatureCard
                  key={feature.number}
                  {...feature}
                  className="lg:h-[125px]"
                  cardHeaderStyles="flex items-center"
                />
              ))}
              <AIFeatureCard
                title="And so much more"
                buttonText="See full offering here"
                className="bg-primary hover:bg-primary/90"
                buttonLink="/solutions"
                showImage={false}
              />
            </div>
            <div className="lg:w-1/2 h-[24rem] lg:h-full bg-[url('/assets/images/producer/beyond-basics.svg')] bg-no-repeat flex flex-col p-8">
              <Card className="rounded-xl overflow-hidden shadow-lg mt-auto backdrop-blur-[2px] bg-white/60">
                <CardHeader className="pb-2">
                  <div className="flex gap-4 items-center">
                    <div className="relative w-10 h-10">
                      <Image
                        src="/assets/images/producer/production-cost.svg"
                        alt="number"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold">
                    Cut production cost
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-black/70">
                    Packaging costs are skyrocketing! But we can help keep them
                    down by efficiently collecting your empties for reuse or
                    recycling, through the clean-loop ECOCAN DRS
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        }
      />
    </div>
  );
}
