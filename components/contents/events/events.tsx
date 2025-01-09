"use client";
import React from "react";
import Testimonials from "./components/testimonials";
import GreatMoments from "./components/greatMoments";
import CatchTheWave from "./components/catch-the-wave";
import Experts from "./components/experts";
import Jamming from "./components/jamming";
import Avail from "./components/avail";
import Rhythm from "./components/rhythm";
import Faq from "./components/faq";

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
      <div className="space-y-24 py-8 max-w-[72rem] mx-auto px-4 xl:px-0">
        <Faq />
        <GreatMoments />
      </div>
    </>
  );
};

export default Events;
