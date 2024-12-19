"use client";

import React, { useState } from "react";
import Carousel from "../about-us/components/carousel-wrapper";

const images = [
  "/assets/images/ecocan-market/carousel-1.svg",
  "/assets/images/ecocan-market/carousel-2.svg",
  "/assets/images/ecocan-market/carousel-3.svg",
  "/assets/images/ecocan-market/carousel-4.svg",
  "/assets/images/ecocan-market/carousel-5.svg",
];

export default function EcocanMarket() {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <div>
      <Carousel
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        showArrow={false}
      >
        {images.map((image, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${image})` }}
            className="min-h-screen bg-[-100px] lg:bg-center bg-cover"
          >
          </div>
        ))}
      </Carousel>
    </div>
  );
}