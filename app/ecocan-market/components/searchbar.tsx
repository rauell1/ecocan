import TextWithComponent from "@/components/contents/consumer/components/text-with-component"
import React from "react"
import Products from "./products"

export default function Searchbar() {
  return (
    <div className="mx-auto max-w-[72rem] px-4 py-24 xl:px-0">
      <TextWithComponent
        title="ECOCAN Market"
        description="Discover verified drinks and recycling-eligible products for Kenyan shoppers, with clear ECOCAN return and reward pathways"
        component={<Products />}
      />
    </div>
  )
}
