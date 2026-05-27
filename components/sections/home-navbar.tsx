"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Sun, Moon } from "lucide-react"

interface HomeNavbarProps {
  onMenuToggle: () => void
}

const navLinks = [
  { label: "Home", href: "/", isPage: true },
  { label: "How It Works", href: "#how-it-works", isPage: false },
  { label: "ECOmmunity", href: "#ecommunity", isPage: false },
  { label: "For Producers", href: "#ecocan-model", isPage: false },
  { label: "Investors", href: "#investors", isPage: false },
  { label: "About", href: "/about-us", isPage: true },
  { label: "Contact", href: "/contact", isPage: true },
]

export default function HomeNavbar({ onMenuToggle }: HomeNavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [theme, setTheme] = useState<"dark" | "light">("dark")

  useEffect(() => {
    // Determine initial theme on client mount
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute("data-theme", savedTheme)
    } else {
      document.documentElement.setAttribute("data-theme", "dark")
    }
  }, [])

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark"
    setTheme(nextTheme)
    document.documentElement.setAttribute("data-theme", nextTheme)
    localStorage.setItem("theme", nextTheme)
  }

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
      if (!link.isPage) {
        const id = link.href.slice(1)
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      }
    })

    return () => {
      navLinks.forEach((link) => {
        if (!link.isPage) {
          const id = link.href.slice(1)
          const el = document.getElementById(id)
          if (el) observer.unobserve(el)
        }
      })
    }
  }, [])

  const handleSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isPage: boolean) => {
    if (isPage) return // Let standard next/link handles it

    e.preventDefault()

    // Smooth scrolling that works nicely with Lenis
    if ((window as any).lenis) {
      ;(window as any).lenis.scrollTo(href, { offset: -80, duration: 1.2 })
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
          <span className="font-serif-luxury mr-2 flex items-center gap-1 text-xl font-bold tracking-widest text-white">
            EC
            <span className="relative mx-[1px] inline-flex h-3.5 w-3.5 shrink-0 items-center justify-center rounded-full border border-emerald-400 bg-transparent">
              <span className="h-1 w-1 rounded-full bg-white" />
            </span>
            CAN
          </span>
        </Link>

        <nav className="hidden items-center justify-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = !link.isPage && activeSection === link.href.slice(1)

            if (link.isPage) {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative py-2 text-[14px] font-medium tracking-wide text-white/60 transition-all duration-300 hover:text-white"
                >
                  {link.label}
                </Link>
              )
            }

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSection(e, link.href, false)}
                className={`relative py-2 text-[14px] font-medium tracking-wide transition-all duration-300 ${
                  isActive ? "text-emerald-400" : "text-white/60 hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-[-2px] left-0 right-0 h-[1.5px] rounded-full bg-emerald-400" />
                )}
              </a>
            )
          })}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="rounded-full border border-white/10 bg-white/5 p-2.5 text-white/70 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/20 hover:bg-emerald-500/10 hover:text-emerald-400"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </button>

          <Link
            href="/download"
            className="hidden rounded-full border border-white/10 bg-white/5 px-6 py-2 text-[13px] font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-emerald-500/20 hover:bg-emerald-500/10 hover:text-emerald-400 md:flex"
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
              const isActive = !link.isPage && activeSection === link.href.slice(1)

              if (link.isPage) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="relative rounded-xl px-4 py-3.5 text-sm font-semibold text-white/70 transition-all duration-300 hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </Link>
                )
              }

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSection(e, link.href, false)}
                  className={`relative rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "border-l-2 border-emerald-400 bg-emerald-500/10 text-emerald-400"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
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
