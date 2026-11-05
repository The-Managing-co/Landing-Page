import React from 'react';

const products = [
  {
    name: 'ManageOS',
    tagline: 'Enterprise Ops & Team Command Center',
    desc: 'A unified workspace for IT infrastructure telemetry, resource tracking, and project lifecycle management.',
    cta: 'Learn more',
    stats: ['4.9 ★ Rating', '12K+ Active Teams'],
    bgColor: 'bg-[#0070F3]', // Vibrant Blue
    icon: '⚡',
    screenType: 'dashboard',
  },
  {
    name: 'SyncFlow',
    tagline: 'Automated Cloud & Data Pipelines',
    desc: 'Self-healing workflow automation that syncs customer databases, microservices, and internal reporting tools seamlessly.',
    cta: 'Explore Platform',
    stats: ['99.99% Reliability', '25M Tasks / Mo'],
    bgColor: 'bg-[#55E6D8]', // Cyan / Mint
    icon: '🌀',
    screenType: 'pipeline',
    darkText: true,
  },
  {
    name: 'VentureSpark',
    tagline: 'Digital Asset & Venture Builder Kit',
    desc: 'Our proprietary rapid-prototyping framework that accelerates web, mobile, and payment MVP launches in record time.',
    cta: 'Get Access',
    stats: ['Fast MVP Deploy', 'Zero Lock-in'],
    bgColor: 'bg-[#F5BF23]', // Yellow / Amber
    icon: '🚀',
    screenType: 'venture',
    darkText: true,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-20">
        {/* Colorful Dots */}
        <div className="flex justify-center items-center gap-1.5 mb-4">
          <span className="w-3 h-3 rounded-full bg-blue-500" />
          <span className="w-3 h-3 rounded-full bg-cyan-400" />
          <span className="w-3 h-3 rounded-full bg-emerald-400" />
          <span className="w-3 h-3 rounded-full bg-amber-400" />
          <span className="w-3 h-3 rounded-full bg-rose-500" />
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          A family of products
        </h2>
        <p className="mt-4 text-sm sm:text-base text-neutral-400">
          Proprietary applications and platforms designed, built, and operated in-house by The Managing Co.
        </p>
      </div>

      {/* Stacked Showcase Cards (Reference Layout) */}
      <div className="flex flex-col gap-14 sm:gap-20">
        {products.map((prod, idx) => (
          <div
            key={idx}
            className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 p-8 sm:p-12 rounded-3xl bg-[#0f0f12] border border-neutral-800/80"
          >
            {/* Left Column: Product Info */}
            <div className="w-full lg:w-1/2 flex flex-col items-start">
              <div className="w-12 h-12 rounded-2xl bg-neutral-900 border border-neutral-700 flex items-center justify-center text-2xl shadow-md mb-6">
                {prod.icon}
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {prod.name}
              </h3>
              <p className="text-xs uppercase tracking-widest text-neutral-400 font-mono mt-1">
                {prod.tagline}
              </p>
              <p className="mt-4 text-neutral-300 text-sm sm:text-base leading-relaxed">
                {prod.desc}
              </p>

              <div className="mt-6 flex items-center gap-4">
                <button className="px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                  {prod.cta}
                </button>
              </div>

              {/* Badges / Metrics */}
              <div className="mt-8 flex items-center gap-6 pt-6 border-t border-neutral-800/80 w-full text-xs font-mono text-neutral-400">
                {prod.stats.map((s, sIdx) => (
                  <span key={sIdx} className="flex items-center gap-1.5">
                    <span className="text-blue-400">✓</span> {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Colorful App Frame (matching reference) */}
            <div
              className={`w-full lg:w-1/2 rounded-2xl ${prod.bgColor} p-6 sm:p-10 flex items-center justify-center shadow-2xl relative min-h-[320px] sm:min-h-[380px] overflow-hidden`}
            >
              {/* Phone / Tablet mockup card */}
              <div className="w-full max-w-[280px] sm:max-w-[320px] rounded-3xl bg-white text-neutral-900 p-5 shadow-2xl flex flex-col justify-between border-4 border-neutral-900">
                <div className="flex items-center justify-between pb-3 border-b border-neutral-200">
                  <span className="text-xs font-bold uppercase tracking-wider">{prod.name}</span>
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                </div>

                <div className="my-6 flex flex-col gap-2.5">
                  <div className="h-4 bg-neutral-100 rounded w-4/5" />
                  <div className="h-4 bg-neutral-100 rounded w-3/5" />
                  <div className="h-20 bg-neutral-50 rounded-xl border border-dashed border-neutral-300 flex items-center justify-center text-neutral-400 text-xs font-mono">
                    [Live Telemetry UI]
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-neutral-100 text-[10px] text-neutral-500 font-mono">
                  <span>STATUS: HEALTHY</span>
                  <span>SYNCED</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}