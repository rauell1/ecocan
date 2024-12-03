"use client";

import { Button } from "@/components/ui/button";
import { LucideArrowRight, LucideDownload } from "lucide-react";
import Image from "next/image";
import React from "react";
import NavigationBar from "../navbar/navbar";
import { useScroll } from "@/lib/useScroll";
import JoinEcommunity from "@/components/contents/consumer/components/join-ecommunity";
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
          <div className="xl:max-w-[69.375rem] flex flex-col lg:flex lg:flex-row mx-auto lg:gap-12 relative">
            <div className="flex flex-col gap-4 md:w-1/2 px-4 xl:px-0 text-white z-[9998] lg:items-center justify-center lg:space-y-4">
              <div>
                <h1 className="text-5xl xl:text-6xl text-start font-semibold">
                  Re-imagining{" "}
                  <span className="bg-gradient-to-r from-[#228B22] via-[#4AC63FCF] to-[#FFDD4C] text-transparent bg-clip-text">
                    Sustainability
                  </span>
                </h1>
              </div>
              <div className="text-sm lg:text-base lg:space-y-8 xl:space-y-6">
                <p className="text-white text-start w-5/6">
                  At ECOCAN, sustainability goes beyond environmental
                  conservation, to nurturing healthy and thriving communities.
                  Download EcocanApp to avoid harmful fake drinks, and to make
                  money while protecting the planet through recycling
                </p>
                <div className="lg:flex gap-4 mt-4 md:mt-0">
                  <PrimaryButton
                    buttonIcon={<LucideDownload />}
                    className="bg-white text-primary mb-4"
                  />
                  <JoinEcommunity />
                </div>
              </div>
            </div>
            <div className="z-[9998] lg:hidden">
              <Image
                src="/assets/images/consumer/hero-mobile.svg"
                alt="hero-image"
                className=""
                width={500}
                height={500}
              />
            </div>
            <div className="lg:h-[32rem] xl:h-[44rem] md:w-1/2 relative overflow-hidden lg:overflow-visible z-[9998] hidden lg:flex">
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
            viewBox="0 0 1440 300"
            className="absolute bottom-0 z-50 hidden md:block"
          >
            <path
              fill="#FAFAFA"
              fill-opacity="1"
              d="M0,280L1440,0L1440,340L0,340Z"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 350 510"
            className="absolute bottom-0 z-50 md:hidden"
          >
            <path
              fill="#FAFAFA"
              fill-opacity="1"
              d="M0,280L350,0L540,540L0,540Z"
            ></path>
          </svg>
        </div>
        <div className="z-[9999]">
          <h2 className="text-center text-[2rem] font-bold z-[9999]">
            The ECOmmunity
          </h2>
        </div>
      </div>
    </>
  );
}
