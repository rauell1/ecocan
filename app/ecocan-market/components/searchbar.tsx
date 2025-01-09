import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import React from "react";
import Products from "./products";

export default function Searchbar() {
  return (
    <div className="max-w-[72rem] mx-auto px-4 xl:px-0 py-24">
      <TextWithComponent
        title="ECOCAN Market"
        description="ECOCAN Market is the most sustainable, pocket friendly supermarket, in your pocket"
        component={
          <Products/>
        }
      />
    </div>
  );
}
