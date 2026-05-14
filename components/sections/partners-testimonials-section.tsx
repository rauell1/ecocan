"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const partnerCategories = [
  { label: "Retailers", names: ["Jaza", "Quickmart", "Carrefour", "Naivas"] },
  { label: "Producers", names: ["Coca-Cola", "Keroche", "KWAL", "Del Monte"] },
  { label: "Logistics", names: ["Roam Air", "Bolt", "Glovo", "Sendy"] },
  { label: "Investors", names: ["Antler", "Unreasonable", "Villgro", "NEFCO"] },
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
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const headingEls = sectionRef.current?.querySelectorAll(".pt-heading")
      if (headingEls && headingEls.length > 0) {
        gsap.fromTo(
          headingEls,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
          }
        )
      }

      const partnerRows = sectionRef.current?.querySelectorAll(".partner-row")
      if (partnerRows && partnerRows.length > 0) {
        gsap.fromTo(
          partnerRows,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.07,
            ease: "power2.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
          }
        )
      }

      const cards = sectionRef.current?.querySelectorAll(".testimonial-card")
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 65%", once: true },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="w-full bg-white py-[120px] md:py-[160px]">
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Partner image banner */}
        <div
          className="pt-heading relative mb-16 overflow-hidden rounded-3xl"
          style={{ height: "clamp(180px, 28vw, 340px)" }}
        >
          <Image
            src="/images/supermarket-interior.jpg"
            alt="ECOCAN collection point in supermarket"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-eco-dark/70 via-eco-dark/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-12">
            <p className="section-overline mb-2 !text-primary">Our Partners</p>
            <h2 className="section-headline text-white">Trusted across the value chain</h2>
          </div>
        </div>

        {/* Partner pills */}
        <div className="mb-14 space-y-4">
          {partnerCategories.map((cat) => (
            <div key={cat.label} className="partner-row flex flex-wrap items-center gap-3">
              <span className="w-24 shrink-0 text-xs font-semibold uppercase tracking-wider text-eco-dark/40">
                {cat.label}
              </span>
              <div className="flex flex-wrap gap-2">
                {cat.names.map((name) => (
                  <span
                    key={name}
                    className="rounded-full bg-eco-light px-4 py-1.5 text-sm font-medium text-eco-dark/70"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <Link
            href="/contact"
            className="pt-heading mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:underline"
          >
            Become a partner <ArrowRight size={16} />
          </Link>
        </div>

        {/* Testimonials */}
        <h2 className="pt-heading section-headline mb-10 text-eco-dark">
          Real impact. Real pride.
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="testimonial-card rounded-[24px] border border-gray-100 bg-white p-8 shadow-card"
            >
              <p className="mb-6 text-lg italic leading-relaxed text-eco-dark/80">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-eco-dark">{t.name}</p>
                  <p className="text-sm text-eco-dark/50">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
