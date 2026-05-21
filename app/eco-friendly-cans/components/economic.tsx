import Timeline from "@/components/shared/timeline"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import React from "react"

const timelineData = {
  title: <span className="font-serif-luxury text-luxury-gradient text-luxury-glow" style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)", lineHeight: 1.1 }}>3. ECOnomic Efficiency &amp; Social Benefits</span>,
  subtitle: (
    <p className="text-white/55 mt-2">
      Let recycling work for Kenyan communities by turning ECOcans into reliable reward and awareness points
    </p>
  ),
  items: [
    {
      image: "/assets/images/eco-station/economic-1.svg",
      title: "Interactive display",
      description:
        "ECOcans’ LCD touchscreen seamlessly guides users on how to operate the devises. This display doubles as a platform for targeted advertising, helping you earn extra income on the side, while boosting your brand visibility.",
    },
    {
      image: "/assets/images/eco-station/economic-2.svg",
      title: "Visualise Ecological savings",
      description:
        "In addition to the MyImpact feature on EcocanApp, you can also deploy an external display to share in real-time, customers’ CO₂ and energy reduction as they return empties. And their ecological savings for going paperless. To further deepen engagement and building brand loyalty.",
    },
    {
      image: "/assets/images/eco-station/economic-3.svg",
      title: "Custom APIs",
      description:
        "ECOCAN’s custom APIs enable you to integrate your store’s loyalty programs and other benefits, to elevate customer engagement and drive-up sales. This creates a uniquely personalized experience that keeps your brand top-of-mind.",
    },
    {
      image: "/assets/images/eco-station/economic-4.svg",
      title: "Inclusivity for All",
      description:
        "At ECOCAN, we embrace inclusivity, providing equal opportunities for everyone to contribute to sustainability. With a height of just 110 cm, ECOcans are designed for easy access by children and people with disabilities, allowing everyone to play a part in protecting the environment",
    },
  ],
}

export default function Economic() {
  return (
    <div className="relative py-8 md:py-24" style={{ background: "#050705" }}>
      <div className="ec-divider mx-4 mb-16" />
      <Timeline
        className="bottom-[22.5%]"
        title={timelineData.title}
        subtitle={timelineData.subtitle}
        items={timelineData.items}
      />
      {timelineData.items.map((item, index) => (
        <div key={index} className="mx-4 md:hidden">
          <div className="rounded-2xl overflow-hidden border border-white/5">
            <Image
              src={item.image}
              alt={item.title}
              className="w-full object-cover lg:h-72"
              width={100}
              height={100}
            />
          </div>
          <div className="py-4">
            <h3 className="mb-2 text-xl font-bold text-white">{item.title}</h3>
            <p className="text-white/55 font-light leading-relaxed">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
