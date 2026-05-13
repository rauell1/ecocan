"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What is ECOCAN?",
    a: "ECOCAN is Africa's Circular Bottle Ecosystem, a Deposit Return System (DRS) that lets consumers return empty bottles and cans at ECO-Stations to receive monetary rewards, while helping brands fight counterfeiting and drive recycling.",
  },
  {
    q: "How do I return a bottle and get paid?",
    a: "Download the ECOCAN app, locate your nearest ECO-Station, scan the QR code on your bottle, and deposit it. Your account is credited instantly. Cash out via M-Pesa or your linked mobile wallet.",
  },
  {
    q: "Is ECOCAN available outside Kenya?",
    a: "ECOCAN is currently operational in Kenya and expanding across East Africa. Partner with us if you'd like to bring ECOCAN to your market.",
  },
  {
    q: "How does ECOCAN stop counterfeit drinks?",
    a: "Every genuine bottle carries a unique, tamper-evident QR code. Consumers scan it with the ECOCAN app to instantly verify authenticity before drinking. Counterfeit bottles fail verification and are flagged in real time.",
  },
  {
    q: "I'm a brand. How do I join the ECOCAN network?",
    a: "Fill in the partner form on our Solutions page or email us directly. Our team will walk you through onboarding, labelling requirements, ECO-Station coverage, and the DRS deposit structure.",
  },
  {
    q: "What bottles and cans does ECOCAN accept?",
    a: "ECOCAN currently accepts aluminium cans, PET plastic bottles, and glass bottles from registered brand partners. More material types are being added as the network grows.",
  },
  {
    q: "Is there a minimum amount before I can cash out?",
    a: "Yes, the current minimum cashout threshold is KES 50. There is no upper limit on withdrawals.",
  },
  {
    q: "How does ECOCAN's electric mobility component work?",
    a: "ECOCAN integrates with electric two-wheelers used by ECO-Couriers for last-mile collection. Part of the deposit pool funds the courier network, making the entire loop emission-free at the collection stage.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="py-24 px-6 bg-white"
    >
      <div className="max-w-[720px] mx-auto">
        {/* Header */}
        <p className="section-overline mb-3 text-center">Got questions?</p>
        <h2 className="section-headline text-center mb-4">Frequently Asked Questions</h2>
        <p className="section-body text-center mb-12 max-w-[520px] mx-auto">
          Everything you need to know about returning bottles, fighting counterfeits, and joining the ECOCAN network.
        </p>

        {/* Accordion */}
        <div className="divide-y divide-black/8">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group cursor-pointer"
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
                    className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
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
                  <p className="text-[16px] leading-relaxed text-eco-dark/70 pb-5 max-w-[620px]">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}  
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-eco-dark/60 mb-4 text-[15px]">Still have questions?</p>
          <a
            href="/contact"
            className="pill-btn pill-btn-filled text-sm !py-3 !px-8 inline-flex"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
