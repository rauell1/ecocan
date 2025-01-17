import TextWithComponent from "@/components/contents/consumer/components/text-with-component";
import RegisterPopup from "@/components/shared/register-popup";
import React from "react";


export default function CarouselPage5() {
  return (
    <div className="bg-[url('/assets/images/solutions/about-people-bg.svg')] min-h-screen lg:bg-cover bg-center bg-no-repeat bg-black relative after:absolute after:inset-0 after:content-[''] after:bg-black/70 lg:after:bg-black/20 after:opacity-70 after:z-10">
      <div className="max-w-[72rem] mx-auto min-h-screen flex items-center lg:items-end">
        <div className="px-4 xl:px-0 py-24 space-y-12 z-[999]">
          <TextWithComponent
            className="text-white"
            title="That shapes our identity"
            description={
              <div className="text-white lg:text-secondary lg:w-3/5">
                The ability to Re-imagine. Courage to disrupt. Formidable spirit
                of resilience. And a strong belief in meaningful cooperation.
                That&apos;s the essence of our DNA. Our{" "}
                <RegisterPopup
                  join="SISU!"
                  className="h-0"
                  form={
                    <p>
                      Sisu is a mystical Finnish concept that represents
                      strength of will, determination, perseverance, and acting
                      rationally in the face of adversity. This, is the true
                      embodiment the ECOCAN spirit, and a wholesome
                      representation of our journey
                    </p>
                  }
                />{" "}
                We pledge to uphold this. All the way.
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
}
