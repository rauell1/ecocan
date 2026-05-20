import EligblePopup from "@/components/shared/eligble-popup"
import HyperLink from "@/components/shared/hyperlink/hyperlink"
import ScanqrPopup from "@/components/shared/scan-qr"
import FeaturesGrid from "@/components/shared/text-with-cards/custom-card"
import TextWithCards from "@/components/shared/text-with-cards/text-with-cards"
import React from "react"

const consumerFeatures = [
  {
    id: 1,
    name: <p className="text-white">Avoid Fakes</p>,
    question: (
      <p className="text-white">
        Did you know that over 30% of all beverages sold worldwide is illicit, hence harmful to you?
      </p>
    ),
    answer: (
      <div className="space-y-4 text-white">
        <p>
          EcocanApp helps you to relaibly identify genuine <EligblePopup /> beverages, before
          purchase. Thus safeguarding your health & fight counterfeits.
        </p>
        <p>
          Just scan the unique{" "}
          <HyperLink
            link="ECOCAN security codes"
            href="/solutions/brand-protection#security-codes"
          />{" "}
          printed only on genuine beverages, to verify authenticity.
        </p>

        <p>
          If it&apos;s genuine, an authentication page will pop up. But if it&apos;s fake, the App
          will instantly alert you, and block access to the verification page.
        </p>

        <p>
          <span className="font-medium text-[#F05C2B]">DO NOT BUY</span> such fake products!
        </p>
      </div>
    ),
    icon: "/assets/images/consumer/avoid-fakes.svg",
    bgImg: "bg-[url('/assets/images/consumer/avoid-fakes-bg.svg')]",
  },
  {
    id: 2,
    name: <p className="text-white">Conserve Environment</p>,
    question: (
      <p className="text-white">
        Every week, you eat plastics equivalent to a whole credit card in your food! <br />
        How?
      </p>
    ),
    answer: (
      <div className="space-y-4 text-white">
        <p>
          1.5 Billion used bottles (empties) are carelessly thrown into the environment every day.
          Much of this leaks into oceans that now contain over 1.7 trillion plastic particles, that
          eventually end up onto your plate. Through water & fish you consume.
        </p>
        <p>
          The rest of empties are littered or burnt in open air. Increasing GHG emissions, global
          warming & other health hazards.
        </p>
        <p>
          Together we can stop this pollution, by turning in for recycling eligible used empties, at
          any ECO-Station near you.
        </p>
      </div>
    ),
    icon: "/assets/images/consumer/make-money.svg",
    bgImg: "bg-[url('/assets/images/consumer/conserve-bg.svg')]",
  },
  {
    id: 3,
    name: <p className="text-white">Make Money</p>,
    question: (
      <p className="text-white">
        Earn extra income on the side, and enjoy great discounts, by simply recycling your empties.
      </p>
    ),
    answer: (
      <div className="space-y-4 text-white">
        <p>
          After consuming your favourite eligible drinks, return the empties to ECO-Stations, and
          get refunded the deposit money.
        </p>
        <p>Or if you pick eligible empties from the streets, turn them in to earn the deposit.</p>
        <p>
          To further appreciate your ECO-friendly efforts, we&apos;ll reward you with Recycling
          Coupons and Sustainability Discounts. That you pay less on your next purchases, hence save
          more!
        </p>
      </div>
    ),
    icon: "/assets/images/consumer/shop-online.svg",
    bgImg: "bg-[url('/assets/images/consumer/make-money-bg.svg')]",
  },
]

export default function GetStarted() {
  return (
    <TextWithCards
      title="Get started"
      description={
        <div className="lg:w-4/5">
          Whether you want safer drinks for your family, cleaner estates in Kenya, or extra
          recycling rewards. With EcocanApp, it&apos;s all just a{" "}
          <ScanqrPopup join="tap away!" className="h-0 text-lg" />
        </div>
      }
      customCard={
        <FeaturesGrid
          features={consumerFeatures}
          gap="gap-4"
          className="flex h-[33.25rem] flex-col justify-end overflow-hidden bg-[length:260%_100%] bg-[position:590px_0px] p-4 after:absolute after:inset-0 after:z-10 after:bg-black/60 after:opacity-70 after:content-[''] xl:h-[41.25rem]"
        />
      }
    />
  )
}
