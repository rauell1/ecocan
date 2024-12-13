import React from "react";
import Engagement from "./components/engagement";
import Strategic from "./components/strategic";
import JustPrice from "./components/just-price";
import Experience from "./components/experience";

export default function BrandPromotion() {
  return (
    <>
      <div className="space-y-8 lg:space-y-24">
        <Engagement/>
        <Strategic/>
        <JustPrice />
        <Experience/>
      </div>
    </>
  );
}
