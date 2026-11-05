import React from 'react';

export default function Stats() {
  return (
    <section id="stats" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Column: Heading */}
        <div className="w-full lg:w-2/5">
          <span className="text-xs uppercase font-mono tracking-widest text-emerald-400">
            Proven Track Record
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mt-2 leading-tight">
            Results that <br />
            matter
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
            Whether deploying critical IT services or scaling our internal product ventures, we deliver measurable business outcomes.
          </p>
          <a
            href="#contact"
            className="mt-8 inline-block px-6 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white font-medium text-xs tracking-wider uppercase transition-colors"
          >
            Explore Case Studies
          </a>
        </div>

        {/* Right Column: Circular Badges (Exact layout from image) */}
        <div className="w-full lg:w-3/5 flex flex-wrap items-center justify-center gap-6 relative">
          {/* Circle 1 - Lime / Green */}
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-[#52C41A] text-neutral-950 flex flex-col items-center justify-center p-4 shadow-xl transform hover:scale-105 transition-transform duration-300">
            <span className="text-4xl sm:text-5xl font-black leading-none">99.9%</span>
            <span className="text-[11px] font-semibold text-center mt-2 leading-tight">
              Cloud Infrastructure Uptime
            </span>
          </div>

          {/* Circle 2 - Vibrant Blue */}
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-[#1890FF] text-white flex flex-col items-center justify-center p-4 shadow-xl transform hover:scale-105 transition-transform duration-300">
            <span className="text-4xl sm:text-5xl font-black leading-none">40+</span>
            <span className="text-[11px] font-semibold text-center mt-2 leading-tight">
              Shipped Client & In-house Projects
            </span>
          </div>

          {/* Circle 3 - Cyan / Teal (Centered below) */}
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-[#4BD5C6] text-neutral-950 flex flex-col items-center justify-center p-4 shadow-xl transform hover:scale-105 transition-transform duration-300">
            <span className="text-4xl sm:text-5xl font-black leading-none">4.5x</span>
            <span className="text-[11px] font-semibold text-center mt-2 leading-tight">
              Average ROI & Efficiency Gain
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}