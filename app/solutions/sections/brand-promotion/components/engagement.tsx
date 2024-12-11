import { ReusableAccordion } from '@/components/shared/accordion'
import ImageAndItem from '@/components/shared/image-and-item/image-and-item'
import Image from 'next/image'
import React from 'react'

const accordionItems = [
    {
      id: "item-1",
      question: "ECOCAN security codes",
      answer:
        "Unlock the digital power of your packaging, by transforming them from traditional physical assets, into digitally connected resources, for direct engagement with consumers.",
    },
    {
      id: "item-2",
      question: "ECOCAN TnT",
      answer:
        "We’ll instantly alert you every time a customer engages with your products, detailing exactly when and where it happens. Plus, with advanced data analytics tools, the TnT will generate dynamic performance reports on all interactions. You can then use these insights to take your business to the next level.",
    },
    {
      id: "item-3",
      question: "ECOCAN DRS",
      answer:
        "Cutting your negative environmental impact is just the beginning. Get the full picture—know who, when and where your empties are returned for recycling.",
    },
    {
      id: "item-4",
      question: "ECOCAN Market",
      answer:
        "We don’t just spark your customers’ interest and leave them hanging—we close the deal! Our Marketplace lets them buy their favourite drinks from you. While ECOuriers handle the deliveries and pick-ups, ensuring a seamless experience from start to finish",
    },
  ];

export default function Engagement() {
  return (
    <div className='max-w-[69.375rem] mx-auto px-4 xl:px-0 pt-24'>
        <ImageAndItem
          title="Re-imagined Engagement"
          className="lg:flex-row-reverse items-center"
          image={
            <Image
              src="/assets/images/solutions/male.svg"
              alt="male office guy"
              className='ms-auto hidden lg:block'
              width={500}
              height={100}
            />
          }
          item={
            <div className="w-11/12">
              <ReusableAccordion items={accordionItems} />
            </div>
          }
        />
    </div>
  )
}
