"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { useEcReveal } from "@/lib/use-ec-reveal"
import { motion, AnimatePresence } from "framer-motion"
import { SpotlightCard } from "@/components/ui/spotlight-card"

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
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative w-full overflow-hidden bg-[#050705] py-[clamp(6rem,12vw,10rem)]"
    >
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.03),transparent_40%)]" />
      
      <div className="relative z-10 px-[clamp(1.25rem,4vw,3rem)] max-w-4xl mx-auto">
        <h2
          className="ec-reveal mb-12 text-center font-bold text-[#f5f5f5]"
          style={{ 
            fontSize: "clamp(2.5rem,5vw,4rem)", 
            letterSpacing: "-0.03em",
            textShadow: "0 0 40px rgba(16,185,129,0.15)"
          }}
        >
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={faq.q} className="ec-reveal">
                <SpotlightCard
                  className="p-0 border-white/5 bg-[#0c100c]/30 hover:border-emerald-500/25 transition-all duration-500 rounded-xl"
                  spotlightColor="rgba(16,185,129,0.1)"
                  spotlightSize={280}
                >
                  <button
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left focus:outline-none"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-[#f5f5f5] md:text-lg transition-colors duration-300 group-hover:text-emerald-300">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={20}
                      className="shrink-0 text-white/50 transition-transform duration-500"
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
                        <div className="px-6 pb-5 text-sm text-white/60 md:text-base leading-relaxed border-t border-white/5 pt-4">
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
      </div>
    </section>
  )
}
