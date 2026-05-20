"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Recycle } from "lucide-react";

interface HomeNavbarProps {
  onMenuToggle: () => void;
}

const navLinks = [
  { label: "How Recycling Works", href: "#how-it-works", scroll: true },
  { label: "Rewards & ECOmmunity", href: "#ecommunity", scroll: true },
  { label: "For Consumers", href: "/solutions/consumer", scroll: false },
  { label: "For Brands & Investors", href: "/solutions", scroll: false },
  { label: "About Ecocan", href: "/about-us", scroll: false },
];

export default function HomeNavbar({ onMenuToggle }: HomeNavbarProps) {
  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    scroll: boolean
  ) => {
    if (!scroll) return;
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-6 left-0 right-0 z-[100] flex justify-center px-4">
      <nav
        className="w-full max-w-[1100px] flex items-center justify-between px-6 py-3 rounded-2xl 
        bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
      >
        {/* Logo + consumer tag */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/assets/images/ecocan-logo-alt.svg"
              alt="ECOCAN"
              width={96}
              height={36}
              className="h-8 w-auto brightness-0 invert"
              priority
            />
          </Link>
          <span className="hidden md:inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-100 border border-emerald-400/30">
            <Recycle size={12} />
            Consumer Recycling
          </span>
        </div>

        {/* Desktop Nav links */}
        <div className="hidden lg:flex items-center gap-8 px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleSectionClick(e, link.href, link.scroll)}
              className="text-[13px] font-bold text-white/80 hover:text-white transition-colors uppercase tracking-widest cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/download"
            className="hidden md:flex rounded-lg bg-white/10 px-5 py-2.5 text-[13px] font-bold text-white hover:bg-white hover:text-black transition-all border border-white/10"
          >
            Download Consumer App
          </Link>
          <button
            onClick={onMenuToggle}
            className="rounded-lg p-2 text-white hover:bg-white/10 lg:hidden"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>
    </header>
  );
}
