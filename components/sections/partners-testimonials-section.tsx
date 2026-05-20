"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Quote } from "lucide-react"
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
  {
    quote: "The M-PESA reward isn't huge, but it adds up. And I know I'm doing something good.",
    name: "Amina",
    role: "ECOnsumer, Kisumu",
    image: "/images/testimonial-jane.jpg",
  },
]

export default function PartnersTestimonialsSection() {
  const ref = useEcReveal()

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="w-full section-py section-white"
    >
      <div className="site-container">

        {/* Header */}
        <div className="ec-reveal mb-4">
          <SectionOverline>Real Stories</SectionOverline>
          <h2 className="section-heading">Real impact. Real pride.</h2>
        </div>
        <p className="ec-reveal mb-14 max-w-lg text-sm leading-relaxed text-[--c-text-muted]">
          Kenyans choosing to recycle are earning more, drinking safer, and feeling the pride of closing the loop.
        </p>

        {/* Testimonials — 2-up on desktop */}
        <div className="mb-20 grid grid-cols-1 gap-5 md:grid-cols-2">
          {testimonials.map((t, idx) => (
            <div key={t.name} className="ec-reveal ec-card relative flex flex-col gap-6 p-8">
              <Quote size={28} className="text-[--c-green]/30" />
              <p className="flex-1 text-base leading-relaxed text-[--c-text]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 border-t border-[--c-border] pt-5">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-bold">{t.name}</p>
                  <p className="text-xs text-[--c-text-muted]">{t.role}</p>
                </div>
                {idx === 0 && (
                  <span className="ml-auto rounded-full border border-[--c-green]/30 bg-[--c-green]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[--c-green]">
                    Featured
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Partners banner */}
        <div
          className="ec-reveal relative mb-10 overflow-hidden rounded-[--radius-xl]"
          style={{ height: "clamp(160px,22vw,280px)" }}
        >
          <Image
            src="/images/supermarket-interior.jpg"
            alt="ECOCAN collection point inside a supermarket"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
            loading="lazy"
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwYTFhMGYiLz48L3N2Zz4="
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080A08]/80 via-[#080A08]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-7 md:p-10">
            <SectionOverline className="!text-[--c-green-light] [&::before]:bg-[--c-green-light]">Our Partners</SectionOverline>
            <h3 className="text-xl font-bold text-white md:text-2xl">Trusted across the value chain</h3>
          </div>
        </div>

        {/* Partner pills */}
        <div className="ec-reveal mb-6 flex flex-wrap gap-2">
          {partners.map((name) => (
            <span
              key={name}
              className="rounded-full border border-[--c-border] bg-[--c-surface-alt] px-4 py-1.5 text-sm font-medium text-[--c-text-muted]"
            >
              {name}
            </span>
          ))}
        </div>

        <Link
          href="/contact"
          className="ec-reveal inline-flex items-center gap-2 text-sm font-bold text-[--c-green] hover:underline"
        >
          Become a partner <ArrowRight size={14} />
        </Link>

      </div>
    </section>
  )
}
