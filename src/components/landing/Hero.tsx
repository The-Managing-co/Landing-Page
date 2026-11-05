import React from 'react';

export default function Hero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.15),transparent_60%)]" />
      
      {/* Decorative Brand Dots (matching reference style) */}
      <div className="flex justify-center items-center gap-2 mb-6">
        <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse" />
        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
        <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
          Software to power <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
            your next venture
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-normal leading-relaxed">
          The Managing Co. engineers high-performance enterprise IT systems and builds proprietary software products built for scale.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#products"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(37,99,235,0.4)]"
          >
            Explore Our Products
          </a>
          <a
            href="#services"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white font-medium text-sm tracking-wide transition-all"
          >
            Our IT Services
          </a>
        </div>
      </div>
    </section>
  );
}