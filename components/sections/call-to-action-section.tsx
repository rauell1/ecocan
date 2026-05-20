"use client"

import Link from "next/link"
import { ArrowRight, Recycle, ShieldCheck, Smartphone } from "lucide-react"
import { useEcReveal } from "@/lib/use-ec-reveal"
import { SectionOverline } from "@/components/shared/section-shell"

const actions = [
  {
    icon: Smartphone,
    label: "Consumer",
    title: "Download & Start Earning",
    desc: "Scan drinks, return empties, collect M-PESA rewards today.",
    cta: "Get the App",
    href: "/download",
    color: "#4ade80",
  },
  {
    icon: ShieldCheck,
    label: "Brand / Producer",
    title: "Protect Your Products",
    desc: "Add ECOCAN QR to your bottles and eliminate counterfeits at the source.",
    cta: "Talk to Us",
    href: "/solutions",
    color: "#60a5fa",
  },
  {
    icon: Recycle,
    title: "Host an ECO-Station",
    label: "Retailer",
    desc: "Earn host rewards and bring a recycling hub to your community.",
    cta: "Register Now",
    href: "/contact",
    color: "#facc15",
  },
]

export default function CallToActionSection() {
  const ref = useEcReveal()

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="section-py section-dark relative w-full overflow-hidden"
    >
      {/* Ambient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-12 blur-3xl"
          style={{ background: "radial-gradient(circle,#16a34a 0%,transparent 70%)" }} />
      </div>

      <div className="site-container relative z-10">
        <div className="ec-reveal mb-4 text-center">
          <SectionOverline className="justify-center">Get Involved</SectionOverline>
          <h2 className="section-heading mx-auto max-w-[660px]">
            Your role in closing
            <span style={{ background: "linear-gradient(90deg,#4ade80,#22c55e)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {" "}the loop.
            </span>
          </h2>
        </div>
        <p className="ec-reveal mb-16 mx-auto max-w-[500px] text-center text-sm leading-relaxed text-[--c-text-muted]">
          Whether you recycle one bottle or supply ten thousand, every action counts. Find your role and start today.
        </p>

        {/* 3 action cards */}
        <div className="mb-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {actions.map((a, i) => (
            <div key={i} className="ec-reveal ec-card group relative flex flex-col overflow-hidden p-8">
              <div className="absolute inset-x-0 top-0 h-[3px]" style={{ background: a.color }} />
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                style={{ background: a.color + "1a", color: a.color }}
              >
                <a.icon size={22} strokeWidth={1.5} />
              </div>
              <span className="mb-1 text-[11px] font-bold uppercase tracking-widest" style={{ color: a.color }}>{a.label}</span>
              <h3 className="mb-2 text-base font-bold tracking-tight">{a.title}</h3>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-[--c-text-muted]">{a.desc}</p>
              <Link
                href={a.href}
                className="inline-flex items-center gap-1.5 text-sm font-bold transition-colors"
                style={{ color: a.color }}
              >
                {a.cta} <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        {/* Primary CTA */}
        <div className="ec-reveal flex flex-wrap justify-center gap-4">
          <Link
            href="/download"
            className="group inline-flex items-center gap-3 rounded-full bg-[--c-green] px-10 py-4 font-bold text-black shadow-lg shadow-emerald-600/20 hover:bg-[--c-green-light] hover:shadow-[0_0_32px_rgba(34,197,94,0.35)] active:scale-95"
          >
            Start Recycling
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 font-semibold text-white/65 transition-all hover:border-white/40 hover:text-white"
          >
            Explore Business Solutions
          </Link>
        </div>
      </div>
    </section>
  )
}
