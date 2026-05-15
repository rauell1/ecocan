"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const partners = [
  "Quickmart",
  "Carrefour",
  "Naivas",
  "Coca-Cola",
  "Keroche",
  "KWAL",
  "Roam",
  "Antler",
  "Villgro",
  "NEFCO",
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
      const els = sectionRef.current?.querySelectorAll(".pt-animate")
      if (els && els.length > 0) {
        gsap.fromTo(
          els,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="w-full bg-white py-[120px] md:py-[160px]">
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Partner banner image */}
        <div
          className="pt-animate relative mb-16 overflow-hidden rounded-3xl"
          style={{ height: "clamp(160px, 25vw, 320px)" }}
        >
          <Image
            src="/images/supermarket-interior.jpg"
            alt="ECOCAN collection point in supermarket"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-eco-dark/65 via-eco-dark/15 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-10">
            <p className="section-overline mb-1 !text-primary">Our Partners</p>
            <h2 className="section-headline text-white">Trusted across the value chain</h2>
          </div>
        </div>

        {/* Partner pills — flat, no categories */}
        <div className="pt-animate mb-5 flex flex-wrap gap-2">
          {partners.map((name) => (
            <span
              key={name}
              className="rounded-full bg-[#f0f0eb] px-4 py-1.5 text-sm font-medium text-eco-dark/65"
            >
              {name}
            </span>
          ))}
        </div>
        <Link
          href="/contact"
          className="pt-animate mb-16 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          Become a partner <ArrowRight size={14} />
        </Link>

        {/* Testimonials */}
        <h2 className="pt-animate section-headline mb-10 text-eco-dark">
          Real impact. Real pride.
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="pt-animate rounded-2xl border border-black/[0.06] bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="mb-6 text-[16px] italic leading-relaxed text-eco-dark/75">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-eco-dark">{t.name}</p>
                  <p className="text-xs text-eco-dark/45">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
