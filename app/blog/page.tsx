"use client";

import NavigationBar from "@/components/shared/navbar/navbar";
import { useScroll } from "@/lib/useScroll";
import React from "react";
import BlogHero from "./components/blog-hero";
import Articles from "./components/articles";
import Footer from "@/components/shared/footer/footer";
import News from "./components/news";

export default function Blog() {
  const isScrolled = useScroll();
  return (
    <>
      <NavigationBar
        className={
          isScrolled ? "bg-white" : "bg-transparent backdrop-blur-xl"
        }
        logoSrc="/assets/images/ecocan-logo.svg"
      />
      <div className="space-y-24 py-8 max-w-[72rem] mx-auto px-4 xl:px-0 mt-[3.575rem]">
        <div className="text-center">
            <h1 className="bg-gradient-to-br from-[#228B22] via-[#4AC63F] to-[#FFDD4C] text-transparent bg-clip-text text-7xl font-semibold">
              Bl<span className="bg-gradient-to-br from-[#4AC63F] to-[#FFDD4C] text-transparent bg-clip-text">og</span>
            </h1>
            <News/>
        </div>
      </div>
      <Footer/>
    </>
  );
}
