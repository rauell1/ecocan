import PrimaryButton from "@/components/shared/primary-btn"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { LucideSearch, LucidePlus, LucideSlidersHorizontal } from "lucide-react"
import Image from "next/image"
import React from "react"

const products = [
  {
    name: "Product name",
    description: "Information",
  },
  {
    name: "Product name",
    description: "Information",
  },
  {
    name: "Product name",
    description: "Information",
  },
  {
    name: "Product name",
    description: "Information",
  },
  {
    name: "Product name",
    description: "Information",
  },
  {
    name: "Product name",
    description: "Information",
  },
  {
    name: "Product name",
    description: "Information",
  },
  {
    name: "Product name",
    description: "Information",
  },
  {
    name: "Product name",
    description: "Information",
  },
  {
    name: "Product name",
    description: "Information",
  },
  {
    name: "Product name",
    description: "Information",
  },
  {
    name: "Product name",
    description: "Information",
  },
  {
    name: "Product name",
    description: "Information",
  },
  {
    name: "Product name",
    description: "Information",
  },
  {
    name: "Product name",
    description: "Information",
  },
]

export default function Products() {
  return (
    <section className="space-y-24" id="product-list">
      <div className="flex items-center justify-between gap-4 md:gap-0">
        <form className="flex items-center rounded-full border border-[#E6E8EC] bg-white lg:w-2/5">
          <LucideSearch className="ms-4 text-muted-foreground" />
          <Input
            placeholder="Products"
            className="rounded-full border-none text-[#777E90] focus:border-none focus:outline-none focus:ring-0"
          />
        </form>
        {/* <PrimaryButton
          className="h-11 hover:bg-primary"
          buttonText="add product"
          buttonIcon={<LucidePlus />}
        /> */}
      </div>
      <div className="flex items-center justify-between">
        <p>All products</p>
        <div className="flex items-center gap-2 text-muted-foreground">
          <LucideSlidersHorizontal />
          <p>Filter by</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {products.map((product, index) => (
          <Card key={index}>
            <CardHeader>
              <Image
                src="/assets/images/ecocan-market/product-img.svg"
                alt="product"
                className="mx-auto"
                width={110}
                height={110}
              />
            </CardHeader>
            <CardContent className="text-center">
              <h2>{product.name}</h2>
              <p className="text-muted-foreground">{product.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
