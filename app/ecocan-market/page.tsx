"use client"

import React, { useState } from "react"
import Image from "next/image"
import Carousel from "../about-us/components/carousel-wrapper"
import Searchbar from "./components/searchbar"
import { useImagePreloader } from "@/lib/useLoadImages"
import Footer from "@/components/shared/footer/footer"
import { LucideChevronsDown } from "lucide-react"

const images = [
  "/assets/images/ecocan-market/carousel-1.svg",
  "/assets/images/ecocan-market/carousel-2.svg",
  "/assets/images/ecocan-market/carousel-4.svg",
  "/assets/images/ecocan-market/carousel-5.svg",
]

export default function EcocanMarket() {
  const [currentPage, setCurrentPage] = useState(0)
  const { imagesLoaded, preloadedImages } = useImagePreloader(images, {
    onError: (error) => console.error("Error preloading images:", error),
  })

  return (
    <>
      <div>
        {/* Loading state */}
        {!imagesLoaded && (
          <div className="flex min-h-screen items-center justify-center bg-gray-50">
            <div className="border-primary h-12 w-12 animate-spin rounded-full border-b-2 border-t-2"></div>
          </div>
        )}

        {/* Carousel with preloaded images */}
        <div className={`${!imagesLoaded} ? "hidden" : ""`}>
          <div className="relative">
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
                  className="min-h-screen bg-cover bg-[-100px] lg:bg-center"
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
            <div className="absolute bottom-1 right-1/2 mx-auto w-fit translate-x-1/2 text-center text-white lg:bottom-14">
              <LucideChevronsDown size={60} className="mx-auto" />
              <p>Scroll to find verified recyclable drinks</p>
            </div>
          </div>
          <Searchbar />
          <Footer />
        </div>
      </div>
    </>
  )
}
