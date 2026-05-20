"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

interface HomeNavbarProps {
  onMenuToggle: () => void
}

const navLinks = [
  { label: "How It Works",           href: "#how-it-works", scroll: true },
  { label: "Recycling Loop",          href: "#ecommunity",   scroll: true },
  { label: "App & Rewards",           href: "#app",          scroll: true },
  { label: "Impact",                  href: "#impact",       scroll: true },
  { label: "For Brands & Investors",  href: "/solutions",    scroll: false },
]

export default function HomeNavbar({ onMenuToggle }: HomeNavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    setMobileOpen(false)
  }

  const toggleMobile = () => {
    setMobileOpen((v) => !v)
    onMenuToggle()
  }

  return (
    <header
      className="fixed left-0 right-0 top-0 z-[100] transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(8,10,8,0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/assets/images/ecocan-logo-alt.svg"
            alt="ECOCAN"
            width={108}
            height={36}
            className="h-8 w-auto brightness-0 invert"
            priority
          />
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => (link.scroll ? handleSection(e, link.href) : undefined)}
              className="text-[13px] font-semibold uppercase tracking-widest text-white/65 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/download"
            className="hidden rounded-full bg-[--c-green] px-6 py-2.5 text-[13px] font-bold text-black transition-all hover:bg-[--c-green-light] hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] md:flex"
          >
            Start Recycling
          </Link>
          <button
            onClick={toggleMobile}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="rounded-lg p-2 text-white hover:bg-white/10 lg:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#080A08] px-6 pb-8 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => (link.scroll ? handleSection(e, link.href) : undefined)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-white/70 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Link
            href="/download"
            className="mt-4 flex w-full items-center justify-center rounded-full bg-[--c-green] py-3 text-sm font-bold text-black"
          >
            Start Recycling
          </Link>
        </div>
      )}
    </header>
  )
}
