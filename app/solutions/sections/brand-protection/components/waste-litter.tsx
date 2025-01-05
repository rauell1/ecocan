import React, { useState, useEffect } from "react";
import Image from "next/image";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import TextWithCards from "@/components/shared/text-with-cards/text-with-cards";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

const litterContent = [
  {
    title: "1. Illicit refill",
    description:
      "When you carelessly discard empties instead of returning them to ECO-stations, you'll be helping counterfeit criminals. Who will simply pick the empties, fill them with fake drinks, and put them back to the market. And to the naked eye, they'll appear similar to genuine products but contain dangerously potent substances",
    image: "/assets/images/consumer/refill.svg",
  },
  {
    title: "2. Fight back",
    description: (
      <>
        But with EcocanApp, you now have the power to identify and avoid such
        fakes. Nevertheless, ensure to return your empties to ECO-Stations for
        recycling, that we completely kick these criminals out of the market
      </>
    ),
    image: "/assets/images/consumer/fight-back.svg",
  },
  {
    title: "3. Loophole",
    description:
      "And if you're a producer who doesn't safeguard the integrity of your products, nor facilitate elaborate recycling of post-consumer empties, you're inadvertently supporting counterfeit trade, thus endangering the lives of your customers",
    image: "/assets/images/consumer/loophole.svg",
  },
  {
    title: "4. Joint effort",
    description:
      "So, let's join hands in the ECOmmunity to facilitate product authentication and empties recycling, that we stop these criminals, protect our health from harmful fake drinks, ensure we get value for money, and safeguard our legitimate businesses",
    image: "/assets/images/consumer/joint-effort.svg",
  },
];

export default function WasteLitter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [preloadedImages, setPreloadedImages] = useState<string[]>([]);

  useEffect(() => {
    // Simple preloading like in TapTap
    const preloadImages = () => {
      litterContent.forEach(({ image }) => {
        const img = new window.Image();
        img.src = image;
      });
      setPreloadedImages(litterContent.map((item) => item.image));
    };
    preloadImages();
  }, []);

  useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="hidden md:block">
      <ImageAndItem
        title={<div className="text-left">Did you know...?</div>}
        className="lg:gap-12 lg:flex-row-reverse"
        image={
          <div className="xl:w-[31.25rem] hidden lg:block w-4/6 lg:w-full mx-auto lg:mx-0 lg:h-[33.75rem] overflow-hidden relative">
            {preloadedImages.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`Slide ${index + 1} image`}
                width={540}
                height={540}
                priority={index === 0}
                loading="eager"
                className={`w-full h-full absolute top-0 left-0 transition-opacity duration-300 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        }
        item={
          <TextWithCards
            className="w-full"
            subtitle={
              <p className="text-3xl mb-8 lg:-mt-6 font-medium">
                {`Waste litter =>`} Counterfeit trade
              </p>
            }
            description="Counterfeit criminals often lack capacity to legitimately acquire new bottles for their illegal fake drinks. Instead, they rely on genuine used empties carelessly thrown in the environment, as their primary source of packaging."
            customCard={
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full"
                setApi={setApi}
              >
                <CarouselContent className="px-2 py-4 mt-20 xl:mt-24">
                  {litterContent.map((item, index) => (
                    <CarouselItem key={index} className="md:basis-full">
                      <Card className="border-none p-4 h-full shadow-none">
                        <div className="text-accent/50 text-sm">
                          <div className="font-semibold text-lg text-black">
                            {item.title}
                          </div>
                          <div className="text-[#238A23] text-base">
                            {item.description}
                          </div>
                        </div>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="absolute top-8 right-14">
                  <CarouselPrevious />
                  <CarouselNext />
                </div>
              </Carousel>
            }
          />
        }
      />
    </div>
  );
}
