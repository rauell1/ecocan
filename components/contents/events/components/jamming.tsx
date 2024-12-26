import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AccordionDemo } from "./accordion";

const images = [
  "/assets/images/events/tickets.svg",
  "/assets/images/events/vip.png",
  "/assets/images/events/fan.svg",
  "/assets/images/events/glitches.png",
];

export default function Jamming() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState<string[]>([]);

  useEffect(() => {
    const preloadImages = () => {
      images.forEach((src) => {
        const img = new window.Image();
        img.src = src;
      });
      setPreloadedImages(images);
    };
    preloadImages();
  }, []);

  const handleAccordionSelect = (id: number) => {
    setSelectedImage(id - 1);
  };

  return (
    <div className="max-w-[72rem] mx-auto px-4 xl:px-0">
      <ImageAndItem
        className="gap-8 lg:gap-12 items-center"
        title=" Re-imagined Jamming"
        subtitle={
          <div className="lg:w-3/5 mx-auto">
            Get fans buzzing over your unforgettable gig with secured ticketing,
            personalised fan interaction, and exclusive sustainability perks
          </div>
        }
        image={
          <div className="relative w-full h-[24rem] lg:h-[31.25rem] rounded-smooth-xl overflow-hidden hidden lg:block">
            {preloadedImages.map((src, index) => (
              <Image
                key={src}
                src={src}
                alt={`EcocanApp step ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out ${
                  index === selectedImage ? "opacity-100" : "opacity-0"
                }`}
                width={540}
                height={540}
                priority={index === 0}
                loading="eager"
              />
            ))}
          </div>
        }
        item={<AccordionDemo onSelect={handleAccordionSelect} />}
      />
    </div>
  );
}
