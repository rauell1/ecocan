"use client"

import { useState } from "react"
import Link from "next/link"

const footerColumns = {
  Download: [
    { label: "App Store", href: "https://apps.apple.com" },
    { label: "Google Play", href: "https://play.google.com" },
  ],
  Join: [
    { label: "ECOmmunity", href: "#ecommunity" },
    { label: "Find a collection point", href: "#how-it-works" },
    { label: "For producers", href: "#ecocan-model" },
  ],
  Company: [
    { label: "About", href: "/about-us" },
    { label: "Investors", href: "#investors" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "GDPR", href: "#" },
    { label: "ODPC compliant", href: "#" },
  ],
}

export default function HomeFooter() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Subscribed: ${email}`)
    setEmail("")
  }

  return (
    <footer className="relative z-20 w-full overflow-hidden border-t border-white/10 bg-[#050705]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.03),transparent_40%)]" />

      <div className="mx-auto max-w-7xl px-[clamp(1.25rem,4vw,3rem)] py-16">
        <div className="mb-16 grid gap-12 lg:grid-cols-[2fr_3fr]">
          {/* Newsletter and Brand info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-flex">
              <span className="font-serif-luxury text-2xl font-bold tracking-widest text-white">
                ECOCAN
              </span>
            </Link>

            <div className="max-w-md">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-white/80">
                Stay updated on ECOCAN
              </h4>
              <p className="mb-4 text-xs text-white/50">
                Subscribe to our newsletter for latest updates on circular infrastructure and
                rewards.
              </p>

              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-grow rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white placeholder-white/30 transition-all focus:border-emerald-500/50 focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-full bg-emerald-500 px-5 py-2 text-xs font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-emerald-400"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div className="mt-2 text-xs text-white/40">
              <span className="font-semibold text-emerald-400/80">Offices:</span> Kenya · Finland
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {Object.entries(footerColumns).map(([title, links]) => (
              <div key={title}>
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                  {title}
                </p>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs text-white/55 transition-colors duration-300 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 md:flex-row">
          <p className="font-mono text-[11px] text-white/40">
            © {new Date().getFullYear()} ECOCAN. Africa&apos;s circular bottle ecosystem.
          </p>

          <div className="flex items-center gap-6">
            {["Instagram", "TikTok", "LinkedIn", "X"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs text-white/40 transition-colors duration-300 hover:text-emerald-400"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
