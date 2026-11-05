import React from 'react';

export default function CTA() {
  return (
    <section id="contact" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="relative rounded-3xl bg-blue-600 p-10 sm:p-16 text-center overflow-hidden shadow-2xl">
        {/* Decorative Scalloped Shapes on the Edges */}
        <div className="pointer-events-none absolute -top-12 -left-12 w-36 h-36 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -top-12 -right-12 w-36 h-36 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -bottom-12 -right-12 w-36 h-36 rounded-full bg-white/10" />

        <div className="relative z-10 max-w-xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Get started today
          </h2>
          <p className="mt-4 text-sm sm:text-base text-blue-100 font-light">
            Have an IT challenge, an app concept, or an enterprise infrastructure migration? Let&apos;s build together.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:contact@themanaging.co"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-neutral-950 hover:bg-neutral-900 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-xl"
            >
              Contact Our Engineers
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}