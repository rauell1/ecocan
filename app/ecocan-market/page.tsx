"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Carousel from "../about-us/components/carousel-wrapper";
import Searchbar from "./components/searchbar";
import { useImagePreloader } from "@/lib/useLoadImages";
import Footer from "@/components/shared/footer/footer";

const images = [
  "/assets/images/ecocan-market/carousel-1.svg",
  "/assets/images/ecocan-market/carousel-2.svg",
  "/assets/images/ecocan-market/carousel-3.svg",
  "/assets/images/ecocan-market/carousel-4.svg",
  "/assets/images/ecocan-market/carousel-5.svg",
];

export default function EcocanMarket() {
  const [currentPage, setCurrentPage] = useState(0);
  const { imagesLoaded, preloadedImages } = useImagePreloader(images, {
    onError: (error) => console.error("Error preloading images:", error),
  });

  return (
    <>
      <div>
        {/* Loading state */}
        {!imagesLoaded && (
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        )}

        {/* Carousel with preloaded images */}
        <div className={!imagesLoaded ? "hidden" : ""}>
          <Carousel
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            showArrow={false}
            enableScrollTracking={false}
          >
            {images.map((image, index) => (
              <div
                key={index}
                style={{
                  backgroundImage: `url(${image})`,
                  opacity: preloadedImages[index] ? 1 : 0,
                  transition: "opacity 0.3s ease-in-out",
                }}
                className="min-h-screen bg-[-100px] lg:bg-center bg-cover"
              >
                {/* Add next/image component for better image optimization */}
                <Image
                  src={image}
                  alt={`Carousel image ${index + 1}`}
                  priority={index === 0} // Priority load first image
                  fill
                  loading="eager"
                  className="hidden" // Hide but still preload
                  sizes="100vw"
                  quality={90}
                />
              </div>
            ))}
          </Carousel>
          <Searchbar />
        </div>
      </div>
      <Footer />
    </>
  );
}
