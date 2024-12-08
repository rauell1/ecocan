import HyperLink from '@/components/shared/hyperlink/hyperlink'
import FeaturesGrid from '@/components/shared/text-with-cards/custom-card'
import CustomCard from '@/components/shared/text-with-cards/custom-card'
import TextWithCards from '@/components/shared/text-with-cards/text-with-cards'
import React from 'react'

const ecoStationFeatures = [
    {
      id: 1,
      name: "Reach new customers",
      question: (
        <p className='font-normal'>
          <HyperLink link="Sign-Up" href={"/"} /> here, and we&apos;ll
          link you up with
          <br />
          the ECOmmunity
        </p>
      ),
      answer: (
        <div className="space-y-4">
          <div>
            Where ECOnsumers can buy from you on{" "}
            <HyperLink link="ECOCAN market" href={"/"} /> or navigate
            to you on <HyperLink link="ECOCAN Map" href={"/"} />{" "}
          </div>
        </div>
      ),
      icon: "/assets/images/eco-station/customers.svg",
    },
    {
      id: 2,
      name: "Earn commissions",
      question: (
        <p className='font-normal'>
          For every <HyperLink link="eligible" href={"/"} /> empty you
          accept, we&apos;ll pay you a commission
        </p>
      ),
      answer: (
        <div className="space-y-4">
          <div>
            ECOuriers will take care of empties pick-up logistics,
            that you focus on making money.
          </div>
        </div>
      ),
      icon: "/assets/images/eco-station/commission.svg",
    },
    {
      id: 3,
      name: "Increase revenues",
      question:
        <p className='font-normal'>ECOnsumers will keep coming your way. Ensure you have sufficient stock</p>,
      answer: (
        <div className="space-y-4">
          <div>
            And for those redeeming deposits, 60% will most likely
            spend it right back in your store!
          </div>
        </div>
      ),
      icon: "/assets/images/eco-station/revenues.svg",
    },
  ]

export default function WhyEcostation() {
  return (
    <div className="max-w-[69.375rem] mx-auto pb-24 px-4 xl:px-0">
      <TextWithCards
      title="Why become an ECO-Station"
      description={
        <p className="md:w-4/5">
          It&apos;s a win-win-win; while you help keep the environment clean
          by accepting empties, and issuing deposits to ECOnsumers, we&apos;ll
          bring more business to you
        </p>
      }
      customCard={
        <FeaturesGrid
          features={ecoStationFeatures}
          gap='gap-4'
          className='bg-[#F3F3F6]'
        />
      }
        />
    </div>
  )
}
