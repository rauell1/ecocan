"use client";
import React from "react";
import TextWithCards from "../../shared/text-with-cards/text-with-cards";
import CustomCard from "../../shared/text-with-cards/custom-card";
import featureData from "./components/featureData";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import { FaqSection } from "./components/faq";
import Testimonials from "./components/testimonials";
import GreatMoments from "./components/greatMoments";
import ImageAndItem from "@/components/shared/image-and-item/image-and-item";
import TextWithComponent from "../consumer/components/text-with-component";
import Image from "next/image";
import CatchTheWave from "./components/catch-the-wave";
import Experts from "./components/experts";
import Jamming from "./components/jamming";
import Avail from "./components/avail";
import Rhythm from "./components/rhythm";

const Events = () => {
  return (
    <>
      <div className="space-y-24 py-8">
        <CatchTheWave />
        <Experts />
        <Jamming />
        <Avail />
        <Rhythm />
        <Testimonials />
      </div>
      <div className="space-y-24 py-8 max-w-[69.375rem] mx-auto px-4 xl:px-0">
        <FaqSection />
        <GreatMoments />
      </div>
    </>
  );
};

export default Events;
