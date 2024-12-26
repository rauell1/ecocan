import { ReusableAccordion } from '@/components/shared/accordion'
import ImageAndItem from '@/components/shared/image-and-item/image-and-item'
import Image from 'next/image'
import React from 'react'

const accordionItems = [
    {
      id: "item-1",
      question: "ECOCAN Market",
      answer:
        "Tap into the vast ECOmmunity base by listing your ECO-friendly products on ECOCAN Market. To drive lead generation, boost sales and amplify remarketing campaigns",
    },
    {
      id: "item-2",
      question: "ECOCAN TnT",
      answer:
        "Access detailed analytics of your campaigns to gauge performance & optimise strategies. And deploy generative AI tools to customise Security codes with your artistic brand designs to further drive engagement",
    },
    {
      id: "item-3",
      question: "ECOCAN DRS",
      answer:
        "Promote sustainable consumption, by involving your customers in cutting your negative environmental impact through closed-loop recycling. And watch this sustainability engagement prosper with brand loyalty",
    },
    {
      id: "item-4",
      question: "ECOCANApp",
      answer:
        "ECOnsumers may tell us what they like and why, what they want more of, where and when. This allows us to offer personalized marketing on the App, tailored to their specific preferences. Facilitating them to purchase exactly what they need",
    },
  ];

export default function Engagement() {
  return (
    <div className='max-w-[72rem] mx-auto px-4 xl:px-0 py-8 lg:pt-24'>
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
