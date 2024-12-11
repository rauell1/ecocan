import TextWithCards from "@/components/shared/text-with-cards/text-with-cards";
import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SimpleCard from "@/components/contents/eco-producer/components/simpleCard";

interface CardContent {
  src: string;
  content: string;
  description: string;
}

const cardContent: CardContent[] = [
  {
    src: "/assets/images/solutions/who.svg",
    content: "Who you are",
    description:
      "You wouldn’t trust a partner you don’t know. So do ECOnsumers. But with ECOCAN you can build trust by sharing your story, what you make and why, through the ECOCAN Security codes",
  },
  {
    src: "/assets/images/solutions/what.svg",
    content: "What they drink",
    description:
      "Tell the story behind the specific drink they are holding in their hands, not just general brand details. Personalize this individual product journey with ECOCAN traceability passport",
  },
  {
    src: "/assets/images/solutions/efforts.svg",
    content: "Your sustainability efforts",
    description:
      "Sustainability is key for ECOnsumers who care about restoring their planet’s resources. Use the traceability passport and ECOCAN DRS to show how you’re helping secure their future.",
  },
  {
    src: "/assets/images/solutions/why.svg",
    content: "Why they are important",
    description:
      "Everyone appreciates a little reassurance that they matter. Leverage the EcocanApp inbox to directly inform ECOnsumers how much you value their contribution to your business, & to preserving the environment. Then watch them reciprocate with brand loyalty!",
  },
];

interface CardComponentProps {
  card: CardContent;
  className?: string;
}

const CardComponent: React.FC<CardComponentProps> = ({ card, className }) => (
  <SimpleCard
    className={`border-none p-0 w-full shadow-none bg-[#F6F6F6] ${className ?? ""}`}
    image={
      <div className="lg:h-80 overflow-hidden relative">
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
      <div className="text-[1.125rem] font-medium leading-[1.625rem] text-left text-black">
        {card.content}
      </div>
    }
    content={
      <div className="text-accent/50 text-sm font-light">
        {card.description}
      </div>
    }
  />
);

const JustPriceCards: React.FC = () => {
  return (
    <div>
      <TextWithCards
        customCard={
          <>
            {/* Mobile Carousel */}
            <div className="lg:hidden mt-6">
              <Carousel className="w-full lg:max-w-xs mx-auto">
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
            <div className="hidden lg:grid grid-cols-2 gap-12 mt-6">
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

export default JustPriceCards;
