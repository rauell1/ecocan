import PrimaryButton from "@/components/shared/primary-btn";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  LucideSearch,
  LucidePlus,
  LucideSlidersHorizontal,
} from "lucide-react";
import Image from "next/image";
import React from "react";

const products = [
    {
        name: "Product name",
        description: "Information"
    },
    {
        name: "Product name",
        description: "Information"
    },
    {
        name: "Product name",
        description: "Information"
    },
    {
        name: "Product name",
        description: "Information"
    },
    {
        name: "Product name",
        description: "Information"
    },
    {
        name: "Product name",
        description: "Information"
    },
    {
        name: "Product name",
        description: "Information"
    },
    {
        name: "Product name",
        description: "Information"
    },
    {
        name: "Product name",
        description: "Information"
    },
    {
        name: "Product name",
        description: "Information"
    },
    {
        name: "Product name",
        description: "Information"
    },
    {
        name: "Product name",
        description: "Information"
    },
    {
        name: "Product name",
        description: "Information"
    },
    {
        name: "Product name",
        description: "Information"
    },
    {
        name: "Product name",
        description: "Information"
    },
]

export default function Products() {
  return (
    <section className="space-y-24" id="product-list">
      <div className="flex items-center justify-between">
        <form className="border border-[#E6E8EC] bg-white rounded-full flex items-center lg:w-2/5">
          <LucideSearch className="text-secondary ms-4" />
          <Input
            placeholder="Products"
            className="text-[#777E90] border-none rounded-full focus:outline-none focus:border-none focus:ring-0"
          />
        </form>
        <PrimaryButton
          className="h-11 hover:bg-primary"
          buttonText="add product"
          buttonIcon={<LucidePlus />}
        />
      </div>
      <div className="flex items-center justify-between">
        <p>All products</p>
        <div className="flex items-center gap-2 text-secondary">
          <LucideSlidersHorizontal />
          <p>Filter by</p>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {products.map((product, index)=> (
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
              <p className="text-secondary">{product.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
