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
      "And if you're a producer who doesn't safeguard the integrity of your products, nor facilitate elaborate recycling of post-consumer empties, you're inadvertently supporting counterfeit trade, thus endangering the life of your customers",
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
  const [currentImage, setCurrentImage] = useState(litterContent[0].image);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesPreloaded, setImagesPreloaded] = useState(false);

  // Preload all images when component mounts
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
        console.error('Error preloading images:', error);
        // Still set as preloaded to not block the UI
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
        title={<p className="text-left">Did you know...?</p>}
        className="lg:gap-12 lg:flex-row-reverse"
        image={
          <div className="xl:w-[31.25rem] w-4/6 mx-auto lg:mx-0 lg:h-[31.25rem] overflow-hidden">
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
              <p className="text-2xl mb-8 font-semibold">
                {`Waste litter =>`} <br />
                Counterfeit trade
              </p>
            }
            description="Counterfeit criminals often lack capacity to legitimately acquire new bottles for their illegal fake drinks. Instead, they rely on genuine used empties carelessly thrown in the environment, as their primary source of packaging."
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
                        <Card className="border-none p-4 h-full">
                          <div className="text-accent/50 text-sm">
                            {item.title && (
                              <h2 className="font-semibold text-lg text-black">{item.title}</h2>
                            )}
                            <p className="text-[#238A23]">
                              {item.description}
                            </p>
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