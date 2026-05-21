import React, { useState, useEffect } from "react"
import Image from "next/image"
import ImageAndItem from "@/components/shared/image-and-item/image-and-item"
import TextWithCards from "@/components/shared/text-with-cards/text-with-cards"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"

const litterContent = [
  {
    title: "A. Space savings",
    description:
      "No matter the business type, size, or requirements, Pure ECOcans provide a cost-effective and flexible solution. With dimensions just about the size of a typical trash can (45.6 x 54.1 x 110cm), and weighing less than an average adult (only 73.5 kg), these compact machines reduce RVM floor space requirements by over 85%. Allowing for set up even in the smallest of spaces",
    image: "/assets/images/eco-station/space-saving.svg",
  },
  {
    title: "B. Turn-key solution",
    description: (
      <>
        No back-room customisation nor lengthy pre-starts required! ECOcans are intelligently
        engineered for plug-and-play installation; Simply connect the devise to a standard
        single-phase household socket, and you&apos;re all set. Plus, these mobile devises come with
        industrial wheels for easy mobility, to wherever they&apos;re needed.
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
]

export default function Operational() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [api, setApi] = useState<CarouselApi>()
  const [preloadedImages, setPreloadedImages] = useState<string[]>([])

  useEffect(() => {
    const preloadImages = () => {
      litterContent.forEach(({ image }) => {
        const img = new window.Image()
        img.src = image
      })
      setPreloadedImages(litterContent.map((item) => item.image))
    }
    preloadImages()
  }, [])

  useEffect(() => {
    if (!api) return
    api.on("select", () => {
      setCurrentIndex(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="relative py-16" style={{ background: "#050705" }}>
      <div className="relative z-10 mx-auto max-w-[72rem] px-4 py-8 lg:py-0 xl:px-0">
        <ImageAndItem
          className="lg:flex-row-reverse lg:gap-12"
          image={
            <div className="mx-auto hidden w-4/6 overflow-hidden lg:mx-0 lg:block lg:h-[33.75rem] lg:w-full xl:w-[31.25rem]">
              {preloadedImages.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt={`Slide ${index + 1} image`}
                  width={540}
                  height={540}
                  priority={index === 0}
                  loading="eager"
                  className={`absolute left-0 top-0 h-full w-full transition-opacity duration-300 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          }
          item={
            <TextWithCards
              className="w-full"
              title={<span className="text-4xl">1. Operational efficiency</span>}
              description="Unlocking sustainability potential with small efficient steps, but with massive impact"
              customCard={
                <>
                  <Carousel
                    opts={{
                      align: "start",
                    }}
                    className="w-full"
                    setApi={setApi}
                  >
                    <CarouselContent className="mt-20 px-2 py-4 xl:mt-24">
                      {litterContent.map((item, index) => (
                        <CarouselItem key={index} className="md:basis-full">
                          <Card className="h-full border border-white/5 bg-white/[0.03] rounded-2xl p-4 shadow-none">
                            <div className="text-white/60">
                              {item.title && (
                                <div className="text-xl font-semibold text-emerald-400 mb-2">{item.title}</div>
                              )}
                              <div className="text-base text-white/60 leading-relaxed">{item.description}</div>
                            </div>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="absolute right-14 top-8">
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
    </div>
  )
}
