import EligblePopup from "@/components/shared/eligble-popup";
import EcostationForm from "@/components/shared/hero-form/hero-form";
import HyperLink from "@/components/shared/hyperlink/hyperlink";
import FeaturesGrid from "@/components/shared/text-with-cards/custom-card";
import TextWithCards from "@/components/shared/text-with-cards/text-with-cards";
import React from "react";
import RegisterPopup from "./register-popup";

const ecoStationFeatures = [
  {
    id: 1,
    name: "Reach new customers",
    question: (
      <p className="font-normal  text-secondary">
        <RegisterPopup
          form={<EcostationForm title="Let's grow together"/>}
        />{" "}
        here, and we&apos;ll link you up with
        <br />
        the ECOmmunity
      </p>
    ),
    answer: (
      <div className="space-y-4  text-secondary">
        <div>
          Where ECOnsumers can buy from you on{" "}
          <HyperLink link="ECOCAN market" href={"#faq"} /> or navigate to you on{" "}
          <HyperLink link="ECOCAN Map" href={"#faq"} />{" "}
        </div>
      </div>
    ),
    icon: "/assets/images/eco-station/customers.svg",
  },
  {
    id: 2,
    name: "Earn commissions",
    question: (
      <p className="font-normal  text-secondary">
        For every <EligblePopup /> empty you accept, we&apos;ll pay you a
        commission
      </p>
    ),
    answer: (
      <div className="space-y-4  text-secondary">
        <div>
          ECOuriers will take care of empties pick-up logistics, that you focus
          on making money.
        </div>
      </div>
    ),
    icon: "/assets/images/eco-station/commission.svg",
  },
  {
    id: 3,
    name: "Increase revenues",
    question: (
      <p className="font-normal  text-secondary">
        ECOnsumers will keep coming your way. Ensure you have sufficient stock
      </p>
    ),
    answer: (
      <div className="space-y-4  text-secondary">
        <div>
          And for those redeeming deposits, 60% will most likely spend it right
          back in your store!
        </div>
      </div>
    ),
    icon: "/assets/images/eco-station/revenues.svg",
  },
];

export default function WhyEcostation() {
  return (
    <div className="max-w-[72rem] mx-auto pb-8 lg:pb-24 px-4 xl:px-0">
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
            gap="gap-4"
            className="bg-[#F3F3F6]"
          />
        }
      />
    </div>
  );
}
