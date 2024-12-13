import CheckList from "@/components/contents/consumer/components/checklist";
import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";
import React, { useState } from "react";

const steps = [
  {
    id: 1,
    step: (
      <div className="font-light">
        The value of illicit trade is estimated at USD 8 Billion, with 60% of
        all alcoholic sales being illicit! (3 out of 5 sales){" "}
      </div>
    ),
  },
  {
    id: 2,
    step: (
      <div className="font-light">
        Genuine beverage producers lose on average 40% of their market shares,
        resulting in a total fiscal loss estimated at over USD $500 million.
      </div>
    ),
  },
  {
    id: 3,
    step: (
      <div className="font-light">
        And hundreds of lives are lost, millions of health harmed, and over
        50,000 legitimate jobs lost annually (2022)
      </div>
    ),
  },
];

const steps2 = [
  {
    id: 1,
    step: (
      <div className="font-light">
        In Ghana, Nigeria, Tanzania, Uganda, Zambia, Mozambique and South Africa, over 40% of total alcohol sales is illicit
      </div>
    ),
  },
  {
    id: 2,
    step: (
      <div className="font-light">
        With total illicit production exceeding five million HL LAE, valued at over US$5 billion in 2017
      </div>
    ),
  },
  {
    id: 3,
    step: (
      <div className="font-light">
        Mismanaged empties, inadequate anti-counterfeit capabilities, and weak regulatory enforcement fuels this illegal trade
      </div>
    ),
  },
];

const litterContent = [
  {
    title: "In Kenya for example",
    description: <CheckList items={steps} className="items-center" />,
    image: "/assets/images/solutions/slider-img.svg",
  },
  {
    title: "Continental Overview",
    description: <CheckList items={steps2} className="items-center" />,    
    image: "/assets/images/solutions/slider-img-1.svg",
  },
];

export default function Heading() {

  return (
    <div className="max-w-[69.375rem] mx-auto px-4 xl:px-0">
      <TextWithComponent
        title={
          <div className="space-y-4">
            <h2>Brand Protection</h2>
          </div>
        }
        description={
          <p className="md:w-11/12 lg:w-4/6">
            The annual global value of counterfeit and pirated goods is
            estimated at USD 2.8 trillion. Beyond the obvious health risks &
            commerce disruption, this leads to the loss of over USD 270 billion
            in tax revenue annually, and + 5.5 million legitimate jobs are lost
            each year
          </p>
        }
        component={
          <>
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full"
            >
              <CarouselContent className="py-4">
                {litterContent.map((item, index) => (
                  <CarouselItem key={index} className="basis-full">
                    <div className="lg:flex">
                      <div className="lg:w-1/2">
                        <Image
                          src={item.image}
                          alt="slider image statistic"
                          className="rounded-3xl mt-12 lg:mt-0"
                          width={1000}
                          height={1000}
                        />
                      </div>
                      <div className="lg:w-1/2">
                        <Card className="border-none py-4 lg:p-4 h-full shadow-none">
                          <div className="text-accent/50 text-sm">
                            {item.title && (
                              <h2 className="font-semibold text-3xl text-black">
                                {item.title}
                              </h2>
                            )}
                            <div className="text-[#888D92]">
                              {item.description}
                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute top-8 right-14">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </>
        }
      />
    </div>
  );
}
