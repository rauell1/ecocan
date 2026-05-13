import EligblePopup from "@/components/shared/eligble-popup"
import EcostationForm from "@/components/shared/hero-form/hero-form"
import HyperLink from "@/components/shared/hyperlink/hyperlink"
import FeaturesGrid from "@/components/shared/text-with-cards/custom-card"
import TextWithCards from "@/components/shared/text-with-cards/text-with-cards"
import React from "react"
import RegisterPopup from "./register-popup"

const ecoStationFeatures = [
  {
    id: 1,
    name: "Reach new customers",
    question: (
      <p className="font-normal text-muted-foreground">
        <RegisterPopup
          className="h-0"
          form={<EcostationForm className="mx-auto lg:w-[33.125rem]" />}
        />{" "}
        here, and we&apos;ll link you with
        <br />
        the ECOmmunity!
      </p>
    ),
    answer: (
      <div className="space-y-4 text-muted-foreground">
        <div>
          Where ECOnsumers can buy from you on{" "}
          <HyperLink link="ECOCAN market" href={"/ecocan-market"} /> or navigate to you on{" "}
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
      <p className="font-normal text-muted-foreground">
        For every <EligblePopup /> empty you accept, we&apos;ll pay you a commission
      </p>
    ),
    answer: (
      <div className="space-y-4 text-muted-foreground">
        <div>
          ECOuriers will take care of empties pick-up logistics, that you focus on making money.
        </div>
      </div>
    ),
    icon: "/assets/images/eco-station/commission.svg",
  },
  {
    id: 3,
    name: "Increase revenues",
    question: (
      <p className="font-normal text-muted-foreground">
        ECO-Producers will offer better terms, while ECOnsumers will keep coming your way.
      </p>
    ),
    answer: (
      <div className="space-y-4 text-muted-foreground">
        <div>
          And for those redeeming deposits, over 60% will most likely spend it right back to your
          store
        </div>
      </div>
    ),
    icon: "/assets/images/eco-station/revenues.svg",
  },
]

export default function WhyEcostation() {
  return (
    <div className="mx-auto max-w-[72rem] px-4 pb-8 lg:pb-24 xl:px-0">
      <TextWithCards
        title="Why become an ECO-Station"
        description={
          <p className="md:w-4/5">
            It&apos;s a win-win-win; while you help keep the environment clean by accepting empties,
            and issuing deposits to ECOnsumers, we&apos;ll bring more business to you
          </p>
        }
        customCard={
          <FeaturesGrid
            features={ecoStationFeatures}
            gap="gap-4"
            className="h-fit bg-[#F3F3F6] lg:!rounded-smooth-lg"
          />
        }
      />
    </div>
  )
}
