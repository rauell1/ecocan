import TextWithCards from "@/components/shared/text-with-cards/text-with-cards";
import Image from "next/image";
import React from "react";
import SimpleCard from "./simpleCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CardContent {
  src: string;
  content: string;
  description: string;
}

const cardContent: CardContent[] = [
  {
    src: "/assets/images/producer/revenue.svg",
    content: "Boost your revenues",
    description:
      "Leverage targeted marketing to increase conversion rate. Facilitate exclusive purchase of your authentic products. And reclaim lost market share",
  },
  {
    src: "/assets/images/producer/efficiency.svg",
    content: "Optimise your efficiency",
    description:
      "Harness the TnT insights to make data-driven decisions. Deploy tech-enabled reverse logistics to cut your costs. And embrace electric mobility to boost your energy efficiency ",
  },
  {
    src: "/assets/images/producer/protect.svg",
    content: "Protect your customers",
    description:
      "Safeguard their health from counterfeits and packaging waste. And protect their future by cutting your negative environmental impact.",
  },
];

interface CardComponentProps {
  card: CardContent;
  className?: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ card, className }) => (
  <SimpleCard
    className={`border border-secondary/30 lg:border-none p-0 w-full ${className ?? ""}`}
    image={
      <div className="h-52 overflow-hidden relative">
        <Image
          src={card.src}
          alt="image"
          width={280}
          height={220}
          className="w-full"
        />
      </div>
    }
    title={
      <div className="text-xl font-medium leading-[1.625rem] text-left text-black">
        {card.content}
      </div>
    }
    content={
      <div className="text-secondary font-light">{card.description}</div>
    }
  />
);

const DoMore: React.FC = () => {
  return (
    <div>
      <TextWithCards
        title="Do more, with less"
        description={
          <div className="lg:w-4/5 my-8">
            Directly engage with ECOnsumers to elevate your presence, preserve
            their health to amplify your impact, and empower them to shape their
            future
          </div>
        }
        customCard={
          <>
            {/* Mobile Carousel */}
            <div className="lg:hidden mt-6">
              <Carousel className="w-full mx-auto">
                <CarouselContent>
                  {cardContent.map((card, index) => (
                    <CarouselItem key={index}>
                      <CardComponent card={card} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            {/* Desktop Grid */}
            <div className="hidden lg:grid grid-cols-3 gap-8 mt-6">
              {cardContent.map((card, index) => (
                <CardComponent key={index} card={card} />
              ))}
            </div>
          </>
        }
      />
    </div>
  );
};

export default DoMore;
