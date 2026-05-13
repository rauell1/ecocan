import TextWithComponent from "@/components/contents/consumer/components/text-with-component"
import RegisterPopup from "@/components/shared/register-popup"
import React from "react"

export default function CarouselPage5() {
  return (
    <div className="relative min-h-screen bg-black bg-[url('/assets/images/solutions/about-people-bg.svg')] bg-center bg-no-repeat after:absolute after:inset-0 after:z-10 after:bg-black/70 after:opacity-70 after:content-[''] lg:bg-cover lg:after:bg-black/20">
      <div className="mx-auto flex min-h-screen max-w-[72rem] items-center lg:items-end">
        <div className="z-[999] space-y-12 px-4 py-24 xl:px-0">
          <TextWithComponent
            className="text-white"
            title="That shapes our identity"
            description={
              <div className="text-white lg:w-3/5 lg:text-muted-foreground">
                The ability to Re-imagine. Courage to disrupt. Formidable spirit of resilience. And
                a strong belief in meaningful cooperation. That&apos;s the essence of our DNA. Our{" "}
                <RegisterPopup
                  join="SISU!"
                  className="h-0"
                  form={
                    <p>
                      Sisu is a mystical Finnish concept that represents strength of will,
                      determination, perseverance, and acting rationally in the face of adversity.
                      This, is the true embodiment the ECOCAN spirit, and a wholesome representation
                      of our journey
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
  )
}
