import HyperLink from '@/components/shared/hyperlink/hyperlink';
import TextWithCards from '@/components/shared/text-with-cards/text-with-cards';
import WhiteBgCard from '@/components/shared/white-bg-card';
import React from 'react'
import ExpandableContent from './expandable-content';

const cardContent = [
    {
      iconPath: "/assets/images/consumer/coupons.svg",
      title: "Recycling Coupons",
      content:
        "Whenever you return 10 eligible empties for recycling, you'll get back the deposit money, plus, we'll reward you with up to 30% discount on your next purchase. Just activate your e-coupon while at the ECO-station, show the one-time coupon QR code to the Egent, and pay less! Or, if you order online, add the coupon to your order, to discount your bill",
    },
    {
      title: "Loyalty Discounts",
      iconPath: "/assets/images/consumer/discounts.svg",
      content:
        "Before you buy an ECO-product, authenticate it using your ECO-Scanner. And after enjoying the drink, return to ECO-stations the exact same empties you authenticated. And we'll reward you with up to a 50% loyalty discount on your next ECO-product purchase.",
    },
    {
      title: "VIP treatment",
      iconPath: "/assets/images/consumer/vip.svg",
      content:
        "Join the ECOmmunity, and we'll roll out the Red Carpet, just for YOU! And enjoy priority access to exclusive events. Skip the long queues by ordering your drinks in advance. Get exclusive behind-the-scenes content. And we might just spoil you by popping a complimentary drink!",
    },
  ];

export default function Exclusive() {
  return (
    <div className="bg-[url('/assets/images/consumer/bananas-bg.svg')] lg:h-[36rem] bg-center bg-cover flex items-center mb-24">
        <div className="max-w-[69.375rem] mx-auto px-4 xl:px-0">
          <TextWithCards
            title="Exclusive benefits for ECOnsumers"
            subtitle={
              <span className="bg-gradient-to-t text-2xl from-[#FFDD4C] to-[#4AC63F] text-transparent bg-clip-text font-semibold">
                You&apos;ll go bananas!
              </span>
            }
            description={
              <span>
                Enjoy unbelievably jaw dropping benefits by simply joining the{" "}
                <HyperLink link="ECOmmunity" href="/" />.
              </span>
            }
            className="mx-auto text-center"
            customCard={
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 xl:w-[65rem]">
                {cardContent.map((card, index) => (
                  <WhiteBgCard
                    className="border-none"
                    iconPath={card.iconPath}
                    key={index}
                    title={card.title}
                    content={<ExpandableContent content={card.content} />}
                  />
                ))}
              </div>
            }
          />
        </div>
      </div>
  )
}
