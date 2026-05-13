"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

interface HomeNavbarProps {
  scrollEnabled: boolean;
  onMenuToggle: () => void;
}

const sectionLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "ECOmmunity", href: "#ecommunity" },
  { label: "Investors", href: "#investors" },
  { label: "Impact", href: "#impact" },
];

const pageLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about-us" },
];

export default function HomeNavbar({ scrollEnabled, onMenuToggle }: HomeNavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!scrollEnabled) return;
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollEnabled]);

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (!scrollEnabled) return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      style={{ height: 72 }}
    >
      <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleSectionClick(e, "#hero")}
          className="shrink-0 flex items-center gap-2"
        >
          <Image
            src="/images/ecocan-logo.png"
            alt="ECOCAN"
            width={80}
            height={32}
            className="h-8 w-auto"
            priority
          />
          <span
            className={`hidden md:inline text-xs font-semibold tracking-[0.18em] uppercase ${
              scrolled ? "text-eco-dark/80" : "text-white/80"
            }`}
          >
            Circular Bottle Ecosystem
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          {sectionLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleSectionClick(e, link.href)}
              className={`text-[15px] font-medium transition-colors hover:text-primary ${
                scrolled ? "text-eco-dark" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          {/* Divider */}
          <span className={`h-4 w-px ${scrolled ? "bg-eco-dark/20" : "bg-white/30"}`} />
          {pageLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[15px] font-medium transition-colors hover:text-primary ${
                scrolled ? "text-eco-dark" : "text-white/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/download"
            className={`hidden md:inline-flex pill-btn text-sm !py-2.5 !px-6 ${
              scrolled
                ? "pill-btn-filled"
                : "border border-white/60 text-white hover:bg-white hover:text-eco-dark"
            }`}
          >
            Download App
          </Link>
          <button
            onClick={onMenuToggle}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled ? "text-eco-dark" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}
