"use client";

const stats = [
  { value: "1.2M+", label: "Bottles diverted from landfills", note: "Since pilot launch" },
  { value: "47+", label: "ECO-Stations operational", note: "Across Kenya" },
  { value: "18,000+", label: "Active ECOmmunity members", note: "Consumers, couriers & recyclers" },
  { value: "62%", label: "Reduction in uncollected waste", note: "At partner venues" },
];

export default function SustainabilityImpactSection() {
  return (
    <section className="py-24 px-6 bg-neutral-50">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-14 max-w-[620px]">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-3">
            Our Impact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-eco-dark leading-tight mb-5">
            Real numbers.<br />Real change.
          </h2>
          <p className="text-eco-dark/70 text-lg leading-relaxed">
            Every scan, every return, and every collection creates measurable impact — tracked and reported in real time.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white border border-eco-dark/8 p-8 flex flex-col gap-2"
            >
              <span className="text-5xl font-black text-primary leading-none">{s.value}</span>
              <span className="text-[16px] font-semibold text-eco-dark leading-snug mt-1">{s.label}</span>
              <span className="text-[13px] text-eco-dark/50 mt-1">{s.note}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
