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
    title: "A. Space savings",
    description:
      "No matter your business type, size, or requirements, Pure ECOcans provide a cost-effective and flexible solution. With dimensions just about the size of a typical trash can (45.6 x 54.1 x 110cm), and weighing less than an average adult (only 73.5 kg), these compact machines reduce RVM floor space requirements by over 85%. Allowing for set up even in the smallest spaces.",
    image: "/assets/images/eco-station/space-saving.svg",
  },
  {
    title: "B. Turn-key solution",
    description: (
      <>
        No back-room customisation nor lengthy pre-starts required! ECOcans are
        intelligently engineered for plug-and-play installation, ensuring
        you&apos;re always ready whenever customers want to recycle. Simply
        connect the devise to a standard single-phase household socket, and
        you&apos;re all set. Plus, these mobile devises come with industrial
        wheels for easy mobility, to wherever they&apos;re needed.
      </>
    ),
    image: "/assets/images/eco-station/turn-key.svg",
  },
  {
    title: "C. Energy Efficiency",
    description:
      "Pure ECOcans are designed with sustainability at their core, consuming less energy than your TV set! (just 0.27 W). Further, going paperless with digital deposit redemption via EcocanApp boosts energy and refund efficiency; eliminating the need for paper receipts hence reducing receipt litter while saving our forests.",
    image: "/assets/images/eco-station/energy-efficiency.svg",
  },
  {
    title: "D. Labour Efficiency",
    description:
      "These intelligent devises redeem upto 500 empties/hour, and operate autonomously, eliminating the need for staff to be present when accepting empties. Additionally, the TnT usage trends and diagnostics help optimize staffing, requiring only few minutes for bin emptying and machine cleaning",
    image: "/assets/images/eco-station/labour-efficiency.svg",
  },
  {
    title: "E. Logistics efficiency",
    description:
      "Accepted empties are compacted at a 1:10 ratio for aluminium cans and 1:5 ratio for PET bottles, greatly reducing both storage space and transportation needs. This means that one (1) transportation vessel can carry equal amount of compacted aluminium cans, that what ten (10) vessels would carry if uncompacted. This not only lowers logistics costs but also significantly reduces CO₂ emission",
    image: "/assets/images/eco-station/logistics.svg",
  },
];

export default function Operational() {
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
        console.error("Error preloading images:", error);
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
    <div className="bg-[#F6F6F6] relative lg:pb-36">
      <div className="max-w-[72rem] mx-auto px-4 xl:px-0 relative z-[999] py-8 lg:py-0">
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
              title={
                <span className="text-4xl">1. Operational efficiency</span>
              }
              description="Unlock your sustainability potential with small efficient steps, but with massive impact"
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
                          <Card className="border-none p-4 h-full shadow-none">
                            <div className="text-secondary">
                              {item.title && (
                                <div className="font-semibold text-xl text-black">
                                  {item.title}
                                </div>
                              )}
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
                </>
              }
            />
          }
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 400"
        className="absolute -top-36 xl:-top-52 z-50 hidden lg:block"
      >
        <path
          fill="#F6F6F6"
          fill-opacity="1"
          d="M0,100L1440,0L1440,400L0,400Z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        className="absolute bottom-0 z-50 hidden lg:block"
      >
        <path
          fill="white"
          fill-opacity="1"
          d="M0,100L1440,0L1440,100L0,100Z"
        ></path>
      </svg>
    </div>
  );
}
