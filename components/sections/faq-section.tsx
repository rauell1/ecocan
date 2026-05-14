"use client"

import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "What is ECOCAN?",
    a: "ECOCAN is Africa's Circular Bottle Ecosystem — a Deposit Return System (DRS) that lets consumers return empty bottles and cans at ECO-Stations to receive monetary rewards, while helping brands fight counterfeiting and drive recycling.",
  },
  {
    q: "How do I return a bottle and get paid?",
    a: "Download the ECOCAN app, locate your nearest ECO-Station, scan the QR code on your bottle, and deposit it. Your account is credited instantly. Cash out via M-Pesa or your linked mobile wallet.",
  },
  {
    q: "How does ECOCAN stop counterfeit drinks?",
    a: "Every genuine bottle carries a unique, tamper-evident QR code. Consumers scan it with the ECOCAN app to instantly verify authenticity before drinking. Counterfeit bottles fail verification and are flagged in real time.",
  },
  {
    q: "I'm a brand — how do I join the ECOCAN network?",
    a: "Fill in the partner form on our Contact page or email us directly. Our team will walk you through onboarding, labelling requirements, ECO-Station coverage, and the DRS deposit structure.",
  },
  {
    q: "Is ECOCAN available outside Kenya?",
    a: "ECOCAN is currently operational in Kenya and expanding across East Africa. Reach out if you'd like to bring ECOCAN to your market.",
  },
]

export default function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const els = sectionRef.current?.querySelectorAll(".faq-animate")
      if (els && els.length > 0) {
        gsap.fromTo(
          els,
          { opacity: 0, y: 36 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="faq" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-[720px]">
        {/* Header */}
        <p className="faq-animate section-overline mb-3 text-center">Got questions?</p>
        <h2 className="faq-animate section-headline mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <p className="faq-animate section-body mx-auto mb-12 max-w-[520px] text-center">
          Everything you need to know about returning bottles, fighting counterfeits, and joining
          the ECOCAN network.
        </p>

        {/* Accordion */}
        <div className="faq-animate divide-black/8 divide-y">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i}>
                <button
                  onClick={() => toggle(i)}
                  className="group flex w-full cursor-pointer items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-[17px] font-semibold leading-snug transition-colors ${
                      isOpen ? "text-primary" : "text-eco-dark group-hover:text-primary"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all ${
                      isOpen
                        ? "bg-primary text-white"
                        : "bg-black/6 text-eco-dark group-hover:bg-primary group-hover:text-white"
                    }`}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? "400px" : "0px", opacity: isOpen ? 1 : 0 }}
                >
                  <p className="max-w-[620px] pb-5 text-[16px] leading-relaxed text-eco-dark/70">
                    {faq.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="faq-animate mt-12 text-center">
          <p className="mb-4 text-[15px] text-eco-dark/60">Still have questions?</p>
          <a href="/contact" className="pill-btn pill-btn-filled inline-flex !px-8 !py-3 text-sm">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}
