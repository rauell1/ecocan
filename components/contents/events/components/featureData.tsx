import React from "react";
import HyperLink from "@/components/shared/hyperlink/hyperlink";

const featureData = [
  {
    id: 1,
    name: "Collabo with us",
    question: (
      <p className="font-normal text-secondary">
        <HyperLink link="Join the ECOmmunity" href="/" /> to elevate your event
        to the next level.
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
