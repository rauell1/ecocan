"use client";
import NavigationBar from "@/components/shared/navbar/navbar";
import { useScroll } from "@/lib/useScroll";
import React from "react";
import Heading from "./components/heading";
import Operational from "./components/operational";
import Security from "./components/security";
import Economic from "./components/economic";
import Footer from "@/components/shared/footer/footer";

export default function DrsTakeOver() {
  const isScrolled = useScroll();
  return (
    <>
      <NavigationBar
        className={isScrolled ? "bg-white shadow-sm" : "bg-[#F6F6F6]"}
        logoSrc="/assets/images/ecocan-logo.svg"
        linkColor="text-eco-dark"
      />
      <div className="space-y-24 pt-[3.275rem]">
        <Heading />
        <Operational/>
        <Security/>
        <Economic/>
      </div>
      <Footer/>
    </>
  );
}
