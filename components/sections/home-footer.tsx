"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const footerColumns = [
  {
    title: "Navigate",
    links: [
      { label: "Home",         href: "/" },
      { label: "Solutions",    href: "/solutions" },
      { label: "About Us",     href: "/about-us" },
      { label: "News",         href: "/news" },
      { label: "Contact",      href: "/contact" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Download App",         href: "/download" },
      { label: "Register ECO-Station", href: "/contact" },
      { label: "Register as Producer", href: "/contact" },
      { label: "ECOCAN Market",         href: "/ecocan-market" },
    ],
  },
]

const socials = [
  { name: "Facebook",   href: "https://facebook.com/EcocanAfrica",              icon: "/assets/icons/facebook.svg" },
  { name: "X (Twitter)",href: "https://twitter.com/EcocanAfrica",               icon: "/assets/icons/X.svg" },
  { name: "Instagram",  href: "https://www.instagram.com/ecocanafrica",         icon: "/assets/icons/Instagram.svg" },
  { name: "TikTok",     href: "https://www.tiktok.com/@ecocanafrica",           icon: "/assets/icons/tiktok.svg" },
  { name: "LinkedIn",   href: "https://linkedin.com/company/ecocan",            icon: "/assets/icons/linkedin.svg" },
  { name: "YouTube",    href: "https://www.youtube.com/@EcocanAfrica",          icon: "/assets/icons/youtube.svg" },
]

export default function HomeFooter() {
  const [email, setEmail] = useState("")

  return (
    <footer className="w-full pb-10 pt-20" style={{ background: "#0d0d0d" }}>
      <div className="mx-auto max-w-[1280px] px-6">

        {/* Top: logo + tagline + newsletter */}
        <div className="mb-16 grid grid-cols-1 gap-12 border-b border-white/10 pb-16 lg:grid-cols-2">
          <div>
            <Image src="/assets/images/logo-curved-white.svg" alt="ECOCAN" width={160} height={56} className="mb-4 h-12 w-auto" />
            <p className="max-w-xs text-sm leading-relaxed text-white/45">
              Africa&apos;s circular bottle ecosystem.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <Link key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="opacity-50 transition-opacity hover:opacity-100">
                  <Image src={s.icon} alt={s.name} width={26} height={26} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-semibold text-white">Newsletter</h4>
            <p className="mb-4 text-sm text-white/45">Stay updated on ECOCAN&apos;s impact.</p>
            <div className="flex gap-2">
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                aria-label="Email address for newsletter"
                className="flex-1 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/35 focus:ring-2 focus:ring-primary focus-visible:ring-2 focus-visible:ring-primary"
              />
              <button type="submit" aria-label="Subscribe" className="whitespace-nowrap rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Middle: 2 nav columns + 2 office columns */}
        <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/55 transition-colors hover:text-primary">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Kenya */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Image src="/assets/images/kenya.png" alt="Kenya" width={18} height={18} />
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Kenya</h4>
            </div>
            <div className="space-y-1 text-sm text-white/55">
              <p>Plessey House, Boricho Rd</p>
              <p>Nairobi, Kenya</p>
              <p className="mt-2">info@ecocanafrica.com</p>
            </div>
          </div>

          {/* Finland */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Image src="/assets/images/finland.png" alt="Finland" width={18} height={18} />
              <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Finland</h4>
            </div>
            <div className="space-y-1 text-sm text-white/55">
              <p>Korkeavuorenkatu 7c 49</p>
              <p>Helsinki, Finland</p>
              <p className="mt-2">info@ecocanafrica.com</p>
            </div>
          </div>
        </div>

        {/* Compliance badges */}
        <div className="mb-10 flex items-center gap-5">
          <Image src="/assets/images/gdpr-badge.svg" alt="GDPR Compliant" width={72} height={86} />
          <Image src="/assets/images/odpc-badge.svg" alt="ODPC Compliant" width={72} height={86} />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/35">\u00a9 {new Date().getFullYear()} ECOCAN. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm text-white/35 transition-colors hover:text-primary">Privacy</Link>
            <Link href="/" className="text-sm text-white/35 transition-colors hover:text-primary">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
