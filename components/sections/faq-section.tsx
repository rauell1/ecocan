"use client"

import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "Do I need a machine to return bottles?",
    a: "No. You can return bottles today at any ECO-Station counter. Our partner scans your bottle with a phone, verifies it, and sends money instantly to your ECO-wallet. ECOcan machines are coming soon — but the system works right now.",
  },
  {
    q: "What is ECOCAN?",
    a: "Africa's Circular Bottle Ecosystem — a deposit return system that rewards you for returning empty bottles, while helping brands fight counterfeiting and drive recycling across the continent.",
  },
  {
    q: "How do I get rewarded?",
    a: "Download the ECOCAN app, find your nearest ECO-Station or counter, scan the QR code on your bottle, and return it. Your ECO-wallet is credited instantly — withdraw to M-Pesa or bank anytime.",
  },
  {
    q: "How does ECOCAN stop counterfeit drinks?",
    a: "Every genuine bottle carries a unique, tamper-evident QR code. Scan it in the app before drinking — green means safe, red means fake. Counterfeit bottles fail instantly.",
  },
  {
    q: "I'm a brand — how do I join?",
    a: "Fill in the partner form on our Contact page. Our team will walk you through onboarding, labelling requirements, and the deposit structure.",
  },
  {
    q: "Is ECOCAN available outside Kenya?",
    a: "We're operational in Kenya and actively expanding across East Africa. Reach out to bring ECOCAN to your market.",
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
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.09,
            ease: "power3.out",
            scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="faq" className="bg-white px-6 py-24 md:py-32">
      <div className="mx-auto max-w-[680px]">
        {/* Minimal header */}
        <p className="faq-animate section-overline mb-3 text-center">Questions</p>
        <h2 className="faq-animate section-headline mb-14 text-center text-eco-dark">
          Everything you need to know
        </h2>

        {/* Accordion */}
        <div className="faq-animate divide-y divide-black/[0.07]">
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
                    className={`text-[16px] font-semibold leading-snug transition-colors ${
                      isOpen ? "text-primary" : "text-eco-dark group-hover:text-primary"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all ${
                      isOpen
                        ? "bg-primary text-white"
                        : "bg-black/[0.06] text-eco-dark group-hover:bg-primary group-hover:text-white"
                    }`}
                  >
                    {isOpen ? <Minus size={13} /> : <Plus size={13} />}
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? "400px" : "0px", opacity: isOpen ? 1 : 0 }}
                >
                  <p className="pb-5 text-[15px] leading-relaxed text-eco-dark/65">{faq.a}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Minimal bottom CTA */}
        <div className="faq-animate mt-12 text-center">
          <a href="/contact" className="pill-btn pill-btn-filled inline-flex !px-8 !py-3 text-sm">
            Still have questions? Contact us
          </a>
        </div>
      </div>
    </section>
  )
}
