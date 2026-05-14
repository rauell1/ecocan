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

const newsItems = [
  {
    title: "ECOCAN secures early-stage funding from global impact investors",
    date: "Jan 2026",
    href: "/news",
  },
  {
    title: "Electric bike fleet launches across Nairobi collection routes",
    date: "Dec 2025",
    href: "/news",
  },
  {
    title: "ECOCAN signs landmark partnership with leading supermarket chain",
    date: "Nov 2025",
    href: "/news",
  },
]

export default function PartnersTestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const headingEls = sectionRef.current?.querySelectorAll(".heading-animate")
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
      const partnersArea = sectionRef.current?.querySelector(".partners-area")
      if (partnersArea) {
        const partnerRows = partnersArea.querySelectorAll(".partner-row")
        if (partnerRows.length > 0) {
          gsap.fromTo(
            partnerRows,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.06,
              ease: "power2.out",
              scrollTrigger: { trigger: partnersArea, start: "top 85%", once: true },
            }
          )
        }
      }
      const testimonialsArea = sectionRef.current?.querySelector(".testimonials-area")
      if (testimonialsArea) {
        const cards = testimonialsArea.querySelectorAll(".testimonial-card")
        if (cards.length > 0) {
          gsap.fromTo(
            cards,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.15,
              ease: "power2.out",
              scrollTrigger: { trigger: testimonialsArea, start: "top 80%", once: true },
            }
          )
        }
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="w-full bg-white py-[120px] md:py-[160px]">
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Retail partner image banner */}
        <div
          className="heading-animate relative mb-16 overflow-hidden rounded-3xl"
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
            <h2 className="section-headline text-white">
              Trusted by leaders across the value chain
            </h2>
          </div>
        </div>

        {/* Partner pills grid */}
        <div className="partners-area mb-6">
          <div className="space-y-5">
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
          </div>
          <Link
            href="/contact"
            className="heading-animate mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:underline"
          >
            Become a partner <ArrowRight size={16} />
          </Link>
        </div>

        {/* Partner retail image */}
        <div
          className="heading-animate relative mb-20 overflow-hidden rounded-2xl"
          style={{ height: "clamp(160px, 22vw, 280px)" }}
        >
          <Image
            src="/images/partner-retail.jpg"
            alt="ECOCAN partner retail counter"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-eco-dark/30" />
        </div>

        {/* Testimonials */}
        <div className="testimonials-area">
          <h2 className="section-headline heading-animate mb-12 text-eco-dark">
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

        {/* News */}
        <div className="mt-20">
          <p className="section-overline heading-animate mb-2">As seen in</p>
          <div className="heading-animate mb-10 flex flex-wrap gap-6">
            {["BBC", "CNN", "Business Daily", "The Standard", "TechCrunch"].map((name) => (
              <span key={name} className="text-xl font-bold tracking-tight text-eco-dark/30">
                {name}
              </span>
            ))}
          </div>
          <h3 className="heading-animate mb-8 text-2xl font-semibold text-eco-dark">
            ECOCAN in the news
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {newsItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="heading-animate group block cursor-pointer"
              >
                <p className="mb-2 text-sm text-eco-dark/40">{item.date}</p>
                <h4 className="font-semibold leading-snug text-eco-dark transition-colors group-hover:text-primary">
                  {item.title}
                </h4>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:underline">
                  Read more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
          <Link
            href="/news"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:underline"
          >
            All news <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
