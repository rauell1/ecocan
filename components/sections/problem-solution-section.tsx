"use client";

import { useRef, useEffect } from "react";

const stats = [
  { value: "30%", label: "of drinks in Africa are counterfeit" },
  { value: "80%", label: "of plastic bottles are never recovered" },
  { value: "$1B+", label: "lost annually to packaging waste" },
];

// Inline SVG illustration — replaces the broken /assets/images/consumer/fight-back.svg
// reference that caused the image panel to render empty.
function ProblemIllustration() {
  return (
    <svg
      viewBox="0 0 480 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Circular bottle ecosystem illustration"
      className="w-full h-full"
    >
      {/* Background circle */}
      <circle cx="240" cy="240" r="220" fill="#1a2e24" />

      {/* Outer orbit ring */}
      <circle cx="240" cy="240" r="170" stroke="#2a7a4f" strokeWidth="1.5" strokeDasharray="8 6" opacity="0.5" />

      {/* Recycling arrows — three arcs */}
      <path
        d="M 240 70 A 170 170 0 0 1 410 240"
        stroke="hsl(156 61% 28%)" strokeWidth="3" strokeLinecap="round" fill="none"
      />
      <path
        d="M 410 240 A 170 170 0 0 1 155 385"
        stroke="hsl(156 61% 38%)" strokeWidth="3" strokeLinecap="round" fill="none"
      />
      <path
        d="M 155 385 A 170 170 0 0 1 240 70"
        stroke="hsl(48 100% 65%)" strokeWidth="3" strokeLinecap="round" fill="none"
      />

      {/* Arrow heads */}
      <polygon points="420,230 405,248 395,228" fill="hsl(156 61% 28%)" />
      <polygon points="145,393 162,380 168,402" fill="hsl(156 61% 38%)" />
      <polygon points="248,62 232,62 238,80" fill="hsl(48 100% 65%)" />

      {/* Centre bottle silhouette */}
      <rect x="218" y="175" width="44" height="8" rx="4" fill="hsl(156 61% 28%)" />
      <rect x="222" y="183" width="36" height="100" rx="12" fill="hsl(156 61% 38%)" opacity="0.9" />
      <rect x="226" y="283" width="28" height="22" rx="6" fill="hsl(156 61% 28%)" />
      <rect x="228" y="168" width="24" height="9" rx="4" fill="hsl(156 61% 28%)" />

      {/* Shine on bottle */}
      <rect x="228" y="192" width="6" height="50" rx="3" fill="white" opacity="0.18" />

      {/* Node circles at arrow tips */}
      <circle cx="240" cy="70" r="12" fill="hsl(48 100% 65%)" opacity="0.9" />
      <circle cx="410" cy="240" r="12" fill="hsl(156 61% 28%)" opacity="0.9" />
      <circle cx="155" cy="385" r="12" fill="hsl(156 61% 38%)" opacity="0.9" />

      {/* Node labels */}
      <text x="240" y="47" textAnchor="middle" fill="white" fontSize="11" fontWeight="600" opacity="0.8">BUY</text>
      <text x="436" y="244" textAnchor="start" fill="white" fontSize="11" fontWeight="600" opacity="0.8">RETURN</text>
      <text x="118" y="408" textAnchor="middle" fill="white" fontSize="11" fontWeight="600" opacity="0.8">EARN</text>

      {/* Subtle leaf accents */}
      <ellipse cx="335" cy="140" rx="18" ry="8" fill="hsl(156 61% 38%)" opacity="0.3" transform="rotate(-40 335 140)" />
      <ellipse cx="148" cy="180" rx="14" ry="6" fill="hsl(48 100% 65%)" opacity="0.25" transform="rotate(30 148 180)" />
    </svg>
  );
}

