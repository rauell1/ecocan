import HyperLink from "@/components/shared/hyperlink/hyperlink";
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
          <HyperLink link="eligible" href="/" /> beverages, before purchase.
          Thus safeguarding your health & fight counterfeits.
        </p>

        <p>
          Just scan the unique{" "}
          <HyperLink link="ECOCAN security codes" href="/" /> printed only on
          genuine beverages, to verify authenticity.
        </p>

        <p>
          If it's genuine, an authentication page will pop up. But if it’s a
          fake, the App will instantly alert you, and block access to the
          verification page.
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
    name: (<p className="text-white">Protect Planet</p>),
    question:
      (<p className="text-white">Every week, you eat plastics equivalent to a whole credit card in your food! How?</p>),
    answer: (
      <div className="text-white space-y-4">
        <p>
          Every day 1.4 Billion used <HyperLink link="empties" href="/" /> are
          carelessly thrown into the environment.
        </p>
        <p>
          And our oceans now contain over 1.7 trillion plastic particles, which
          eventually end up on your plate.
        </p>
        <p>
          Help us stop this, by turning in for recycling,{" "}
          <HyperLink link="eligible" href="/" /> used empties of PET plastics,
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
    name: (<p className="text-white">Make Money</p>),
    question: (
      <p className="text-white">
        <HyperLink link="ECOCAN Market" href="/" /> is the go-to supermarket, in
        your pocket
      </p>
    ),
    answer: (
      <div className="text-white space-y-4">
        <p>
          Order your favourite genuine drinks with just a few taps, then sit
          back and relax. ECouriers will most affordably deliver it to you, in
          minutes. Wherever. Whenever.
        </p>
        <p>
          Or, allow us 60 minutes to aggregate orders,that we cut our carbon
          footprint
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
      title="Get Started"
      description={
        <p className="w-4/5">
          Whether you want to keep your environment clean, earn extra cash, or
          to safeguard your health from fake drinks. With EcocanApp, it&apos;s
          all just a <HyperLink link="click away!" href="/" />
        </p>
      }
      customCard={
        <FeaturesGrid
          features={consumerFeatures}
          className="lg:h-[33.25rem] xl:h-[41.25rem] bg-center p-4 flex flex-col justify-end after:absolute after:inset-0 after:content-[''] after:bg-black/40 after:opacity-70 after:z-10 overflow-hidden"
        />
      }
    />
  );
}
