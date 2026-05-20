"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { useEcReveal } from "@/lib/use-ec-reveal"
import { SectionOverline } from "@/components/shared/section-shell"

export default function ElectricMobilitySection() {
  const ref = useEcReveal()

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="w-full section-py section-white"
    >
      <div className="site-container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text column */}
          <div className="ec-reveal">
            <SectionOverline>Sustainability</SectionOverline>
            <h2 className="section-heading mb-6">
              One step in the loop:{" "}
              <span className="text-[--c-green]">electric bikes.</span>
            </h2>
            <p className="text-[--c-text-muted] text-sm leading-relaxed mb-8 max-w-[500px]">
              We use electric bikes for last-mile collection. Lower cost. Zero emissions.
              But the real story is the bottle — not the bike.
            </p>
            <div className="mb-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-[--c-border] bg-[--c-surface-alt] px-4 py-2 text-sm font-medium text-[--c-text]">
                60% lower cost vs diesel
              </span>
              <span className="rounded-full border border-[--c-border] bg-[--c-surface-alt] px-4 py-2 text-sm font-medium text-[--c-text]">
                Zero emissions
              </span>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[--c-green] hover:underline"
              onClick={(e) => e.preventDefault()}
            >
              Our sustainability impact
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Image column */}
          <div className="ec-reveal overflow-hidden rounded-[--radius-xl] shadow-[var(--shadow-lift)]">
            <Image
              src="/images/ebike-collection.jpg"
              alt="ECOCAN electric cargo bike collecting bottles"
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-auto w-full object-cover"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwYTFhMGYiLz48L3N2Zz4="
            />
          </div>
        </div>
      </div>
    </section>
  )
}
