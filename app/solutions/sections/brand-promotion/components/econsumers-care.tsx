import React from 'react';
import Image from 'next/image';

interface InfoCardProps {
  icon: string;
  title: string;
  description: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center max-w-sm">
    <Image src={icon} alt="" width={60} height={60} className="mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

interface WideInfoCardProps {
  icon: string;
  title: string;
  description: string;
}

const WideInfoCard: React.FC<WideInfoCardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center space-y-4 max-w-2xl">
    <Image src={icon} alt="" width={60} height={60} />
    <div className='text-center'>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default function EconsumersCare() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-4">
        Econsumers care more than just the price
      </h2>
      <p className="text-xl text-center text-gray-600 mb-12">
        We&apos;ll work together to let them know:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <InfoCard
          icon="/assets/images/solutions/econsumers-care-1.svg"
          title="Who you are"
          description="You wouldn't trust someone you don't know, right? Build ECOnsumer loyalty by sharing your story—what you make and why—through the ECOCAN traceability passport."
        />
        <InfoCard
          icon="/assets/images/solutions/econsumers-care-2.svg"
          title="What is it they drink"
          description="Tell the story of the specific product in their hands, not just general brand details. Thanks to ECOCAN security codes, you can now personalize the journey of each individual product."
        />
        <InfoCard
          icon="/assets/images/solutions/econsumers-care-3.svg"
          title="Your sustainability efforts"
          description="Sustainability is key for ECOnsumers who care about restoring the planet's resources. Use the traceability passport and ECOCAN DRS to show how you're helping secure their future."
        />
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
        <WideInfoCard
          icon="/assets/images/solutions/econsumers-care-4.svg"
          title="Why they are important"
          description="Everyone loves reassurance that they matter. Let ECOnsumers know how much you value them and their contribution to a cleaner future, and watch them return with more purchases!"
        />
        <WideInfoCard
          icon="/assets/images/solutions/econsumers-care-5.svg"
          title="Unforgettable engagement experience"
          description="Just like personalized Christmas or birthday cards, engage your customers by addressing them by name through the EcocanApp inbox. You can also offer loyalty discounts to keep them coming back."
        />
      </div>
    </div>
  );
}