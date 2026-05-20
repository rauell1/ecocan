"use client"

import Image from "next/image"
import Link from "next/link"

const footerLinks = {
  Product: [
    { label: "How it works", href: "#how-it-works" },
    { label: "Download", href: "/download" },
    { label: "FAQ", href: "#faq" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Impact", href: "/impact" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Cookie Settings", href: "/cookies" },
  ],
}

export default function HomeFooter() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0a0a0a]">
      <div className="px-[clamp(1.25rem,4vw,3rem)] py-14">
        <Link href="/" className="mb-10 inline-flex">
          <Image
            src="/assets/images/ecocan-logo-alt.svg"
            alt="ECOCAN"
            width={108}
            height={36}
            className="h-8 w-auto brightness-0 invert"
          />
        </Link>

        <div className="mb-10 grid gap-8 sm:grid-cols-3">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
                {title}
              </p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/55 transition hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-xs text-white/40">
          © {new Date().getFullYear()} ECOCAN Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
