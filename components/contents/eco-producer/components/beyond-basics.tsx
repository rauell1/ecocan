import HyperLink from "@/components/shared/hyperlink/hyperlink";
import TextWithCards from "@/components/shared/text-with-cards/text-with-cards";
import React from "react";
import {
  AIFeatureCard,
  SecurityFeatureCard,
} from "../../consumer/components/security-features";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";

const features = [
  {
    number: "assets/images/producer/integrity.svg",
    title: "Preserve your integrity",
    description: (
      <div>
        Deploy{" "}
        <HyperLink
          href="/solutions/brand-protection#security-codes"
          link="ECOCAN Security codes"
        />
        , <HyperLink href="/solutions/brand-protection#tnt" link="ECOCAN TnT" />
        , and{" "}
        <HyperLink
          href="/solutions/brand-protection#ecocan-app"
          link="EcocanApp"
        />
        , to prevent faking of your products
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
          <>
            <ImageAndItem
              className="gap-8 items-center"
              image={
                <div className="h-[33.75rem] bg-[url('/assets/images/producer/beyond-basics.svg')] bg-no-repeat flex flex-col p-4 rounded-smooth-xl">
                  <Card className="rounded-xl overflow-hidden shadow-lg mt-auto backdrop-blur-[2px] bg-white/60">
                    <CardHeader>
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
                        Packaging costs are skyrocketing! But we can help keep
                        them down by efficiently collecting your empties for
                        reuse or recycling, through the clean-loop ECOCAN DRS
                      </p>
                    </CardContent>
                  </Card>
                </div>
              }
              item={
                <div className="grid gap-6 mb-6 lg:mb-0">
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
              }
            />
          </>
        }
      />
    </div>
  );
}
