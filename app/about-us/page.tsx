"use client";

import NavigationBar from "@/components/shared/navbar/navbar";
import { useScroll } from "@/lib/useScroll";
import React, { useState } from "react";
import CarouselPage1 from "./components/carousel-page-1";
import CarouselPage2 from "./components/carousel-page-2";
import Carousel from "./components/carousel-wrapper";
import CarouselPage3 from "./components/carousel-page-3";
import CarouselPage4 from "./components/carousel-page-4";
import CarouselPage5 from "./components/carousel-page-5";
import Footer from "@/components/shared/footer/footer";
import CarouselPage6 from "./components/carousel-page-6";

interface NavbarConfig {
  variant: "transparent-white" | "transparent-dark" | "default";
}

export default function AboutPage() {
  const isScrolled = useScroll();
  const [currentPage, setCurrentPage] = useState(0);
  const navbarConfigs: NavbarConfig[] = [
    { variant: "transparent-white" }, // For page 1
    { variant: "default" }, // For page 2
    { variant: "default" }, // For page 3
    { variant: "transparent-white" }, // For page 4
    { variant: "transparent-white" }, // For page 5
    { variant: "default" }, // For page 6
  ];
  const getNavbarProps = () => {
    const currentConfig = navbarConfigs[currentPage];

    switch (currentConfig.variant) {
      case "transparent-white":
        return {
          logoSrc: isScrolled
            ? "/assets/images/ecocan-logo.svg"
            : "/assets/images/ecocan-logo-alt.svg",
          className: isScrolled
            ? "bg-white"
            : "bg-transparent text-white border-b-0",
          linkColor: isScrolled ? "text-black" : "text-white",
        };
      case "transparent-dark":
        return {
          className: isScrolled ? "bg-white" : "bg-transparent",
          logoSrc: "/assets/images/ecocan-logo.svg",
        };
      default:
        return {
          className: "bg-white",
          logoSrc: "/assets/images/ecocan-logo.svg",
        };
    }
  };
  return (
    <>
      <NavigationBar {...getNavbarProps()} />
      <Carousel
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        autoScroll={false}
      >
        <CarouselPage1 />
        <CarouselPage2 />
        <CarouselPage3 />
        <CarouselPage4 />
        <CarouselPage5 />
        <CarouselPage6 />
      </Carousel>
    </>
  );
}
