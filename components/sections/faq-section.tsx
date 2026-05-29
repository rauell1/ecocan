"use client"

import { useState } from "react"
import { ChevronDown, MessageSquare } from "lucide-react"
import { useEcReveal } from "@/lib/use-ec-reveal"
import { motion, AnimatePresence } from "framer-motion"
import { SpotlightCard } from "@/components/ui/spotlight-card"

const faqs = [
  {
    q: "What bottles can I return?",
    a: "Aluminum, PET, glass, cartons with ECOCAN code.",
  },
  {
    q: "How do I get paid?",
    a: "Instant to ECO-wallet → bank or M-PESA.",
  },
  {
    q: "Where are collection points?",
    a: "Supermarkets, ECO-Stations – see app map.",
  },
  {
    q: "Who pays for this?",
    a: "Producers + deposit system + impact investors.",
  },
  {
    q: "Is this really zero emissions?",
    a: "Electric bikes + efficient routing = near zero.",
  },
  {
    q: "How can I host an ECO-Station?",
    a: "Retailers and supermarkets can apply online to host manual collection counters. ECOCAN handles setup, training, and zero emission last-mile pickup logistics.",
  },
]

export default function FAQSection() {
  const ref = useEcReveal()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative w-full overflow-hidden border-b border-[var(--landing-divider)] bg-transparent py-[clamp(6rem,12vw,10rem)]"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.03),transparent_40%)]" />

      <div className="relative z-10 mx-auto max-w-4xl px-[clamp(1.25rem,4vw,3rem)]">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="ec-reveal section-overline mb-3 justify-center text-emerald-400">SUPPORT</p>
          <h2
            className="ec-reveal font-serif-luxury text-luxury-gradient"
            style={{
              fontSize: "clamp(2.5rem,5vw,3.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: "1.1",
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto mb-12 flex max-w-3xl flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={faq.q} className="ec-reveal">
                <SpotlightCard
                  className="rounded-[20px] border border-[var(--landing-glass-border)] bg-[var(--landing-glass-bg)] p-0 shadow-xl transition-all duration-500 hover:border-emerald-500/20"
                  spotlightColor="rgba(16,185,129,0.06)"
                  spotlightSize={280}
                >
                  <button
                    className="py-5.5 flex w-full items-center justify-between gap-6 px-8 text-left focus:outline-none"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-[15px] font-medium text-[var(--c-text)] transition-colors duration-300">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className="shrink-0 text-[var(--c-text-muted)] transition-transform duration-500"
                      style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-[var(--landing-divider)] px-8 pb-5 pt-3 text-[14px] font-normal leading-relaxed text-[var(--c-text-muted)]">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </SpotlightCard>
              </div>
            )
          })}
        </div>

        <div className="ec-reveal mt-12 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--landing-pill-border)] bg-[var(--landing-pill-bg)] px-8 py-3 text-xs font-bold uppercase tracking-wider text-[var(--landing-pill-text)] backdrop-blur-md transition-all duration-300 hover:border-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-400"
          >
            <MessageSquare size={14} />
            <span>Full FAQ</span>
          </a>
        </div>
      </div>
    </section>
  )
}
