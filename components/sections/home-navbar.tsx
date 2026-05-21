"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

interface HomeNavbarProps {
  onMenuToggle: () => void
}

const navLinks = [
  { label: "How It Works", href: "#how-it-works", scroll: true },
  { label: "Impact", href: "#impact", scroll: true },
  { label: "Community", href: "#ecommunity", scroll: true },
  { label: "Investors", href: "#investors", scroll: true },
]

export default function HomeNavbar({ onMenuToggle }: HomeNavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    navLinks.forEach((link) => {
      const id = link.href.slice(1)
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => {
      navLinks.forEach((link) => {
        const id = link.href.slice(1)
        const el = document.getElementById(id)
        if (el) observer.unobserve(el)
      })
    }
  }, [])

  const handleSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    
    // Smooth scrolling that works nicely with Lenis
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(href, { offset: -80, duration: 1.2 })
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    }
    
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
        background: scrolled ? "rgba(5,7,5,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
    >
      <div className="grid grid-cols-[auto_1fr_auto] items-center px-6 py-4 md:px-10">
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

        <nav className="hidden items-center justify-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => (link.scroll ? handleSection(e, link.href) : undefined)}
                className={`relative py-2 text-[14px] font-medium tracking-wide transition-all duration-300 ${
                  isActive ? "text-emerald-400" : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-[-2px] left-0 right-0 h-[1.5px] bg-emerald-400 rounded-full" />
                )}
              </a>
            )
          })}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <Link
            href="/download"
            className="hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-6 py-2 text-[13px] font-medium text-white transition-all duration-300 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/20 md:flex"
          >
            Download App
          </Link>
          <button
            onClick={toggleMobile}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="rounded-lg p-2.5 text-white/70 hover:bg-white/10 hover:text-white lg:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-black/95 px-6 pb-8 pt-4 backdrop-blur-2xl lg:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => (link.scroll ? handleSection(e, link.href) : undefined)}
                  className={`relative rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 ${
                    isActive ? "bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-400" : "text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
