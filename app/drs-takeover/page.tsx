"use client";
import NavigationBar from "@/components/shared/navbar/navbar";
import { useScroll } from "@/lib/useScroll";
import React from "react";
import Heading from "./components/heading";
import Operational from "./components/operational";
import Security from "./components/security";
import Economic from "./components/economic";

export default function DrsTakeOver() {
  const isScrolled = useScroll();
  return (
    <>
      <NavigationBar
        className={isScrolled ? "bg-white" : "bg-[#F6F6F6]"}
        logoSrc="/assets/images/ecocan-logo.svg"
      />
      <div className="space-y-24 pt-[3.275rem]">
        <Heading />
        <Operational/>
        <Security/>
        <Economic/>
      </div>
    </>
  );
}
