import TextWithCards from '@/components/shared/text-with-cards/text-with-cards'
import WhiteBgCard from '@/components/shared/white-bg-card'
import React from 'react'
import AlchemyControls from './alchemy-controls';
import AlchemyEngagement from './alchemy-engagement';
import AlchemyOnlineSales from './alchemy-online-sales';

const alchemyContent = [
    {
      icon: "/assets/images/producer/alchemy-1.svg",
      title: "Brand protection",
      content: "We give you the controls",
      child: (
        <>
          <AlchemyControls />
        </>
      ),
    },
    {
      icon: "/assets/images/producer/alchemy-2.svg",
      title: "Online Sales",
      content: "We live in a world of Super Convenience ",
      child: (
        <>
          <AlchemyOnlineSales />
        </>
      ),
    },
    {
      icon: "/assets/images/producer/alchemy-3.svg",
      title: "Engagement",
      content: "Econsumers care more than just the price",
      child: (
        <>
          <AlchemyEngagement />
        </>
      ),
    },
  ];

export default function Alchemy() {
  return (
    <div>
        <div className="bg-[url('/assets/images/consumer/bananas-bg.svg')] h-[36rem] bg-center bg-cover flex items-center my-16">
        <div className="max-w-[72rem] mx-auto">
          <TextWithCards
            title="The Alchemy behind this ECOCAN magic"
            className="mx-auto text-center"
            customCard={
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:w-[65rem]">
                {alchemyContent.map((card, index) => (
                  <WhiteBgCard
                    iconPath={card.icon}
                    className="border-none"
                    key={index}
                    title={card.title}
                    content={card.content}
                    child={card.child}
                  />
                ))}
              </div>
            }
          />
        </div>
      </div>
    </div>
  )
}
