import { ReusableAccordion } from '@/components/shared/accordion'
import ImageAndItem from '@/components/shared/image-and-item/image-and-item'
import Image from 'next/image'
import React from 'react'

const accordionItems = [
    {
      id: "item-1",
      question: <p>Unique Customers</p>,
      answer:
        "Know who frequents your store, and why. Interact directly with ECOnsumers who've just placed their first order, or those who've spotted you on ECOCAN Market.",
    },
    {
      id: "item-2",
      question: <p>Orders and order value</p>,
      answer:
        "Get a detailed breakdown of each purchase or order, including average spend.",
    },
    {
      id: "item-3",
      question: <p>Conversion</p>,
      answer:
        "Does listing your business on ECOCAN Market make a difference? Find out by who visited your store or placed orders after opening your profile, and check out their feedback.",
    },
    {
      id: "item-4",
      question: <p>Your sustainability performance</p>,
      answer:
        "We'll share your ECO-friendly contributions; CO2 emissions you've helped reduce, energy saved, and packaging litter you've helped remove from the environment.",
    },
  ];

export default function BusinessInsights() {
  return (
    <div>
        <ImageAndItem
        className="md:flex-row-reverse items-center gap-12"
        fDivClassName="text-start"
        title={
          <div>
            Intelligent insights,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#228B22] via-[#4AC63F] to-[#0000001A]">
              for smart business
            </span>
          </div>
        }
        subtitle={
          <div className="lg:w-3/5">
            Make data-driven decisions with insights from the ECOCAN TnT, giving
            you full visibility into your operations, allowing you to track Key
            Performance Indicators
          </div>
        }
        item={
          <ReusableAccordion
            items={accordionItems}
            defaultOpenItems={["item-1", "item-4"]}
          />
        }
        image={
          <Image
            src="/assets/images/consumer/insights.svg"
            alt="Online store"
            className="object-cover rounded-3xl"
            priority
            width={500}
            height={100}
          />
        }
      />
    </div>
  )
}
