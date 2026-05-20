"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"

interface HomeNavbarProps {
  onMenuToggle: () => void
}

const navLinks = [
  { label: "How Recycling Works", href: "#how-it-works", scroll: true },
  { label: "Rewards", href: "#app", scroll: true },
  { label: "Find ECO-Stations", href: "#faq", scroll: true },
  { label: "For Brands & Investors", href: "/solutions", scroll: false },
  { label: "About", href: "/about-us", scroll: false },
]

export default function HomeNavbar({ onMenuToggle }: HomeNavbarProps) {
  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="fixed left-0 right-0 top-6 z-[100] flex justify-center px-4">
      <nav className="flex w-full max-w-[1100px] items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl">
        {/* Logo */}
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

        {/* Desktop Nav links */}
        <div className="hidden items-center gap-8 px-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => (link.scroll ? handleSectionClick(e, link.href) : null)}
              className="cursor-pointer text-[13px] font-bold uppercase tracking-widest text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/download"
            className="hidden rounded-lg border border-white/10 bg-white/10 px-5 py-2.5 text-[13px] font-bold text-white transition-all hover:bg-white hover:text-black md:flex"
          >
            Start Recycling
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
  )
}
