import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import React, { useState, useEffect } from "react";
import { AccordionDemo } from "./accordion";
import Image from "next/image";

const images = [
  "/assets/images/consumer/get-app.png",
  "/assets/images/consumer/scan-image.png",
  "/assets/images/consumer/map-image.png",
  "/assets/images/consumer/pay-image.png",
  "/assets/images/consumer/earn-image.png",
];

export default function TapTap() {
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
    <ImageAndItem
      className="gap-8 lg:gap-12 items-center"
      title="How EcocanApp works"
      subtitle="Tap Tap Tap, and, Wallah!"
      image={
        <div className="relative w-full h-[24rem] lg:h-[33.75rem] rounded-smooth-xl overflow-hidden hidden lg:block">
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
  );
}
