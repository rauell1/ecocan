"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { AlertCircle, Trash2, TrendingUp, ArrowRight } from "lucide-react"

const stats = [
  { value: "30%", label: "of drinks in Africa are counterfeit", icon: AlertCircle },
  { value: "80%", label: "of plastic bottles never recovered", icon: Trash2 },
  { value: "$1B+", label: "lost to packaging waste annually", icon: TrendingUp },
]

export default function ProblemSolutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo(".ps-reveal", 
        { opacity: 0, y: 30 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.15, 
          ease: "power3.out", 
          scrollTrigger: { trigger: sectionRef.current, start: "top 60%", once: true }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="problem" className="relative w-full py-32 bg-[#F9FAF9] text-gray-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* CONTENT COLUMN */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <div className="space-y-6 ps-reveal">
              <div className="flex items-center gap-4">
                <div className="h-[2px] w-12 bg-emerald-600" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700">The Problem</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-gray-900">
                Systemic Failure <br />
                <span className="text-gray-900">Demands Change.</span>
              </h2>
            </div>

            <div className="grid gap-6 mt-4 ps-reveal">
              {stats.map((stat, i) => (
                <div 
                  key={i} 
                  className="group relative p-8 rounded-3xl border-2 border-gray-200 bg-gray-50 transition-all duration-500 hover:border-emerald-500 hover:bg-white hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] cursor-default"
                >
                  <div className="flex items-center gap-6">
                    {/* UPDATED: Icon container is now pre-filled with light green */}
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 border border-emerald-100 text-emerald-600 shadow-sm transition-all duration-500 group-hover:bg-emerald-600 group-hover:text-white group-hover:rotate-[10deg]">
                      <stat.icon size={28} strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-3xl font-bold tracking-tight text-gray-900">{stat.value}</div>
                      <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-widest mt-1">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MEDIA COLUMN */}
          <div className="lg:col-span-7 ps-reveal flex flex-col gap-8">
            <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden border-4 border-white shadow-[0_20px_60px_rgba(0,0,0,0.1)] group">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-[1.02]"
              >
                <source src="/videos/circular-loop.mp4" type="video/mp4" />
              </video>
            </div>
            
            <button className="flex items-center justify-between w-full bg-gray-900 border-2 border-gray-900 rounded-3xl p-10 transition-all hover:bg-white hover:border-emerald-500 group">
              <span className="text-lg font-medium text-white group-hover:text-gray-900 transition-colors italic">
                Ready to join the loop?
              </span>
              
              <div className="flex items-center gap-4 font-semibold text-white group-hover:text-emerald-600 group-hover:gap-8 transition-all duration-300">
                See How It Works 
                <span className="bg-white/10 p-3 rounded-full group-hover:bg-emerald-50 group-hover:rotate-[-45deg] transition-all duration-300">
                  <ArrowRight size={20} />
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}