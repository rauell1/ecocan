"use client";

import { Button } from "@/components/ui/button";
import { LucideArrowRight, LucideDownload } from "lucide-react";
import Image from "next/image";
import React from "react";
import NavigationBar from "../navbar/navbar";
import { useScroll } from "@/lib/useScroll";
import JoinEcommunity from "@/components/shared/join-ecommunity";
import PrimaryButton from "../primary-btn";

export default function DefaultHero() {
  const isScrolled = useScroll();

  return (
    <>
      <NavigationBar
        logoSrc={
          isScrolled
            ? "/assets/images/ecocan-logo.svg"
            : "/assets/images/ecocan-logo-alt.svg"
        }
        className={
          isScrolled ? "bg-white" : "bg-transparent text-white border-b-0 "
        }
        linkColor={isScrolled ? "text-black" : "text-white"}
      />
      <div className="lg:h-[36rem] xl:h-[47.575rem]">
        <div className="bg-[url('/assets/images/consumer/hero-bg.jpeg')] bg-center lg:h-[35.875rem] xl:h-[46.85rem] pt-[3.575rem] relative after:absolute after:inset-0 after:content-[''] after:bg-black/90 after:opacity-70 after:z-10">
          <div className="xl:max-w-[72rem] flex flex-col lg:flex lg:flex-row mx-auto lg:gap-12 relative">
            <div className="flex flex-col gap-4 md:w-3/4 pt-12 lg:pt-0 lg:w-1/2 px-4 xl:px-0 text-white z-[99] lg:items-center justify-center lg:space-y-4">
              <div>
                <h1 className="text-5xl xl:text-[4rem] text-start font-semibold">
                  Re-imagining{" "}
                  <span className="bg-gradient-to-r from-[#228B22] via-[#4AC63FCF] to-[#FFDD4C] text-transparent bg-clip-text">
                    Sustainability
                  </span>
                </h1>
              </div>
              <div className="text-base xl:text-lg md:space-y-8 xl:space-y-6">
                <p className="text-white text-start">
                  At ECOCAN, sustainability goes beyond environmental
                  conservation, to nurturing healthy and thriving communities.
                  Download EcocanApp to avoid harmful fake drinks, and to make
                  money while protecting the planet through recycling.
                </p>
                <div className="md:flex gap-4 mt-4 md:mt-0">
                  <PrimaryButton
                    buttonIcon={<LucideDownload />}
                    className="bg-white text-primary mb-4"
                  />
                  <JoinEcommunity className="text-base"/>
                </div>
              </div>
            </div>
            <div className="z-[999] lg:hidden">
              <Image
                src="/assets/images/consumer/hero-mobile.svg"
                alt="hero-image"
                className="md:mx-auto"
                width={500}
                height={500}
              />
            </div>
            <div className="lg:h-[32rem] xl:h-[44rem] md:w-1/2 relative overflow-hidden lg:overflow-visible z-[99] hidden lg:flex">
              <Image
                src="/assets/images/consumer/consumer-hero-mobile.svg"
                className="xl:max-w-[40rem] mt-12"
                alt="ecocan mobile app"
                width={900}
                height={100}
              />
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 280"
            className="absolute bottom-0 z-50 hidden lg:block"
          >
            <path
              fill="#FAFAFA"
              fillOpacity="1"
              d="M0,260L1440,0L1440,340L0,340Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 530"
            className="absolute bottom-0 z-50 hidden md:block lg:hidden"
          >
            <path
              fill="#FAFAFA"
              fillOpacity="1"
              d="M0,300L600,0L600,600L0,600Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 350 480"
            className="absolute bottom-0 z-50 md:hidden"
          >
            <path
              fill="#FAFAFA"
              fillOpacity="1"
              d="M0,260L350,0L540,540L0,540Z"
            ></path>
          </svg>
        </div>
        <div className="z-[999] mb-5 lg:mb-0">
          <h2 className="text-center text-3xl xl:text-5xl font-bold z-[999]">
            The ECOmmunity
          </h2>
        </div>
      </div>
    </>
  );
}
