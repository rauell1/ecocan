"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Star } from "lucide-react"
import { SectionOverline } from "@/components/shared/section-shell"

const testimonials = [
  {
    quote: "ECOCAN helped us hit our EPR targets while building genuine loyalty with consumers who earn from our bottles.",
    name: "James K.",
    role: "Sustainability Lead, major East African brewer",
    rating: 5,
  },
  {
    quote: "The integration was painless — our QR codes were live within a week. The counterfeit reports dropped 60%.",
    name: "Sandra M.",
    role: "Operations Director, bottling plant",
    rating: 5,
  },
  {
    quote: "I earn KES 400 a week just from bottles I find on my route. It&apos;s become a real income stream.",
    name: "Peter O.",
    role: "Boda boda rider & ECOCAN collector, Kisumu",
    rating: 5,
  },
]

const partnerLogos = [
  { name: "NEMA Kenya",    placeholder: "NEMA" },
  { name: "Kenya Breweries", placeholder: "KBL" },
  { name: "AMESA",         placeholder: "AMESA" },
  { name: "GreenPath",     placeholder: "GP" },
  { name: "Safaricom",     placeholder: "SCOM" },
]

export default function PartnersTestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const targets = sectionRef.current?.querySelectorAll(".ec-reveal")
      if (!targets || targets.length === 0) return
      gsap.fromTo(
        targets,
        { opacity: 0, y: 28, filter: "blur(6px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, stagger: 0.10, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 72%", once: true } }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative w-full section-py section-dark overflow-hidden">

      {/* Subtle grid bg */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.6) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="site-container relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="ec-reveal">
            <SectionOverline inv>Voices</SectionOverline>
          </div>
          <h2 className="ec-reveal section-heading section-heading-inv mb-5">
            Trusted by brands.<br />
            <span style={{ background: "linear-gradient(90deg,#86efac,#22c55e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Loved by collectors.
            </span>
          </h2>
        </div>

        {/* Partner logos strip */}
        <div className="ec-reveal mb-14 overflow-hidden">
          <div className="ec-marquee gap-8 items-center">
            {[...partnerLogos, ...partnerLogos].map((p, i) => (
              <div
                key={i}
                className="flex h-12 min-w-[120px] items-center justify-center rounded-xl border border-white/08 bg-white/04 px-6 text-xs font-bold uppercase tracking-widest text-white/30"
              >
                {p.placeholder}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map(({ quote, name, role, rating }) => (
            <div key={name} className="ec-reveal ec-card-dark flex flex-col p-7">
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="mb-6 text-sm text-white/65 leading-relaxed italic flex-1" dangerouslySetInnerHTML={{ __html: `&ldquo;${quote}&rdquo;` }} />
              <div>
                <p className="text-sm font-bold text-white">{name}</p>
                <p className="text-xs text-white/35 mt-0.5">{role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
