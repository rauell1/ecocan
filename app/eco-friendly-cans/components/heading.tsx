import TextWithComponent from "@/components/contents/consumer/components/text-with-component"
import React from "react"

export default function Heading() {
  return (
    <section className="relative pt-24 pb-16" id="eco_friendly_cans" style={{ background: "#050705" }}>
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[400px]"
        style={{ background: "radial-gradient(ellipse at 30% 0%, rgba(34,197,94,0.07) 0%, transparent 65%)" }}
      />
      <div className="relative z-10 mx-auto max-w-[72rem] px-4 py-8 lg:pb-16 lg:pt-20 xl:px-0">
        <p className="section-overline text-emerald-400 mb-4">ECO-friendly cans</p>
        <TextWithComponent
          title={
            <span className="font-serif-luxury text-luxury-gradient text-luxury-glow" style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)", lineHeight: 1.0, letterSpacing: "-0.03em" }}>
              Intelligent recycling,<br />
              <span className="font-sans font-light text-emerald-400">at scale.</span>
            </span>
          }
          description={
            <p className="text-[15px] leading-relaxed text-white/60 lg:w-3/4 mt-2">
              ECOcans make bottle returns easy for everyday shoppers in Kenya. At ECO-Stations, they
              speed up recycling, prevent fake return claims, and help communities keep streets
              cleaner while unlocking digital rewards.
            </p>
          }
        />
      </div>
    </section>
  )
}
