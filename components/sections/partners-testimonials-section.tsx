"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEcReveal } from "@/lib/use-ec-reveal"
import { SectionOverline } from "@/components/shared/section-shell"

const partners = [
  "Quickmart", "Carrefour", "Naivas", "Coca-Cola",
  "Keroche", "KWAL", "Roam", "Antler", "Villgro", "NEFCO",
]

const testimonials = [
  {
    quote: "I don't think about the money. I think about my children drinking safe water.",
    name: "Mama Jane",
    role: "Consumer, Nairobi",
    image: "/images/testimonial-jane.jpg",
  },
  {
    quote: "My customers feel proud to recycle here. The foot traffic is a bonus.",
    name: "Supermarket Owner",
    role: "Retail partner",
    image: "/images/testimonial-owner.jpg",
  },
  {
    quote: "Putting a bottle in the bin feels wrong now. Returning it feels right.",
    name: "James",
    role: "ECOnsumer, Mombasa",
    image: "/images/testimonial-james.jpg",
  },
]

export default function PartnersTestimonialsSection() {
  const ref = useEcReveal()

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="w-full section-py section-alt"
    >
      <div className="site-container">
        {/* Partner banner */}
        <div
          className="ec-reveal relative mb-16 overflow-hidden rounded-[--radius-xl]"
          style={{ height: "clamp(160px,25vw,320px)" }}
        >
          <Image
            src="/images/supermarket-interior.jpg"
            alt="ECOCAN collection point in supermarket"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwYTFhMGYiLz48L3N2Zz4="
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[--c-dark]/70 via-[--c-dark]/15 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-10">
            <SectionOverline className="!text-[--c-green-light] [&::before]:bg-[--c-green-light]">Our Partners</SectionOverline>
            <h2 className="section-heading section-heading-inv">Trusted across the value chain</h2>
          </div>
        </div>

        {/* Partner pills */}
        <div className="ec-reveal mb-5 flex flex-wrap gap-2">
          {partners.map((name) => (
            <span
              key={name}
              className="rounded-full border border-[--c-border] bg-[--c-surface] px-4 py-1.5 text-sm font-medium text-[--c-text-muted]"
            >
              {name}
            </span>
          ))}
        </div>

        <Link
          href="/contact"
          className="ec-reveal mb-16 inline-flex items-center gap-2 text-sm font-semibold text-[--c-green] hover:underline"
        >
          Become a partner <ArrowRight size={14} />
        </Link>

        {/* Testimonials */}
        <h2 className="ec-reveal section-heading mb-10">Real impact. Real pride.</h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="ec-reveal ec-card flex flex-col gap-6 p-7">
              <p className="text-sm italic leading-relaxed text-[--c-text-muted]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-[--c-text]">{t.name}</p>
                  <p className="text-xs text-[--c-text-faint]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
