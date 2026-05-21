"use client"

import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import HomeNavbar from "@/components/sections/home-navbar"
import HomeFooter from "@/components/sections/home-footer"
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from "lucide-react"

const formSchema = z.object({
  businessName: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  contact: z.string().min(10, "Phone must be at least 10 digits"),
  message: z.string().min(1, "Message is required"),
})

type FormData = z.infer<typeof formSchema>

const contactInfo = [
  { icon: MapPin, label: "Nairobi, Kenya", sub: "Plessey House, Boricho rd, P.O.BOX 5686-00100" },
  { icon: MapPin, label: "Helsinki, Finland", sub: "Korkeavuorenkatu 7c 49, 00140 Helsinki" },
  { icon: Mail, label: "info@ecocanafrica.com", sub: "Reach our team directly" },
  { icon: Phone, label: "+254 738 203 770", sub: "+358 440 816 059 (Finland)" },
]

export default function ContactPage() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: { businessName: "", email: "", contact: "", message: "" },
  })

  useEffect(() => {
    let lenisInst: any = null
    import("lenis").then(({ default: Lenis }) => {
      lenisInst = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true })
      function raf(time: number) { if (lenisInst) { lenisInst.raf(time); requestAnimationFrame(raf) } }
      requestAnimationFrame(raf)
    })
    const ctx = gsap.context(() => {
      gsap.fromTo(".ct-reveal",
        { opacity: 0, y: 36, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.1, stagger: 0.12, delay: 0.2, ease: "power3.out" }
      )
    }, wrapRef)
    return () => { ctx.revert(); if (lenisInst) lenisInst.destroy() }
  }, [])

  function onSubmit(_values: FormData) {
    setIsSubmitting(true)
    setTimeout(() => { setIsSubmitting(false); setIsSubmitted(true) }, 1200)
  }

  return (
    <div className="relative min-h-screen flex flex-col text-[#f5f5f5]" style={{ background: "#050705" }}>
      <HomeNavbar onMenuToggle={() => {}} />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[600px]" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(34,197,94,0.08) 0%, transparent 65%)" }} />

      <main ref={wrapRef} className="relative z-10 flex-grow pt-32 pb-24 px-[clamp(1rem,4vw,3rem)] max-w-6xl mx-auto w-full">

        {/* Hero text */}
        <section className="mb-20">
          <p className="ct-reveal section-overline text-emerald-400">Get in touch</p>
          <h1
            className="ct-reveal font-serif-luxury text-luxury-gradient text-luxury-glow mb-6"
            style={{ fontSize: "clamp(2.75rem, 6.5vw, 5rem)", lineHeight: 0.98, letterSpacing: "-0.03em" }}
          >
            Contact us.
          </h1>
          <p className="ct-reveal max-w-xl text-[16px] leading-relaxed text-white/60">
            Need help with bottle returns, ECO-Station locations, or suspected counterfeit drinks? We&apos;re here for consumers first.
          </p>
        </section>

        {/* Two-column layout: info + form */}
        <section className="grid gap-12 lg:grid-cols-12 items-start">

          {/* Contact info cards */}
          <div className="lg:col-span-4 space-y-4">
            {contactInfo.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="ct-reveal flex items-start gap-4 rounded-2xl border border-white/5 bg-white/[0.03] p-5 hover:border-emerald-500/20 transition-all duration-300"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Icon size={16} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{label}</p>
                  <p className="text-xs text-white/45 mt-0.5 leading-relaxed">{sub}</p>
                </div>
              </div>
            ))}

            {/* Trust stat */}
            <div
              className="ct-reveal rounded-2xl p-6 mt-4"
              style={{ background: "linear-gradient(135deg, rgba(34,197,94,0.08), transparent)", border: "1px solid rgba(34,197,94,0.15)" }}
            >
              <p className="font-serif-luxury text-4xl text-white mb-1" style={{ letterSpacing: "-0.02em" }}>54,200+</p>
              <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">Active users in Kenya</p>
              <p className="text-xs text-white/40 mt-1">Consumer-first recycling platform</p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-8 ct-reveal">
            <div
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#090d09]/45 p-8 md:p-10 backdrop-blur-xl shadow-2xl"
              style={{ boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.05)" }}
            >
              <div className="absolute right-0 top-0 -mr-20 -mt-20 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

              {!isSubmitted ? (
                <form onSubmit={form.handleSubmit(onSubmit)} className="relative z-10 space-y-6">
                  <div>
                    <h2 className="text-xl font-serif-luxury text-white mb-1">Leave us a message</h2>
                    <p className="text-xs text-white/50">We typically respond within 24 hours.</p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="businessName" className="text-[11px] font-bold uppercase tracking-wider text-white/60">Full Name</label>
                      <input
                        id="businessName"
                        type="text"
                        placeholder="Your name or business"
                        {...form.register("businessName")}
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder-white/20 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/35 transition-colors"
                      />
                      {form.formState.errors.businessName && (
                        <p className="text-xs text-red-400">{form.formState.errors.businessName.message}</p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-white/60">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@email.com"
                        {...form.register("email")}
                        className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder-white/20 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/35 transition-colors"
                      />
                      {form.formState.errors.email && (
                        <p className="text-xs text-red-400">{form.formState.errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact" className="text-[11px] font-bold uppercase tracking-wider text-white/60">Phone Number</label>
                    <div className="flex gap-2">
                      <select
                        className="rounded-xl bg-white/5 border border-white/10 px-3 py-3 text-sm text-white/70 focus:outline-none focus:border-emerald-500/50 transition-colors"
                        style={{ colorScheme: "dark" }}
                        defaultValue="+254"
                      >
                        <option>+254</option>
                        <option>+358</option>
                        <option>+1</option>
                        <option>+44</option>
                      </select>
                      <input
                        id="contact"
                        type="tel"
                        placeholder="Mobile number"
                        {...form.register("contact")}
                        className="flex-1 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder-white/20 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/35 transition-colors"
                      />
                    </div>
                    {form.formState.errors.contact && (
                      <p className="text-xs text-red-400">{form.formState.errors.contact.message}</p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-wider text-white/60">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us how we can help..."
                      {...form.register("message")}
                      className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-sm placeholder-white/20 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/35 transition-colors resize-none"
                    />
                    {form.formState.errors.message && (
                      <p className="text-xs text-red-400">{form.formState.errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-emerald-500 hover:bg-emerald-400 disabled:bg-emerald-600/50 text-[#050705] font-bold text-xs uppercase tracking-[0.15em] py-4 transition duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_24px_rgba(16,185,129,0.3)]"
                  >
                    {isSubmitting ? (
                      <><div className="h-4 w-4 border-2 border-[#050705] border-t-transparent rounded-full animate-spin" /> Processing...</>
                    ) : (
                      <>Send Message <ArrowRight size={14} strokeWidth={2.5} /></>
                    )}
                  </button>
                </form>
              ) : (
                <div className="relative z-10 flex flex-col items-center text-center py-10 space-y-4">
                  <div className="h-16 w-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={36} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-serif-luxury text-white">Message Sent</h3>
                  <p className="text-sm text-white/60 max-w-md leading-relaxed">
                    Thanks for reaching out! Our team will get back to you within 24 hours at <span className="text-emerald-400">{form.getValues("email")}</span>.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  )
}
