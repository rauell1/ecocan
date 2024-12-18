import EligblePopup from "@/components/shared/eligble-popup";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import ScanqrPopup from "@/components/shared/scan-qr";
import FeaturesGrid from "@/components/shared/text-with-cards/custom-card";
import TextWithCards from "@/components/shared/text-with-cards/text-with-cards";
import React from "react";

const consumerFeatures = [
  {
    id: 1,
    name: <p className="text-white">Avoid Fakes</p>,
    question: (
      <p className="text-white">
        Did you know that over 30% of all beverages sold worldwide is illicit,
        hence harmful to you?
      </p>
    ),
    answer: (
      <div className="text-white space-y-4">
        <p>
          EcocanApp helps you to relaibly identify genuine{" "}
          <EligblePopup/> beverages, before purchase.
          Thus safeguarding your health & fight counterfeits.
        </p>

        <p>
          Just scan the unique{" "}
          <HyperLink link="ECOCAN security codes" href="/" /> printed only on
          genuine beverages, to verify authenticity.
        </p>

        <p>
          If it&apos;s genuine, an authentication page will pop up. But if
          it&apos;s a fake, the App will instantly alert you, and block access
          to the verification page.
        </p>

        <p>
          <span className="text-red-500">DO NOT BUY</span> such fake products!
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
        Every week, you eat plastics equivalent to a whole credit card in your
        food! <br/>How?
      </p>
    ),
    answer: (
      <div className="text-white space-y-4">
        <p>
          Every day 1.4 Billion used <EligblePopup join="empties"/> are
          carelessly thrown into the environment.
        </p>
        <p>
          And our oceans now contain over 1.7 trillion plastic particles, which
          eventually end up on your plate.
        </p>
        <p>
          Help us stop this, by turning in for recycling,{" "}
          <EligblePopup/> used empties of PET plastics,
          Aluminium cans, Glass bottles, and drinks cartons, at any of our{" "}
          <HyperLink link="Eco-Stations," href="/" /> and get paid.
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
        Earn extra income on the side, and enjoy great discounts, by simply
        recycling your empties.
      </p>
    ),
    answer: (
      <div className="text-white space-y-4">
        <p>
          After consuming your favourite eligible drinks, return the empties to
          ECO-Stations, and get refunded the deposit money.
        </p>
        <p>
          Or if you pick eligible empties from the streets, turn them in to earn
          the deposit.
        </p>
        <p>
          To further appreciate your ECO-friendly efforts, we&apos;ll reward you
          with Recycling Coupons and Sustainability Discounts. That you pay less
          on your next purchases, hence save more!
        </p>
      </div>
    ),
    icon: "/assets/images/consumer/shop-online.svg",
    bgImg: "bg-[url('/assets/images/consumer/make-money-bg.svg')]",
  },
];

export default function GetStarted() {
  return (
    <TextWithCards
      title="Get started"
      description={
        <div className="lg:w-4/5">
          Whether you want to keep your environment clean, earn extra cash, or
          to safeguard your health from fake drinks. With EcocanApp, it&apos;s
          all just a <ScanqrPopup join="click away!" className="text-lg"/>
        </div>
      }
      customCard={
        <FeaturesGrid
          features={consumerFeatures}
          className="h-[28rem] lg:h-[33.25rem] xl:h-[41.25rem] bg-center p-4 flex flex-col justify-end after:absolute after:inset-0 after:content-[''] after:bg-black/40 after:opacity-70 after:z-10 overflow-hidden"
        />
      }
    />
  );
}
