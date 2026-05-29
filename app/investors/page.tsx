"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import NavigationBar from "@/components/shared/navbar/navbar"
import HomeFooter from "@/components/sections/home-footer"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import {
  ArrowRight,
  CheckCircle2,
  Download,
  Landmark,
  LineChart,
  Shield,
  Sparkles,
} from "lucide-react"

const metrics = [
  {
    value: "KES 8.2M",
    label: "Distributed Liquidity",
    desc: "Capital paid directly to micro-collection partners, stimulating low-income circular jobs.",
    icon: Landmark,
  },
  {
    value: "14.8M+",
    label: "Cans Recycled",
    desc: "Seamlessly validated, tracked, and returned into secondary aluminium production streams.",
    icon: Sparkles,
  },
  {
    value: "99.2%",
    label: "Audited Transparency",
    desc: "Prismatic serial registry preventing plastic duplication or deposit claim double-spending.",
    icon: Shield,
  },
  {
    value: "3 East African States",
    label: "Regional Pipeline",
    desc: "Scalable smart DRS framework launching regional collection corridors through 2026.",
    icon: LineChart,
  },
]

export default function InvestorsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    org: "",
    tier: "Seed Round ($100k - $500k)",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const wrapRef = useRef<HTMLDivElement>(null)

  // Smooth scroll Lenis implementation
  useEffect(() => {
    let lenisInst: any = null
    import("lenis").then(({ default: Lenis }) => {
      lenisInst = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
      })

      function raf(time: number) {
        if (lenisInst) {
          lenisInst.raf(time)
          requestAnimationFrame(raf)
        }
      }

      requestAnimationFrame(raf)
    })

    return () => {
      if (lenisInst) {
        lenisInst.destroy()
      }
    }
  }, [])

  // Entrance animations for premium clinical styling
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const els = wrapRef.current?.querySelectorAll(".inv-reveal")
      if (els && els.length > 0) {
        gsap.fromTo(
          els,
          { opacity: 0, y: 32, filter: "blur(8px)" },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.1,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: wrapRef.current,
              start: "top 80%",
              once: true,
            },
          }
        )
      }
    }, wrapRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.org) return

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1200)
  }

  return (
    <div
      className="relative flex min-h-screen flex-col text-[var(--c-text)]"
      style={{ background: "var(--c-bg)" }}
    >
      {/* Premium Clinical Navbar */}
      <NavigationBar
        logoSrc="/assets/images/ecocan-logo-alt.svg"
        className="bg-[var(--c-bg)]/85 border-b border-[var(--c-border)] backdrop-blur-md"
        linkColor="text-[var(--c-text-muted)]"
      />

      {/* Grid Pattern Ambient Overlay */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[800px] opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(ellipse at top, var(--c-green) 0%, transparent 60%),
            linear-gradient(rgba(13,18,13,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(13,18,13,0.1) 1px, transparent 1px)`,
          backgroundSize: "100% 100%, 48px 48px, 48px 48px",
        }}
      />

      {/* Subpage Main Wrapper */}
      <main
        ref={wrapRef}
        className="relative z-10 mx-auto w-full max-w-6xl flex-grow px-[clamp(1rem,4vw,3rem)] pb-24 pt-32"
      >
        {/* Storytelling B2B Hero */}
        <section className="mb-20 text-center md:text-left">
          <span className="inv-reveal section-overline text-[var(--c-green)]">
            Institutional circularity portal
          </span>
          <h1
            className="inv-reveal font-serif-luxury text-luxury-gradient text-luxury-glow mb-6 leading-none tracking-tight"
            style={{ fontSize: "clamp(2.75rem, 6.5vw, 5.5rem)", fontWeight: 300 }}
          >
            Capitalizing circular <br />
            <span className="font-sans font-light text-[var(--c-green)]">waste logistics.</span>
          </h1>
          <p className="inv-reveal mt-6 max-w-2xl text-[17px] leading-relaxed text-[var(--c-text-muted)]">
            ECOCAN deploys robust, serialized smart deposit return networks across East Africa,
            delivering certified ESG environmental data loop integrity, formalizing the informal
            collection economy, and capturing massive recycled aluminium yields.
          </p>
        </section>

        {/* Dynamic Metric Spotlight Cards */}
        <section className="mb-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, i) => {
            const Icon = metric.icon
            return (
              <SpotlightCard
                key={metric.label}
                className="inv-reveal hover:border-[var(--c-green)]/20 rounded-3xl border border-[var(--c-border)] bg-white p-7 transition-all duration-500 hover:bg-white"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--c-green-dim)] text-[var(--c-green)]">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <span className="text-[var(--c-text-muted)]/20 text-[10px] font-bold uppercase tracking-widest">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-serif-luxury mb-2 text-3xl leading-none text-[var(--c-text)]">
                  {metric.value}
                </h3>
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--c-green)]">
                  {metric.label}
                </p>
                <p className="text-[13px] leading-relaxed text-[var(--c-text-muted)]">
                  {metric.desc}
                </p>
              </SpotlightCard>
            )
          })}
        </section>

        {/* Pitch Deck Form & Value Proposition Split Grid */}
        <section className="grid items-start gap-12 lg:grid-cols-12">
          {/* Circular Infrastructure Pitch Text */}
          <div className="inv-reveal space-y-8 lg:col-span-5">
            <div>
              <h2 className="font-serif-luxury mb-4 text-2xl text-[var(--c-text)]">
                Investment Merits
              </h2>
              <p className="text-sm leading-relaxed text-[var(--c-text-muted)]">
                ECOCAN drives tangible circularity by linking consumer smart validation devices to
                enterprise-grade collection centers. We mitigate brand counterfeit risk while
                building scalable green infrastructure.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--c-green)]" />
                <div>
                  <h4 className="text-sm font-semibold text-[var(--c-text)]">
                    Proven DRS Yield Efficiency
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--c-text-muted)]">
                    Closed-loop logistics capture 90%+ pure aluminium streams, outperforming
                    landfill extraction costs.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--c-green)]" />
                <div>
                  <h4 className="text-sm font-semibold text-[var(--c-text)]">
                    Verified ESG Data Credentials
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--c-text-muted)]">
                    End-to-end serialized blockchain tags deliver certified green bond assurance
                    audits.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--c-green)]" />
                <div>
                  <h4 className="text-sm font-semibold text-[var(--c-text)]">
                    Substantial Economic Uplift
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--c-text-muted)]">
                    Pioneering low-barrier microfinance deposits, routing payouts directly to M-PESA
                    mobile wallets.
                  </p>
                </div>
              </div>
            </div>

            {/* Aesthetic clinical decorative outline */}
            <div className="rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface)] p-6 backdrop-blur-sm">
              <p className="text-[var(--c-green)]/80 text-xs italic leading-relaxed">
                &ldquo;Scaling real circular frameworks requires high-yield structural logistics
                combined with high-fidelity consumer engagement incentives.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--c-green-dim)] text-[10px] font-bold text-[var(--c-green)]">
                  EC
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--c-text)]">
                    Circular Infrastructure
                  </p>
                  <p className="text-[9px] text-[var(--c-text-muted)]">Nairobi Headquarters</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Block styled as a clinical glass sheet */}
          <div className="inv-reveal lg:col-span-7">
            <div
              className="relative overflow-hidden rounded-3xl border border-[var(--c-border)] bg-white/80 p-8 shadow-2xl backdrop-blur-xl md:p-10"
              style={{
                boxShadow:
                  "0 25px 50px -12px rgba(13, 18, 13, 0.05), inset 0 1px 1px rgba(255, 255, 255, 0.6)",
              }}
            >
              {/* Inner subtle glow */}
              <div className="pointer-events-none absolute right-0 top-0 -mr-20 -mt-20 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  <div>
                    <h3 className="font-serif-luxury mb-2 text-xl text-[var(--c-text)]">
                      Request Pitch Deck & Circular
                    </h3>
                    <p className="text-xs text-[var(--c-text-muted)]">
                      Submit institutional details below to retrieve pre-offering financial
                      circulars and deck access.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="name"
                        className="text-[11px] font-bold uppercase tracking-wider text-[var(--c-text-muted)]"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Elizabeth Wanjiku"
                        className="placeholder-[var(--c-text-muted)]/30 focus:border-[var(--c-green)]/50 focus:ring-[var(--c-green)]/35 w-full rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] px-4 py-3 text-sm text-[var(--c-text)] transition-colors focus:outline-none focus:ring-1"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-[11px] font-bold uppercase tracking-wider text-[var(--c-text-muted)]"
                      >
                        Corporate Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elizabeth@fund.com"
                        className="placeholder-[var(--c-text-muted)]/30 focus:border-[var(--c-green)]/50 focus:ring-[var(--c-green)]/35 w-full rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] px-4 py-3 text-sm text-[var(--c-text)] transition-colors focus:outline-none focus:ring-1"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="org"
                        className="text-[11px] font-bold uppercase tracking-wider text-[var(--c-text-muted)]"
                      >
                        Institution / Organization
                      </label>
                      <input
                        id="org"
                        type="text"
                        required
                        value={formData.org}
                        onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                        placeholder="Green Growth Capital"
                        className="placeholder-[var(--c-text-muted)]/30 focus:border-[var(--c-green)]/50 focus:ring-[var(--c-green)]/35 w-full rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] px-4 py-3 text-sm text-[var(--c-text)] transition-colors focus:outline-none focus:ring-1"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="tier"
                        className="text-[11px] font-bold uppercase tracking-wider text-[var(--c-text-muted)]"
                      >
                        Investment Range / Interest
                      </label>
                      <select
                        id="tier"
                        value={formData.tier}
                        onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                        className="focus:border-[var(--c-green)]/50 focus:ring-[var(--c-green)]/35 w-full rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] px-4 py-3 text-sm text-[var(--c-text-muted)] transition-colors focus:outline-none focus:ring-1"
                        style={{ colorScheme: "light" }}
                      >
                        <option>Seed Round ($100k - $500k)</option>
                        <option>Series A ($500k - $2M)</option>
                        <option>Circularity Bonds ($50k+)</option>
                        <option>Strategic JV Partnerships</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="text-[11px] font-bold uppercase tracking-wider text-[var(--c-text-muted)]"
                    >
                      Message / Investment Alignment (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your ESG investment thesis or specific regional circular logistics alignment interests..."
                      className="placeholder-[var(--c-text-muted)]/30 focus:border-[var(--c-green)]/50 focus:ring-[var(--c-green)]/35 w-full resize-none rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] px-4 py-3 text-sm text-[var(--c-text)] transition-colors focus:outline-none focus:ring-1"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="disabled:bg-[var(--c-green)]/50 flex w-full items-center justify-center gap-2 rounded-full bg-[var(--c-green)] py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-[var(--c-green-light)] hover:shadow-[0_0_24px_rgba(21,128,61,0.25)]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <ArrowRight size={14} strokeWidth={2.5} />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="relative z-10 space-y-6 py-10 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--c-green-dim)] text-[var(--c-green)]">
                    <CheckCircle2 size={36} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif-luxury mb-2 text-2xl text-[var(--c-text)]">
                      Request Received
                    </h3>
                    <p className="mx-auto max-w-md text-sm leading-relaxed text-[var(--c-text-muted)]">
                      Thank you,{" "}
                      <span className="font-semibold text-[var(--c-text)]">{formData.name}</span>.
                      Your alignment parameters have been compiled under{" "}
                      <span className="font-semibold text-[var(--c-green)]">{formData.org}</span>.
                      Our circular finance desk will contact you within 24 hours.
                    </p>
                  </div>

                  {/* Pulsing premium mock download button */}
                  <div className="pt-6">
                    <a
                      href="/documents/krones.pdf"
                      download="Ecocan_Corporate_Pitch_Deck.pdf"
                      className="inline-flex animate-pulse items-center gap-3 rounded-full bg-[var(--c-green)] px-8 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:animate-none hover:bg-[var(--c-green-light)] hover:shadow-[0_0_24px_rgba(21,128,61,0.25)]"
                    >
                      <Download size={14} strokeWidth={2.5} />
                      Download Private Pitch Deck
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <HomeFooter />
    </div>
  )
}
