import React from 'react';
import HyperLink from '@/components/shared/hyperlink/hyperlink';

const iconSize = 18;


const featureData = [
  {
    id: 1,
    name: "Collabo with us",
    question:(
      <p className='font-normal'>
        <HyperLink link="Join the ECOmmunity" href="/"/> today, and elevate your event&apos;s sustainability
      </p>
    ),
    answer: (
      <div className="font-normal space-y-4">
        <p>
          Ensure legulatory compliance, and tap into our vibrant ECOsumer fan base!
        </p>

      </div>
    ),
    icon: "/assets/images/events/collabo.svg",
  },
  {
    id: 2,
    name: "Secure your ticketing ",
    question:(
      <p className='font-normal'>
      Utilize <HyperLink link="ECOCAN security codes" href="/"/> to protect the integrity of your ticketing
    </p>
    ),
    answer: (
      <div className="font-normal space-y-4">
        <p>
        Verify attendance with secure <HyperLink link="ECOCAN ID" href="/"/>, and enjoy peace of mind knowing everything is secure.
        </p>
      </div>
    ),
    icon: "/assets/images/events/ticketing.svg",
  },
  {
    id: 3,
    name: "Streamline your sales",
    question:
      <p className='font-normal'>Allow your fans to pre-order their favourite genuine drinks in advance </p>,
    answer: (
        <div className="font-normal space-y-4">
          <p>
            And save them the inconvenience of long queues, while you get to plan ahead with ease
          </p>
        </div>
      ),
    icon: "/assets/images/events/sales.svg",
  },
];

export default featureData;