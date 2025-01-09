import React from "react";
import CtaCard from "@/components/shared/cta-card/cta-card";
import TextWithComponent from "../../consumer/components/text-with-component";
import EcoEventsForm from "@/components/shared/eco-events-form";
import RegisterPopup from "@/components/shared/register-popup";

const GreatMoments = () => {
  return (
    <CtaCard
      className="bg-[url('/assets/images/events/great.png')] ps-8 lg:ps-[7.25rem] h-[30.125rem] bg-cover flex items-center bg-center relative after:absolute after:inset-0 after:content-[''] after:bg-black/60 after:opacity-50 after:-z-10 overflow-hidden z-50"
      item={
        <TextWithComponent
          title={
            <h2 className="text-white text-[2.5rem] mb-3">Great moments</h2>
          }
          description={
            <span className="text-white">
              With the lightest environmental footprint
            </span>
          }
          component={
            <RegisterPopup
              join="Join ECOmmunity"
              className="bg-[#FFDD4C] hover:bg-[#FFDD4C] w-3/5 text-black hover:text-black no-underline font-medium"
              form={<EcoEventsForm />}
              showArrow={true}
            />
          }
        />
      }
    />
  );
};

export default GreatMoments;
