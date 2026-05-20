"use client";

import { AlertCircle, Trash2, TrendingDown, ArrowRight, Recycle } from "lucide-react";
import { useEcReveal } from "@/lib/use-ec-reveal";
import { SectionOverline } from "@/components/shared/section-shell";

const stats = [
  { value: "3 in 5", label: "plastic bottles in Kenya never get recycled", icon: Trash2 },
  { value: "Up to 40%", label: "of drinks in kiosks can be fake or tampered", icon: AlertCircle },
  { value: "1 small action", label: "every drink you return keeps plastics out of rivers", icon: Recycle },
];

export default function ProblemSolutionSection() {
  const ref = useEcReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative w-full section-py section-alt overflow-hidden"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div className="space-y-5 ec-reveal">
              <SectionOverline>For everyday shoppers</SectionOverline>
              <h2 className="section-heading">
                The problem is big.
                <br />
                <span className="text-[--c-text]">Your empty bottle still matters.</span>
              </h2>
            </div>

            <div className="grid gap-5 ec-reveal">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="ec-card group p-7 flex items-center gap-6"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[--c-green-dim] text-[--c-green] transition-all duration-300 group-hover:bg-[--c-green] group-hover:text-white group-hover:rotate-[8deg]">
                    <stat.icon size={26} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold tracking-tight">{stat.value}</div>
                    <div className="text-[11px] font-semibold text-[--c-text-muted] uppercase tracking-widest mt-1">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7 ec-reveal flex flex-col gap-7">
            <div className="relative w-full aspect-[4/3] rounded-[--radius-xl] overflow-hidden border border-[--c-border] shadow-[--shadow-lift] group bg-[--c-dark]">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover opacity-80 transition-transform duration-[2s] group-hover:scale-[1.02]"
              >
                <source src="/videos/circular-loop.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-emerald-200/90 mb-3">
                  Simple recycling journey
                </p>
                <p className="text-base md:text-lg text-white/85 max-w-xl">
                  Buy your favourite drink in an Ecocan bottle, scan to verify it&apos;s genuine, then drop the empty at an ECO-Station. We handle the recycling — you earn rewards and keep plastics out of Kenyan rivers.
                </p>
              </div>
            </div>

            <button
              onClick={() =>
                document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
              }
              className="flex items-center justify-between w-full bg-[--c-dark] rounded-[--radius-card] p-9 transition-all hover:bg-[--c-green] group"
            >
              <span className="text-base font-medium text-white/70 group-hover:text-white transition-colors italic">
                See how one bottle moves from your bin to a recycling plant.
              </span>
              <div className="flex items-center gap-3 font-semibold text-white group-hover:gap-7 transition-all duration-300">
                Walk through my first return
                <span className="bg-white/10 p-3 rounded-full group-hover:bg-white/20 group-hover:rotate-[-45deg] transition-all duration-300">
                  <ArrowRight size={18} />
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
