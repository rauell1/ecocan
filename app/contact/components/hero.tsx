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
      lenisInst = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })
      function raf(time: number) {
        if (lenisInst) {
          lenisInst.raf(time)
          requestAnimationFrame(raf)
        }
      }
      requestAnimationFrame(raf)
    })
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ct-reveal",
        { opacity: 0, y: 36, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
          stagger: 0.12,
          delay: 0.2,
          ease: "power3.out",
        }
      )
    }, wrapRef)
    return () => {
      ctx.revert()
      if (lenisInst) lenisInst.destroy()
    }
  }, [])

  function onSubmit(_values: FormData) {
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1200)
  }

  return (
    <div
      className="relative flex min-h-screen flex-col text-[var(--c-text)]"
      style={{ background: "var(--c-bg)" }}
    >
      <HomeNavbar onMenuToggle={() => {}} />

      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(34,197,94,0.06) 0%, transparent 65%)",
        }}
      />

      <main
        ref={wrapRef}
        className="relative z-10 mx-auto w-full max-w-6xl flex-grow px-[clamp(1rem,4vw,3rem)] pb-24 pt-32"
      >
        {/* Hero text */}
        <section className="mb-20">
          <p className="ct-reveal section-overline text-[var(--c-green)]">Get in touch</p>
          <h1
            className="ct-reveal font-serif-luxury text-luxury-gradient text-luxury-glow mb-6"
            style={{
              fontSize: "clamp(2.75rem, 6.5vw, 5rem)",
              lineHeight: 0.98,
              letterSpacing: "-0.03em",
            }}
          >
            Contact us.
          </h1>
          <p className="ct-reveal max-w-xl text-[16px] leading-relaxed text-[var(--c-text-muted)]">
            Need help with bottle returns, ECO-Station locations, or suspected counterfeit drinks?
            We&apos;re here for consumers first.
          </p>
        </section>

        {/* Two-column layout: info + form */}
        <section className="grid items-start gap-12 lg:grid-cols-12">
          {/* Contact info cards */}
          <div className="space-y-4 lg:col-span-4">
            {contactInfo.map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="ct-reveal hover:border-[var(--c-green)]/20 flex items-start gap-4 rounded-2xl border border-[var(--c-border)] bg-[var(--c-surface)] p-5 transition-all duration-300"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--c-green-dim)] text-[var(--c-green)]">
                  <Icon size={16} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--c-text)]">{label}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-[var(--c-text-muted)]">{sub}</p>
                </div>
              </div>
            ))}

            {/* Trust stat */}
            <div
              className="ct-reveal mt-4 rounded-2xl p-6"
              style={{
                background: "linear-gradient(135deg, rgba(34,197,94,0.06), transparent)",
                border: "1px solid rgba(34,197,94,0.12)",
              }}
            >
              <p
                className="font-serif-luxury mb-1 text-4xl text-[var(--c-text)]"
                style={{ letterSpacing: "-0.02em" }}
              >
                54,200+
              </p>
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--c-green)]">
                Active users in Kenya
              </p>
              <p className="mt-1 text-xs text-[var(--c-text-muted)]">
                Consumer-first recycling platform
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="ct-reveal lg:col-span-8">
            <div
              className="relative overflow-hidden rounded-3xl border border-[var(--c-border)] bg-white/80 p-8 shadow-2xl backdrop-blur-xl md:p-10"
              style={{
                boxShadow:
                  "0 25px 50px -12px rgba(13,18,13,0.05), inset 0 1px 1px rgba(255,255,255,0.6)",
              }}
            >
              <div className="pointer-events-none absolute right-0 top-0 -mr-20 -mt-20 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />

              {!isSubmitted ? (
                <form onSubmit={form.handleSubmit(onSubmit)} className="relative z-10 space-y-6">
                  <div>
                    <h2 className="font-serif-luxury mb-1 text-xl text-[var(--c-text)]">
                      Leave us a message
                    </h2>
                    <p className="text-xs text-[var(--c-text-muted)]">
                      We typically respond within 24 hours.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="businessName"
                        className="text-[11px] font-bold uppercase tracking-wider text-[var(--c-text-muted)]"
                      >
                        Full Name
                      </label>
                      <input
                        id="businessName"
                        type="text"
                        placeholder="Your name or business"
                        {...form.register("businessName")}
                        className="placeholder-[var(--c-text-muted)]/30 focus:border-[var(--c-green)]/50 focus:ring-[var(--c-green)]/35 w-full rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] px-4 py-3 text-sm text-[var(--c-text)] transition-colors focus:outline-none focus:ring-1"
                      />
                      {form.formState.errors.businessName && (
                        <p className="text-xs text-red-500">
                          {form.formState.errors.businessName.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-1.5">
                      <label
                        htmlFor="email"
                        className="text-[11px] font-bold uppercase tracking-wider text-[var(--c-text-muted)]"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="you@email.com"
                        {...form.register("email")}
                        className="placeholder-[var(--c-text-muted)]/30 focus:border-[var(--c-green)]/50 focus:ring-[var(--c-green)]/35 w-full rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] px-4 py-3 text-sm text-[var(--c-text)] transition-colors focus:outline-none focus:ring-1"
                      />
                      {form.formState.errors.email && (
                        <p className="text-xs text-red-500">
                          {form.formState.errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="contact"
                      className="text-[11px] font-bold uppercase tracking-wider text-[var(--c-text-muted)]"
                    >
                      Phone Number
                    </label>
                    <div className="flex gap-2">
                      <select
                        className="focus:border-[var(--c-green)]/50 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] px-3 py-3 text-sm text-[var(--c-text-muted)] transition-colors focus:outline-none"
                        style={{ colorScheme: "light" }}
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
                        className="placeholder-[var(--c-text-muted)]/30 focus:border-[var(--c-green)]/50 focus:ring-[var(--c-green)]/35 flex-1 rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] px-4 py-3 text-sm text-[var(--c-text)] transition-colors focus:outline-none focus:ring-1"
                      />
                    </div>
                    {form.formState.errors.contact && (
                      <p className="text-xs text-red-500">
                        {form.formState.errors.contact.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="message"
                      className="text-[11px] font-bold uppercase tracking-wider text-[var(--c-text-muted)]"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us how we can help..."
                      {...form.register("message")}
                      className="placeholder-[var(--c-text-muted)]/30 focus:border-[var(--c-green)]/50 focus:ring-[var(--c-green)]/35 w-full resize-none rounded-xl border border-[var(--c-border)] bg-[var(--c-surface)] px-4 py-3 text-sm text-[var(--c-text)] transition-colors focus:outline-none focus:ring-1"
                    />
                    {form.formState.errors.message && (
                      <p className="text-xs text-red-500">
                        {form.formState.errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="disabled:bg-[var(--c-green)]/50 flex w-full items-center justify-center gap-2 rounded-full bg-[var(--c-green)] py-4 text-xs font-bold uppercase tracking-[0.15em] text-white transition duration-300 hover:bg-[var(--c-green-light)] hover:shadow-[0_0_24px_rgba(21,128,61,0.25)]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />{" "}
                        Processing...
                      </>
                    ) : (
                      <>
                        Send Message <ArrowRight size={14} strokeWidth={2.5} />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <div className="relative z-10 flex flex-col items-center space-y-4 py-10 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--c-green-dim)] text-[var(--c-green)]">
                    <CheckCircle2 size={36} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif-luxury text-2xl text-[var(--c-text)]">Message Sent</h3>
                  <p className="max-w-md text-sm leading-relaxed text-[var(--c-text-muted)]">
                    Thanks for reaching out! Our team will get back to you within 24 hours at{" "}
                    <span className="text-[var(--c-green)]">{form.getValues("email")}</span>.
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
