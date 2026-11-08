'use client'

import React from 'react'

const Hero = () => {
  return (
    <section
       className="relative flex min-h-screen w-full justify-center overflow-hidden bg-neutral-950 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/hero1.png')" }}
    >
      {/* bottom fade so the image sinks into black (remove this div if you don't want it) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2
       bg-gradient-to-t from-black via-black/50 to-transparent" />

      <div className="relative z-10 flex flex-col items-center px-5 pt-[28vh] text-center">
        {/* badge */}
        <span className="inline-flex items-center gap-2 rounded-md bg-black/30 px-2.5 py-1 text-xs text-white/80 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
          The New Way to Demo
        </span>

        {/* heading */}
        <h1 className="mt-5 max-w-xl text-balance text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
          Run Conversational Product Demos, 24/7
        </h1>

        {/* subtext */}
        <p className="mt-4 max-w-md text-sm text-white/70 md:max-w-lg md:text-base">
          Hobbes gives buyers a guided demo the moment they are ready. No scheduling required.
        </p>

        {/* buttons */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Start Demo
          </button>
          <button
            type="button"
            className="rounded-full bg-neutral-700/70 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-neutral-700"
          >
            Talk to Sales
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
