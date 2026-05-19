"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useEcReveal } from "@/lib/use-ec-reveal"
import { SectionOverline } from "@/components/shared/section-shell"

const faqs = [
  { q: "How does the QR code verification work?",                    a: "Each bottle has a unique, tamper-evident QR code linked to our digital ledger. Scanning it instantly confirms the drink's authenticity and its chain of custody." },
  { q: "How do I get paid for returning bottles?",                   a: "After dropping a bottle at any ECO-Station, your account is credited automatically. Cash out instantly to M-PESA or your linked bank account — no minimum balance." },
  { q: "What happens to the bottles after I return them?",           a: "Verified bottles are collected by our electric cargo bike fleet, sorted, and delivered to certified recyclers. The whole chain is tracked on our platform." },
  { q: "Can any retailer become an ECO-Station host?",              a: "Yes. Any shop, kiosk, or supermarket can apply. We provide the hardware, training, and a monthly host reward for every bottle returned through your location." },
  { q: "Is ECOCAN available outside Kenya?",                         a: "We're live in Kenya and actively expanding. Tanzania and Uganda are next on the roadmap. Sign up to be notified when we launch in your country." },
]

export default function FAQSection() {
  const ref = useEcReveal()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative w-full section-py section-alt overflow-hidden"
    >
      <div className="site-container">
        <div className="ec-reveal mb-14">
          <SectionOverline>FAQ</SectionOverline>
          <h2 className="section-heading">Common questions.</h2>
        </div>

        <div className="max-w-[720px] flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div key={i} className="ec-reveal ec-card overflow-hidden">
              <button
                className="w-full flex items-center justify-between gap-6 p-7 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-base font-semibold tracking-tight">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className="shrink-0 text-[--c-text-muted] transition-transform duration-300"
                  style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
              <div
                style={{ maxHeight: open === i ? "320px" : "0", overflow: "hidden", transition: "max-height 0.35s cubic-bezier(0.16,1,0.3,1)" }}
              >
                <p className="px-7 pb-7 text-sm text-[--c-text-muted] leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
