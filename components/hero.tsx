import React from "react";
import HeroContainer from "./hero-container";


export default function Hero() {
  return (
    <>
      <div className="hidden md:block">
        <HeroContainer/>
      </div>
    </>
  );
}
