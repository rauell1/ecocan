"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useEcReveal } from "@/lib/use-ec-reveal"

const faqs = [
  {
    q: "How do I verify a can?",
    a: "Open the app and scan the QR code. You get an instant authenticity result.",
  },
  {
    q: "How do I earn rewards?",
    a: "Return empties at an ECO-Station. Rewards are paid to your wallet.",
  },
  {
    q: "Where can I return cans?",
    a: "Use the app map to find nearby stations. New stations are added weekly.",
  },
  {
    q: "Who can host a station?",
    a: "Retailers can apply to host returns. Our team handles setup and training.",
  },
  { q: "Is ECOCAN only in Kenya?", a: "Kenya is live today. Regional rollout is in progress." },
]

export default function FAQSection() {
  const ref = useEcReveal()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative w-full overflow-hidden bg-[#0a0a0a] py-[clamp(5rem,10vw,9rem)]"
    >
      <div className="px-[clamp(1.25rem,4vw,3rem)]">
        <h2
          className="ec-reveal mb-10 font-bold text-[#f5f5f5]"
          style={{ fontSize: "clamp(2rem,4vw,3.5rem)", letterSpacing: "-0.02em" }}
        >
          FAQ
        </h2>

        <div>
          {faqs.map((faq, i) => (
            <div key={faq.q} className="ec-reveal border-b border-white/10 py-2">
              <button
                className="flex w-full items-center justify-between gap-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-base font-semibold text-[#f5f5f5]">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className="shrink-0 text-white/50 transition-transform duration-300"
                  style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>
              <div
                style={{
                  maxHeight: open === i ? "320px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.35s cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                <p className="pb-4 text-sm text-white/50">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
