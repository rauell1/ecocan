"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import NavigationBar from "@/components/shared/navbar/navbar"
import HomeFooter from "@/components/sections/home-footer"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import { ArrowRight, CheckCircle2, Download, Landmark, LineChart, Shield, Sparkles } from "lucide-react"

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
    <div className="relative min-h-screen text-[#f5f5f5] flex flex-col" style={{ background: "#050705" }}>
      {/* Premium Clinical Navbar */}
      <NavigationBar
        logoSrc="/assets/images/ecocan-logo-alt.svg"
        className="bg-[#050705]/85 border-b border-white/5 backdrop-blur-md"
        linkColor="text-white/70"
      />

      {/* Grid Pattern Ambient Overlay */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[800px] opacity-15"
        style={{
          backgroundImage: `radial-gradient(ellipse at top, #22c55e 0%, transparent 60%),
            linear-gradient(rgba(255,255,255,0.01) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.01) 1px, transparent 1px)`,
          backgroundSize: "100% 100%, 48px 48px, 48px 48px",
        }}
      />

      {/* Subpage Main Wrapper */}
      <main ref={wrapRef} className="relative z-10 flex-grow pt-32 pb-24 px-[clamp(1rem,4vw,3rem)] max-w-6xl mx-auto w-full">
        {/* Storytelling B2B Hero */}
        <section className="mb-20 text-center md:text-left">
          <span className="inv-reveal section-overline text-emerald-400">Institutional circularity portal</span>
          <h1
            className="inv-reveal mb-6 font-serif-luxury text-luxury-gradient text-luxury-glow leading-none tracking-tight"
            style={{ fontSize: "clamp(2.75rem, 6.5vw, 5.5rem)", fontWeight: 300 }}
          >
            Capitalizing circular <br />
            <span className="font-sans font-light text-emerald-400">waste logistics.</span>
          </h1>
          <p className="inv-reveal mt-6 max-w-2xl text-[17px] leading-relaxed text-white/60">
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
                className="inv-reveal bg-[#080b08]/40 border border-white/5 rounded-3xl p-7 hover:border-emerald-500/20 hover:bg-[#0b100b]/50 transition-all duration-500"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                    <Icon size={20} strokeWidth={1.75} />
                  </div>
                  <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">0{i + 1}</span>
                </div>
                <h3 className="text-3xl font-serif-luxury text-white mb-2 leading-none">{metric.value}</h3>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-400 mb-3">
                  {metric.label}
                </p>
                <p className="text-[13px] leading-relaxed text-white/50">{metric.desc}</p>
              </SpotlightCard>
            )
          })}
        </section>

        {/* Pitch Deck Form & Value Proposition Split Grid */}
        <section className="grid gap-12 lg:grid-cols-12 items-start">
          {/* Circular Infrastructure Pitch Text */}
          <div className="lg:col-span-5 space-y-8 inv-reveal">
            <div>
              <h2 className="text-2xl font-serif-luxury text-white mb-4">Investment Merits</h2>
              <p className="text-sm leading-relaxed text-white/60">
                ECOCAN drives tangible circularity by linking consumer smart validation devices
                to enterprise-grade collection centers. We mitigate brand counterfeit risk while building
                scalable green infrastructure.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Proven DRS Yield Efficiency</h4>
                  <p className="text-xs text-white/50 mt-1 leading-relaxed">
                    Closed-loop logistics capture 90%+ pure aluminium streams, outperforming landfill extraction costs.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Verified ESG Data Credentials</h4>
                  <p className="text-xs text-white/50 mt-1 leading-relaxed">
                    End-to-end serialized blockchain tags deliver certified green bond assurance audits.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Substantial Economic Uplift</h4>
                  <p className="text-xs text-white/50 mt-1 leading-relaxed">
                    Pioneering low-barrier microfinance deposits, routing payouts directly to M-PESA mobile wallets.
                  </p>
                </div>
              </div>
            </div>

            {/* Aesthetic clinical decorative outline */}
            <div className="border border-white/5 rounded-2xl p-6 bg-[#080b08]/20 backdrop-blur-sm">
              <p className="text-xs italic text-emerald-400/80 leading-relaxed">
                &ldquo;Scaling real circular frameworks requires high-yield structural logistics combined with high-fidelity consumer engagement incentives.&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-7 w-7 rounded-full bg-emerald-500/20 flex items-center justify-center text-[10px] font-bold text-emerald-400">
                  EC
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-white">Circular Infrastructure</p>
                  <p className="text-[9px] text-white/40">Nairobi Headquarters</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Block styled as a clinical glass sheet */}
          <div className="lg:col-span-7 inv-reveal">
            <div
              className="relative border border-white/10 rounded-3xl p-8 md:p-10 overflow-hidden shadow-2xl bg-[#090d09]/45 backdrop-blur-xl"
              style={{
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 1px rgba(255,255,255,0.05)",
              }}
            >
              {/* Inner subtle glow */}
              <div className="absolute right-0 top-0 -mr-20 -mt-20 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div>
                    <h3 className="text-xl font-serif-luxury text-white mb-2">Request Pitch Deck & Circular</h3>
                    <p className="text-xs text-white/55">
                      Submit institutional details below to retrieve pre-offering financial circulars and deck access.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Elizabeth Wanjiku"
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder-white/20 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/35 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                        Corporate Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elizabeth@fund.com"
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder-white/20 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/35 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="org" className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                        Institution / Organization
                      </label>
                      <input
                        id="org"
                        type="text"
                        required
                        value={formData.org}
                        onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                        placeholder="Green Growth Capital"
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder-white/20 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/35 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="tier" className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                        Investment Range / Interest
                      </label>
                      <select
                        id="tier"
                        value={formData.tier}
                        onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm text-white/80 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/35 transition-colors"
                        style={{ colorScheme: "dark" }}
                      >
                        <option>Seed Round ($100k - $500k)</option>
                        <option>Series A ($500k - $2M)</option>
                        <option>Circularity Bonds ($50k+)</option>
                        <option>Strategic JV Partnerships</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                      Message / Investment Alignment (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your ESG investment thesis or specific regional circular logistics alignment interests..."
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder-white/20 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/35 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-emerald-500 hover:bg-emerald-400 disabled:bg-emerald-600/50 text-[#050705] font-bold text-xs uppercase tracking-[0.15em] py-4 transition duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_24px_rgba(16,185,129,0.3)]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 border-2 border-[#050705] border-t-transparent rounded-full animate-spin" />
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
                <div className="text-center py-10 relative z-10 space-y-6">
                  <div className="mx-auto h-16 w-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={36} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-serif-luxury text-white mb-2">Request Received</h3>
                    <p className="text-sm text-white/60 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-white font-semibold">{formData.name}</span>.
                      Your alignment parameters have been compiled under <span className="text-emerald-400 font-semibold">{formData.org}</span>.
                      Our circular finance desk will contact you within 24 hours.
                    </p>
                  </div>

                  {/* Pulsing premium mock download button */}
                  <div className="pt-6">
                    <a
                      href="/documents/krones.pdf"
                      download="Ecocan_Corporate_Pitch_Deck.pdf"
                      className="inline-flex items-center gap-3 rounded-full bg-white text-black hover:bg-emerald-400 hover:text-black font-semibold text-xs uppercase tracking-[0.16em] px-8 py-4 transition-all duration-300 animate-pulse hover:animate-none hover:shadow-[0_0_24px_rgba(255,255,255,0.2)]"
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
