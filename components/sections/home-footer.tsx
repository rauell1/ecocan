"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
];

const socials = [
  { name: "Facebook", href: "https://facebook.com/EcocanAfrica", icon: "/assets/icons/facebook.svg" },
  { name: "X (Twitter)", href: "https://twitter.com/EcocanAfrica", icon: "/assets/icons/X.svg" },
  { name: "Instagram", href: "https://www.instagram.com/ecocanafrica", icon: "/assets/icons/Instagram.svg" },
  { name: "TikTok", href: "https://www.tiktok.com/@ecocanafrica", icon: "/assets/icons/tiktok.svg" },
  { name: "LinkedIn", href: "https://linkedin.com/company/ecocan", icon: "/assets/icons/linkedin.svg" },
  { name: "YouTube", href: "https://www.youtube.com/@EcocanAfrica", icon: "/assets/icons/youtube.svg" },
];

export default function HomeFooter() {
  const [email, setEmail] = useState("");

  return (
    <footer className="w-full pt-20 pb-10" style={{ background: "#1A2B3C" }}>
      <div className="max-w-[1280px] mx-auto px-6">

        {/* Top: logo + tagline + newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 pb-16 border-b border-white/10">
          <div>
            <Image
              src="/assets/images/logo-curved-white.svg"
              alt="ECOCAN"
              width={160}
              height={56}
              className="h-12 w-auto mb-4"
            />
            <p className="text-white/50 text-base max-w-sm leading-relaxed">
              Africa&apos;s circular bottle ecosystem — closing the loop on waste, one bottle at a time.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socials.map((s) => (
                <Link
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="opacity-60 hover:opacity-100 transition-opacity"
                >
                  <Image src={s.icon} alt={s.name} width={28} height={28} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-2">Join Our Newsletter</h4>
            <p className="text-white/50 text-sm mb-4">Stay updated on ECOCAN&apos;s impact and initiatives.</p>
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-white/10 text-white text-sm px-4 py-3 rounded-xl outline-none placeholder:text-white/40 focus:ring-2 focus:ring-primary border border-white/10"
              />
              <button className="bg-primary text-white text-sm font-semibold px-6 py-3 rounded-xl hover:bg-primary-dark transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Middle: nav columns + offices */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/70 text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Kenya office */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/assets/images/kenya.png" alt="Kenya" width={20} height={20} />
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Kenya</h4>
            </div>
            <div className="space-y-1 text-white/60 text-sm">
              <p>Plessey House, Boricho Rd</p>
              <p>P.O.BOX 5686-00100</p>
              <p>Nairobi, Kenya</p>
              <p className="mt-2">info@ecocanafrica.com</p>
              <p>+254 738 203 770</p>
            </div>
          </div>

          {/* Finland office */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/assets/images/finland.png" alt="Finland" width={20} height={20} />
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Finland</h4>
            </div>
            <div className="space-y-1 text-white/60 text-sm">
              <p>Korkeavuorenkatu 7c 49</p>
              <p>00140 Helsinki</p>
              <p className="mt-2">info@ecocanafrica.com</p>
              <p>+358 44 081 6059</p>
            </div>
          </div>
        </div>

        {/* Compliance badges */}
        <div className="flex items-center gap-6 mb-10">
          <Image src="/assets/images/gdpr-badge.svg" alt="GDPR Compliant" width={80} height={95} />
          <Image src="/assets/images/odpc-badge.svg" alt="ODPC Compliant" width={80} height={95} />
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">© {new Date().getFullYear()} ECOCAN. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-white/70 text-sm hover:text-white transition-colors">Privacy</Link>
            <Link href="/" className="text-white/70 text-sm hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