export default function ProblemSolutionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Use IntersectionObserver instead of GSAP/ScrollTrigger.
  // Reason: the hero section holds scroll locked until Lenis initialises;
  // GSAP ScrollTrigger is registered *before* Lenis is ready which means
  // scroll-triggered animations targeting this section never fire and every
  // element that starts at opacity:0 stays invisible permanently.
  //
  // IntersectionObserver fires independently of any scroll library and is
  // available in all modern browsers. The CSS animation is driven purely by
  // the `data-visible` attribute toggle below.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.setAttribute("data-visible", "true");
          observer.disconnect();
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ── Animation keyframes ─────────────────────────────────────────────── */}
      <style>{`
        @keyframes ps-fade-up {
          from { opacity: 0; transform: translateY(36px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Default: elements are VISIBLE. Animation runs only after the
           section enters the viewport (data-visible="true"). This ensures
           the section is never permanently hidden if JS is slow or
           IntersectionObserver fires late. */
        .ps-animate {
          opacity: 1;
          transform: translateY(0);
        }

        [data-visible="true"] .ps-animate {
          animation: ps-fade-up 0.75s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        [data-visible="true"] .ps-animate:nth-child(2) { animation-delay: 0.1s; }
        [data-visible="true"] .ps-animate:nth-child(3) { animation-delay: 0.2s; }
        [data-visible="true"] .ps-animate:nth-child(4) { animation-delay: 0.3s; }

        [data-visible="true"] .ps-stat:nth-child(1) { animation: ps-fade-up 0.6s 0.35s cubic-bezier(0.16,1,0.3,1) both; }
        [data-visible="true"] .ps-stat:nth-child(2) { animation: ps-fade-up 0.6s 0.47s cubic-bezier(0.16,1,0.3,1) both; }
        [data-visible="true"] .ps-stat:nth-child(3) { animation: ps-fade-up 0.6s 0.59s cubic-bezier(0.16,1,0.3,1) both; }

        @media (prefers-reduced-motion: reduce) {
          .ps-animate, .ps-stat { animation: none !important; }
        }
      `}</style>

      <section
        ref={sectionRef}
        id="problem"
        className="w-full py-[120px] md:py-[160px]"
        style={{ background: "#101010" }}
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ── Left: text ───────────────────────────────────────────────── */}
            <div>
              <p className="section-overline ps-animate mb-6" style={{ color: "hsl(156 61% 38%)" }}>
                The Problem
              </p>

              <h2 className="section-headline text-white mb-8 ps-animate">
                30% of drinks are fake.<br />
                Billions of bottles wasted.<br />
                <span style={{ color: "hsl(156 61% 38%)" }}>You can fix both.</span>
              </h2>

              <p className="section-body ps-animate mb-10" style={{ color: "rgba(255,255,255,0.6)" }}>
                Every bottle you return is one less fake drink, one less piece of plastic in
                our oceans, and one more step toward a cleaner Africa. ECOCAN creates a closed
                loop: collect → recycle → reuse.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="ps-stat flex items-center gap-4 pl-5"
                    style={{ borderLeft: "2px solid hsl(156 61% 38%)" }}
                  >
                    <span
                      className="text-3xl font-bold shrink-0"
                      style={{ color: "hsl(156 61% 38%)" }}
                    >
                      {stat.value}
                    </span>
                    <span className="text-base" style={{ color: "rgba(255,255,255,0.6)" }}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: inline SVG illustration ───────────────────────────── */}
            {/* The original code referenced /assets/images/consumer/fight-back.svg
                which does not exist in /public, causing a broken image and an
                empty right panel. Replaced with an inline SVG that matches the
                brand colours and circular-economy concept. */}
            <div className="ps-animate relative hidden lg:flex items-center justify-center">
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{
                  width: 480,
                  height: 480,
                  background: "#151e19",
                  boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
                }}
              >
                <ProblemIllustration />
              </div>

              {/* Floating stat pill */}
              <div
                className="absolute -bottom-6 -left-6 p-5 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <p className="text-4xl font-bold mb-1" style={{ color: "hsl(156 61% 38%)" }}>1M+</p>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>Bottles in our system</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
