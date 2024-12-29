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
    title: "1. Traceability",
    description:
      "To ensure each product is unique and digitally connected. ECOnsumers scan these codes with their ECO-scanners to authenticate the products in under 3 seconds",
    image: "/assets/images/solutions/security.svg",
  },
  {
    title: "2. Anti-counterfeit",
    description: (
      <>
        If counterfeit criminals attempt to copy the Security codes and print them onto fake products, they will fail the verification process. And the TnT will immediately notify of the illegal attempt
      </>
    ),
    image: "/assets/images/solutions/security.svg",
  },
  {
    title: "3. Anti-smuggling",
    description:
      "And if a genuine eligible product is diverted or smuggled from its geo-fenced market, or any other suspicious activity is detected, the proactive TnT will immediately disable the attached Security codes, and instantly notify concerned parties.",
    image: "/assets/images/solutions/security.svg",
  },
  {
    title: "4. Turn-key",
    description:
      "Measuring as small as 9mm x 9mm, these multi-layered codes are digitally delivered to authorized printers, for seamless printing onto product packaging or labels using existing technology. No equipment customization needed",
    image: "/assets/images/solutions/security.svg",
  },
];

export default function SecurityCodesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [currentImage, setCurrentImage] = useState(litterContent[0].image);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagePromises = litterContent.map((item) => {
          return new Promise((resolve, reject) => {
            const img = new window.Image();
            img.src = item.image;
            img.onload = resolve;
            img.onerror = reject;
          });
        });

        await Promise.all(imagePromises);
        setImagesPreloaded(true);
      } catch (error) {
        console.error("Error preloading images:", error);
        setImagesPreloaded(true);
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      const newIndex = api.selectedScrollSnap();
      setCurrentIndex(newIndex);

      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage(litterContent[newIndex].image);
        setIsTransitioning(false);
      }, 300);
    });
  }, [api]);

  if (!imagesPreloaded) {
    return (
      <div className="w-full h-[31.25rem] flex items-center justify-center">
        <div className="animate-pulse bg-gray-200 rounded-lg w-4/6 h-4/6" />
      </div>
    );
  }

  return (
    <div className="hidden md:block">
      <ImageAndItem
        className="lg:gap-12 lg:flex-row-reverse"
        image={
          <div className="xl:w-[31.25rem] hidden lg:block w-4/6 lg:w-full mx-auto lg:mx-0 lg:h-[31.25rem] overflow-hidden">
            <Image
              src={currentImage}
              alt={`Slide ${currentIndex + 1} image`}
              width={500}
              height={500}
              priority={true}
              className={`w-full h-full transition-opacity duration-300 ${
                isTransitioning ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>
        }
        item={
          <TextWithCards
            className="w-full"
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
              <>
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
                        <Card className="border-none p-4 h-full shadow-none bg-[#888d924d]">
                          <div className="text-white text-sm">
                            {item.title && (
                              <h2 className="font-semibold text-lg text-white">
                                {item.title}
                              </h2>
                            )}
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
              </>
            }
          />
        }
      />
    </div>
  );
}
