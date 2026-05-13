"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const footerColumns = [
  {
    title: "Navigate",
    links: [
      { label: "Home", href: "/" },
      { label: "Solutions", href: "/solutions" },
      { label: "About Us", href: "/about-us" },
      { label: "News", href: "/news" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Download App", href: "/download" },
      { label: "Register ECO-Station", href: "/contact" },
      { label: "Register as Producer", href: "/contact" },
      { label: "ECO-Events", href: "/contact" },
      { label: "ECOCAN Market", href: "/ecocan-market" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/" },
      { label: "Terms & Conditions", href: "/" },
      { label: "GDPR Compliant", href: "/" },
      { label: "ODPC Compliant", href: "/" },
    ],
  },
]

const socials = [
  {
    name: "Facebook",
    href: "https://facebook.com/EcocanAfrica",
    icon: "/assets/icons/facebook.svg",
  },
  { name: "X (Twitter)", href: "https://twitter.com/EcocanAfrica", icon: "/assets/icons/X.svg" },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ecocanafrica",
    icon: "/assets/icons/Instagram.svg",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@ecocanafrica",
    icon: "/assets/icons/tiktok.svg",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/ecocan",
    icon: "/assets/icons/linkedin.svg",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@EcocanAfrica",
    icon: "/assets/icons/youtube.svg",
  },
]

export default function HomeFooter() {
  const [email, setEmail] = useState("")

  return (
    <footer className="w-full pb-10 pt-20" style={{ background: "#1A2B3C" }}>
      <div className="mx-auto max-w-[1280px] px-6">
        {/* Top: logo + tagline + newsletter */}
        <div className="mb-16 grid grid-cols-1 gap-12 border-b border-white/10 pb-16 lg:grid-cols-2">
          <div>
            <Image
              src="/assets/images/logo-curved-white.svg"
              alt="ECOCAN"
              width={160}
              height={56}
              className="mb-4 h-12 w-auto"
            />
            <p className="max-w-sm text-base leading-relaxed text-white/50">
              Africa&apos;s circular bottle ecosystem - closing the loop on waste, one bottle at a
              time.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="opacity-60 transition-opacity hover:opacity-100"
                >
                  <Image src={s.icon} alt={s.name} width={28} height={28} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-2 text-sm font-semibold text-white">Join Our Newsletter</h4>
            <p className="mb-4 text-sm text-white/50">
              Stay updated on ECOCAN&apos;s impact and initiatives.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/40 focus:ring-2 focus:ring-primary"
              />
              <button className="whitespace-nowrap rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Middle: nav columns + offices */}
        <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Kenya office */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Image src="/assets/images/kenya.png" alt="Kenya" width={20} height={20} />
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Kenya</h4>
            </div>
            <div className="space-y-1 text-sm text-white/60">
              <p>Plessey House, Boricho Rd</p>
              <p>P.O.BOX 5686-00100</p>
              <p>Nairobi, Kenya</p>
              <p className="mt-2">info@ecocanafrica.com</p>
              <p>+254 738 203 770</p>
            </div>
          </div>

          {/* Finland office */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Image src="/assets/images/finland.png" alt="Finland" width={20} height={20} />
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Finland</h4>
            </div>
            <div className="space-y-1 text-sm text-white/60">
              <p>Korkeavuorenkatu 7c 49</p>
              <p>00140 Helsinki</p>
              <p className="mt-2">info@ecocanafrica.com</p>
              <p>+358 44 081 6059</p>
            </div>
          </div>
        </div>

        {/* Compliance badges */}
        <div className="mb-10 flex items-center gap-6">
          <Image src="/assets/images/gdpr-badge.svg" alt="GDPR Compliant" width={80} height={95} />
          <Image src="/assets/images/odpc-badge.svg" alt="ODPC Compliant" width={80} height={95} />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} ECOCAN. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm text-white/40 transition-colors hover:text-primary">
              Privacy
            </Link>
            <Link href="/" className="text-sm text-white/40 transition-colors hover:text-primary">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
