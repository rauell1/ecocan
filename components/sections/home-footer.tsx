"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, Instagram, Linkedin } from "lucide-react"

const footerLinks = {
  Product: [
    { label: "How It Works",  href: "#how-it-works" },
    { label: "Download App",  href: "/download" },
    { label: "ECO-Stations",  href: "/stations" },
    { label: "Rewards",       href: "/rewards" },
  ],
  Company: [
    { label: "About",         href: "/about" },
    { label: "Impact Report", href: "/impact" },
    { label: "Careers",       href: "/careers" },
    { label: "Press",         href: "/press" },
  ],
  Partners: [
    { label: "For Brands",    href: "/solutions" },
    { label: "For Investors", href: "/investors" },
    { label: "Become a Retailer", href: "/retailers" },
    { label: "API Access",    href: "/api" },
  ],
}

const socials = [
  { icon: Twitter,   href: "https://twitter.com/ecocan",   label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/ecocan", label: "Instagram" },
  { icon: Linkedin,  href: "https://linkedin.com/company/ecocan", label: "LinkedIn" },
  { icon: Github,    href: "https://github.com/rauell1/ecocan",   label: "GitHub" },
]

export default function HomeFooter() {
  return (
    <footer className="relative w-full overflow-hidden border-t border-white/06 bg-[--c-dark]">

      {/* Very subtle green ambient */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 opacity-06 blur-[120px]"
           style={{ background: "radial-gradient(ellipse,#22c55e 0%,transparent 70%)" }} />

      <div className="site-container relative z-10 py-16 md:py-20">

        {/* Top row: logo + social */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-14">
          <Link href="/" className="flex shrink-0 items-center group">
            <Image
              src="/assets/images/ecocan-logo-alt.svg"
              alt="ECOCAN"
              width={108}
              height={36}
              className="h-8 w-auto brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </Link>
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/40 transition-all hover:border-white/25 hover:text-white/80"
              >
                <Icon size={15} strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col}>
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-white/30">{col}</p>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="text-sm text-white/50 transition-colors hover:text-white/90"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter micro-form */}
          <div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.18em] text-white/30">Stay updated</p>
            <p className="mb-4 text-sm text-white/40 leading-relaxed">Impact reports, new stations, product news.</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 rounded-lg border border-white/10 bg-white/05 px-3 py-2 text-sm text-white placeholder:text-white/25 focus:border-[--c-green]/50 focus:outline-none focus:ring-1 focus:ring-[--c-green]/30 transition-colors"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-[--c-green] px-3 py-2 text-xs font-bold text-black hover:bg-[--c-green-light] transition-colors"
              >
                →
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="ec-divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/25">
          <p>© {new Date().getFullYear()} ECOCAN Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link href="/terms"   className="hover:text-white/60 transition-colors">Terms of Use</Link>
            <Link href="/cookies" className="hover:text-white/60 transition-colors">Cookie Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
