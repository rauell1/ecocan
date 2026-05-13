"use client";

import { Zap, Leaf, BatteryCharging } from "lucide-react";

const points = [
  {
    icon: <Zap className="w-5 h-5 text-primary" />,
    title: "EV-powered collection routes",
    body: "Couriers who collect bottles for ECOCAN can access subsidised electric vehicles, reducing logistics emissions at scale.",
  },
  {
    icon: <Leaf className="w-5 h-5 text-primary" />,
    title: "Carbon-offset credits",
    body: "Each completed collection loop is logged and contributes to verifiable carbon-offset certificates for brand partners.",
  },
  {
    icon: <BatteryCharging className="w-5 h-5 text-primary" />,
    title: "Charging at ECO-Stations",
    body: "Select ECO-Stations double as EV charging points, creating multi-purpose sustainability hubs in urban neighbourhoods.",
  },
];

export default function ElectricMobilitySection() {
  return (
    <section className="py-24 px-6 bg-neutral-50">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Visual */}
          <div className="rounded-3xl bg-eco-dark border border-white/5 aspect-video flex items-center justify-center order-2 lg:order-1">
            <div className="text-center p-10">
              <Zap className="w-16 h-16 text-primary/60 mx-auto mb-4" />
              <p className="text-white/40 text-sm">Electric mobility integration</p>
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
              Electric Mobility
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-eco-dark leading-tight mb-5">
              Cleaner logistics.
              <br />
              Greener last mile.
            </h2>
            <p className="text-eco-dark/70 text-lg leading-relaxed mb-10">
              ECOCAN integrates electric vehicles into its collection network — reducing the carbon footprint of the entire reverse logistics chain.
            </p>
            <div className="flex flex-col gap-6">
              {points.map((p) => (
                <div key={p.title} className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-[16px] font-semibold text-eco-dark mb-1">{p.title}</h3>
                    <p className="text-eco-dark/60 text-[14px] leading-relaxed">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
