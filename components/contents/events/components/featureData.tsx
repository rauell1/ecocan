import React from "react";
import JoinEcommunity from "@/components/shared/join-ecommunity";
import RegisterPopup from "@/components/shared/register-popup";
import EcoEventsForm from "@/components/shared/eco-events-form";

const featureData = [
  {
    id: 1,
    name: "Collabo with us",
    question: (
      <p className="font-normal text-secondary">
        <RegisterPopup
          form={<EcoEventsForm />}
          join="Join the ECOmmunity"
          className="border-none px-0 text-primary underline underline-offset-4 hover:text-primary text-base h-0"
          showArrow={false}
        />{" "}
        to elevate your event to the next level.
      </p>
    ),
    answer: (
      <div className="font-normal text-secondary space-y-4">
        <p>
          By tapping into our vibrant ECOnsumer fan base. And embracing advanced
          green technology
        </p>
      </div>
    ),
    icon: "/assets/images/events/collabo.svg",
  },
  {
    id: 2,
    name: "Enhance your Sustainability",
    question: (
      <p className="font-normal text-secondary">
        Elaborately clean up the event space after the Gig.
      </p>
    ),
    answer: (
      <div className="font-normal text-secondary space-y-4">
        <p>
          To preserve the environment, ensure regulatory compliance, and get
          ECO-friendly fans anticipating your next Gig
        </p>
      </div>
    ),
    icon: "/assets/images/events/sustainability.svg",
  },
  {
    id: 3,
    name: "Secure your ticketing ",
    question: (
      <p className="font-normal text-secondary">
        Safeguard the integrity of your tickets with serialized ECOCAN Security
        codes
      </p>
    ),
    answer: (
      <div className="font-normal space-y-4 text-secondary">
        <p>
          To eliminate ticketing loopholes thus secure sales, guaranteeing
          returns
        </p>
      </div>
    ),
    icon: "/assets/images/events/ticketing.svg",
  },
];

export default featureData;
