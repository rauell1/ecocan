import React, { useState, useEffect } from "react";
import Image from "next/image";
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
    title: "1. Traceability",
    description:
      "To ensure each product is unique and digitally connected. ECOnsumers scan these codes with their ECO-scanners to authenticate the products in under 3 seconds",
    image: "/assets/images/solutions/security.png",
  },
  {
    title: "2. Anti-counterfeit",
    description: (
      <>
        If counterfeit criminals attempt to copy the Security codes and print
        them onto fake products, they will fail the verification process. And
        the TnT will immediately notify of the illegal attempt
      </>
    ),
    image: "/assets/images/solutions/anti-counterfeit.png",
  },
  {
    title: "3. Anti-smuggling",
    description:
      "And if a genuine eligible product is diverted or smuggled from its geo-fenced market, or any other suspicious activity is detected, the proactive TnT will immediately disable the attached Security codes, and instantly notify concerned parties.",
    image: "/assets/images/solutions/anti-smuggling.png",
  },
  {
    title: "4. Turn-key",
    description:
      "Measuring as small as 9mm x 9mm, these multi-layered codes are digitally delivered to authorized printers, for seamless printing onto product packaging or labels using existing technology. No equipment customization needed",
    image: "/assets/images/solutions/turn-key.png",
  },
];

export default function SecurityCodesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [preloadedImages, setPreloadedImages] = useState<string[]>([]);

  useEffect(() => {
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
        className="lg:gap-12 lg:flex-row-reverse"
        image={
          <div className="xl:w-[33.75rem] hidden lg:block w-4/6 rounded-smooth-xl lg:w-full mx-auto lg:mx-0 lg:h-[31.25rem] xl:h-[33.75rem] overflow-hidden relative">
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
            subtitle={
              <p className="text-4xl mb-8 font-semibold text-white">
                {`ECOCAN`} <br />
                Security Codes
              </p>
            }
            description={
              <p className="text-[#888D92]">
                <span className="text-primary">ECOCAN Security Codes</span> are
                serialized, blockchain-compatible, anti-copy codes. Which are
                only printed onto packaging of genuine eligible products.{" "}
              </p>
            }
            customCard={
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full"
                setApi={setApi}
              >
                <CarouselContent className="px-2 py-4 mt-28 xl:mt-36">
                  {litterContent.map((item, index) => (
                    <CarouselItem key={index} className="md:basis-full">
                      <Card className="border-none p-4 h-full shadow-none bg-[#888d924d]">
                        <div className="text-white text-sm">
                          <h2 className="font-semibold text-lg text-white">
                            {item.title}
                          </h2>
                          <p className="text-[#238A23]">{item.description}</p>
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
