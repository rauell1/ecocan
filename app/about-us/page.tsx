"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import HomeFooter from "@/components/sections/home-footer"
import { SpotlightCard } from "@/components/ui/spotlight-card"
import HomeNavbar from "@/components/sections/home-navbar"
import HyperLink from "@/components/shared/hyperlink/hyperlink"
import RegisterPopup from "@/components/shared/register-popup"
import { ArrowDown, Globe, Leaf, Shield, Users } from "lucide-react"

const partners = [
  { name: "Business Finland", url: "/assets/images/about/support-4.svg" },
  { name: "FINNPARTNERSHIP", url: "/assets/images/about/support-6.svg" },
  { name: "YPB", url: "/assets/images/about/support-1.svg" },
  { name: "Pure Recycle", url: "/assets/images/about/support-2.svg" },
  { name: "NEFCO", url: "/assets/images/about/support-5.svg" },
]

const missionItems = [
  { icon: Leaf, title: "Protect our planet", desc: "We only have one planet, and every action we take today affects our tomorrow." },
  { icon: Shield, title: "Preserve life", desc: "In every way, and all forms — embracing inclusivity, safeguarding broadly, while uplifting holistically." },
  { icon: Users, title: "Support communities", desc: "By empowering generations, building trust, igniting hope, and fostering possibilities." },
  { icon: Globe, title: "Promote sustainability", desc: "Optimising the value we derive from natural resources, enhancing operational productivity, while supporting sustainable commerce." },
]

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const sectionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    let lenisInst: any = null
    import("lenis").then(({ default: Lenis }) => {
      lenisInst = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })
      function raf(time: number) {
        if (lenisInst) { lenisInst.raf(time); requestAnimationFrame(raf) }
      }
      requestAnimationFrame(raf)
    })

    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.fromTo(".about-hero-text",
        { opacity: 0, y: 60, filter: "blur(12px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.4, stagger: 0.15, delay: 0.2, ease: "power3.out" }
      )

      // Scroll-triggered reveals
      gsap.utils.toArray<Element>(".about-reveal").forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 40, filter: "blur(6px)" },
          {
            opacity: 1, y: 0, filter: "blur(0px)",
            duration: 1.0, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 82%", once: true },
          }
        )
      })
    })

    return () => {
      ctx.revert()
      if (lenisInst) lenisInst.destroy()
    }
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: "#050705" }}>
      <HomeNavbar onMenuToggle={() => {}} />

      {/* ── 1. Hero Section ──────────────────────────────────────────────── */}
      <div
        ref={heroRef}
        id="hero"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
        style={{ background: "#050705" }}
      >
        {/* Ambient emerald radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 50% 30%, rgba(34,197,94,0.1) 0%, transparent 65%)",
          }}
        />
        {/* Subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        {/* Hero bg image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/assets/images/about/about-hero.svg"
            alt="ECOCAN Kenya community"
            fill
            className="object-cover opacity-20 img-smooth-load"
            priority
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,7,5,0.4) 0%, rgba(5,7,5,0.85) 100%)" }} />
        </div>

        <div className="relative z-10 px-6 text-center md:px-14 max-w-5xl mx-auto">
          <p className="about-hero-text section-overline text-emerald-400 mb-4">Our story</p>
          <h1
            className="about-hero-text font-serif-luxury text-luxury-gradient text-luxury-glow mb-6"
            style={{ fontSize: "clamp(2.75rem, 8vw, 6rem)", lineHeight: 0.98, letterSpacing: "-0.03em" }}
          >
            Empowering Kenyan<br />
            <span className="font-sans font-light text-emerald-400">consumers to recycle and thrive.</span>
          </h1>
          <p className="about-hero-text mx-auto max-w-[46ch] text-base tracking-wide text-white/55 mb-10">
            We are building East Africa&apos;s most advanced consumer-first circular economy — one verified bottle at a time.
          </p>
          <a
            href="#who-we-are"
            onClick={(e) => { e.preventDefault(); document.getElementById("who-we-are")?.scrollIntoView({ behavior: "smooth" }) }}
            className="about-hero-text inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.15em] text-white/80 backdrop-blur-md hover:bg-white hover:text-black hover:border-white transition-all duration-300"
          >
            Our Journey <ArrowDown size={14} />
          </a>
        </div>
      </div>

      {/* ── 2. Who We Are ───────────────────────────────────────────────── */}
      <section id="who-we-are" className="relative py-[clamp(5rem,10vw,9rem)] px-[clamp(1.25rem,4vw,3rem)]">
        <div className="max-w-6xl mx-auto grid gap-16 lg:grid-cols-2 items-center">
          <div>
            <p className="about-reveal section-overline text-emerald-400">Who are we</p>
            <h2 className="about-reveal font-serif-luxury text-luxury-gradient text-luxury-glow mb-6" style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)", lineHeight: 1.05 }}>
              Catalysts of<br /><span className="font-sans font-light text-emerald-400">positive change.</span>
            </h2>
            <div className="about-reveal space-y-4 text-[15px] leading-relaxed text-white/60">
              <p>
                We are building a consumer-first recycling ecosystem for Kenya. Our green-tech platform helps shoppers verify genuine drinks before purchase, then return empties after consumption for rewards.
              </p>
              <p>
                At the core is the blockchain-compatible{" "}
                <HyperLink link="ECOCAN TnT" href="/solutions/brand-protection#tnt" />, plus our smart{" "}
                <HyperLink link="EcocanApp" href="/solutions/brand-protection#ecocan-app" />, robust{" "}
                <HyperLink link="ECOCAN security codes" href="/solutions/brand-protection#security-codes" />,
                and the intricate{" "}
                <HyperLink link="ECOCAN DRS" href="/solutions/packaging-recycling" />.
              </p>
            </div>
          </div>
          <div className="about-reveal relative">
            <SpotlightCard className="bg-[#0c100c]/40 border border-white/5 rounded-3xl p-8 hover:border-emerald-500/20 transition-all duration-500">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "54,200+", label: "Active users" },
                  { value: "14.8M+", label: "Cans recycled" },
                  { value: "KES 8.2M", label: "Rewards paid" },
                  { value: "3 Markets", label: "East Africa" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-serif-luxury text-white" style={{ letterSpacing: "-0.02em" }}>{stat.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="ec-divider mx-[clamp(1.25rem,4vw,3rem)]" />

      {/* ── 3. Why We're Here ───────────────────────────────────────────── */}
      <section className="relative py-[clamp(5rem,10vw,9rem)] px-[clamp(1.25rem,4vw,3rem)] overflow-hidden">
        <div
          className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #22c55e, transparent 70%)" }}
        />
        <div className="max-w-6xl mx-auto grid gap-16 lg:grid-cols-2 items-center">
          <div className="about-reveal relative aspect-square max-w-sm mx-auto lg:mx-0 overflow-hidden rounded-3xl">
            <Image
              src="/assets/images/solutions/people.svg"
              alt="ECOCAN eco-community"
              fill
              className="object-contain opacity-90"
            />
          </div>
          <div>
            <p className="about-reveal section-overline text-emerald-400">Our purpose</p>
            <h2 className="about-reveal font-serif-luxury text-luxury-gradient text-luxury-glow mb-4" style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)", lineHeight: 1.05 }}>
              Why we&apos;re here.
            </h2>
            <h3 className="about-reveal font-sans font-light text-emerald-400 mb-6" style={{ fontSize: "clamp(1.25rem,2.5vw,2rem)" }}>
              To support ECO-friendly COmmunities
            </h3>
            <p className="about-reveal text-[15px] leading-relaxed text-white/60">
              Who envision and strive for a planet free from pollution, safe for all the life it sustains, and brimming with limitless opportunities to thrive. An achievable aspiration only when communities work together, empowered with intelligent technology to prosper.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="ec-divider mx-[clamp(1.25rem,4vw,3rem)]" />

      {/* ── 4. Our Mission ──────────────────────────────────────────────── */}
      <section className="relative py-[clamp(5rem,10vw,9rem)] px-[clamp(1.25rem,4vw,3rem)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="about-reveal section-overline text-emerald-400">Mission</p>
            <h2 className="about-reveal font-serif-luxury text-luxury-gradient text-luxury-glow" style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)", lineHeight: 1.05 }}>
              We&apos;re on a mission
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {missionItems.map(({ icon: Icon, title, desc }) => (
              <SpotlightCard
                key={title}
                className="about-reveal bg-[#0c100c]/40 border border-white/5 rounded-3xl p-7 hover:border-emerald-500/20 transition-all duration-500"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
                <p className="text-[13px] leading-relaxed text-white/50">{desc}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="ec-divider mx-[clamp(1.25rem,4vw,3rem)]" />

      {/* ── 5. Our DNA — SISU ───────────────────────────────────────────── */}
      <section
        className="relative py-[clamp(5rem,10vw,9rem)] px-[clamp(1.25rem,4vw,3rem)] overflow-hidden"
        style={{ background: "linear-gradient(to bottom, #050705 0%, #081008 50%, #050705 100%)" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Image
            src="/assets/images/solutions/about-people-bg.svg"
            alt=""
            fill
            aria-hidden
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #050705 0%, rgba(5,7,5,0.5) 50%, #050705 100%)" }} />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p className="about-reveal section-overline text-emerald-400">Our DNA</p>
          <h2 className="about-reveal font-serif-luxury text-luxury-gradient text-luxury-glow mb-6" style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)", lineHeight: 1.05 }}>
            That shapes our identity.
          </h2>
          <p className="about-reveal text-[16px] leading-relaxed text-white/60 mb-8 max-w-2xl mx-auto">
            The ability to Re-imagine. Courage to disrupt. Formidable spirit of resilience. And a strong belief in meaningful cooperation. That&apos;s the essence of our DNA. Our{" "}
            <RegisterPopup
              join="SISU!"
              className="h-0"
              form={
                <p>
                  Sisu is a mystical Finnish concept that represents strength of will, determination, perseverance, and acting rationally in the face of adversity. This is the true embodiment of the ECOCAN spirit.
                </p>
              }
            />{" "}
            We pledge to uphold this. All the way.
          </p>
          <SpotlightCard className="about-reveal bg-[#0c100c]/40 border border-white/5 rounded-3xl p-8 max-w-sm mx-auto hover:border-emerald-500/20 transition-all duration-500">
            <p className="font-serif-luxury text-4xl text-emerald-400 mb-2" style={{ letterSpacing: "-0.02em" }}>SISU</p>
            <p className="text-xs text-white/50 uppercase tracking-widest">Finnish · Unstoppable Spirit</p>
          </SpotlightCard>
        </div>
      </section>

      {/* Divider */}
      <div className="ec-divider mx-[clamp(1.25rem,4vw,3rem)]" />

      {/* ── 6. Partners & Community ─────────────────────────────────────── */}
      <section className="py-[clamp(5rem,10vw,9rem)] px-[clamp(1.25rem,4vw,3rem)]">
        <div className="max-w-6xl mx-auto">
          {/* Partner with us CTA */}
          <div className="grid gap-16 lg:grid-cols-2 items-center mb-20">
            <div className="about-reveal relative aspect-square max-w-sm mx-auto lg:mx-0 overflow-hidden rounded-3xl">
              <Image
                src="/assets/images/solutions/hands.svg"
                alt="Partner with ECOCAN"
                fill
                className="object-contain opacity-80"
              />
            </div>
            <div>
              <p className="about-reveal section-overline text-emerald-400">Partner with us</p>
              <h2 className="about-reveal font-serif-luxury text-luxury-gradient text-luxury-glow mb-4" style={{ fontSize: "clamp(2rem,4.5vw,3.5rem)", lineHeight: 1.05 }}>
                COme partner with us.
              </h2>
              <p className="about-reveal text-[15px] leading-relaxed text-white/60 mb-8">
                Environmental, health and economic sustainability are our north stars. Nurturing healthier and thriving communities remains our focus. We have a solid plan. But we can&apos;t achieve all this alone.
              </p>
              <Link
                href="/contact"
                className="about-reveal inline-flex rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-8 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-emerald-500/10 hover:text-emerald-400 hover:border-emerald-500/20"
              >
                Get in touch
              </Link>
            </div>
          </div>

          {/* Partners logos */}
          <div className="about-reveal text-center mb-10">
            <p className="section-overline text-emerald-400 justify-center">Strategic partners</p>
            <h3 className="text-2xl font-serif-luxury text-white mb-3">And join other disruptors.</h3>
            <p className="text-sm text-white/50 max-w-lg mx-auto">
              Building on our collaborative spirit, you&apos;ll join these strategic partners — instrumental to bringing our aspirations to fruition. As we say in Finland;{" "}
              <span className="text-emerald-400">hölökyn kölökyn!</span>
            </p>
          </div>
          <div className="about-reveal flex flex-wrap items-center justify-center gap-8 mb-20">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="rounded-2xl border border-white/8 bg-white/5 px-6 py-4 hover:border-emerald-500/20 hover:bg-white/8 transition-all duration-300 flex items-center justify-center"
              >
                <Image
                  src={partner.url}
                  alt={partner.name}
                  width={120}
                  height={44}
                  className="h-10 w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>

          {/* ECOmmunity CTA */}
          <div
            className="about-reveal relative overflow-hidden rounded-3xl p-10 md:p-16 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(34,197,94,0.08) 0%, rgba(5,7,5,0) 60%)",
              border: "1px solid rgba(34,197,94,0.15)",
            }}
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
            <p className="section-overline text-emerald-400 justify-center mb-2">Community</p>
            <h2 className="font-serif-luxury text-luxury-gradient text-luxury-glow mb-4" style={{ fontSize: "clamp(1.75rem,4vw,3rem)", lineHeight: 1.1 }}>
              In the ECOmmunity.
            </h2>
            <p className="text-[15px] leading-relaxed text-white/60 max-w-xl mx-auto mb-8">
              We strongly believe in the power of meaningful co-operation to drive positive change. Join this once-in-a-generation revolution. As we say in Kenya;{" "}
              <RegisterPopup
                join="Harambee!"
                className="h-0"
                form={
                  <p>
                    Harambee is a Kenyan rallying call for communities to unite and pull together their efforts, to create shared value for common good.
                  </p>
                }
              />
            </p>
            <Link
              href="/download"
              className="inline-flex rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs uppercase tracking-[0.15em] px-10 py-4 transition-all duration-300 hover:shadow-[0_0_24px_rgba(34,197,94,0.3)]"
            >
              Join the Movement
            </Link>
          </div>
        </div>
      </section>

      <HomeFooter />
    </div>
  )
}
