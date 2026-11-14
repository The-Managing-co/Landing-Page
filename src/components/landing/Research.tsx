'use client';

import React from 'react';
import Link from 'next/link';

export default function Research() {
  return (
    <section className="relative z-20 w-full max-w-full overflow-hidden bg-black text-white py-16 sm:py-24 px-4 sm:px-6 font-sans">
      <div className="max-w-[1020px] mx-auto">
        
        {/* Top 4-Color Clover / Petal Icon Badge */}
        <div className="flex justify-center mb-5">
          <svg width="42" height="42" viewBox="0 0 44 44" fill="none" className="drop-shadow-sm">
            {/* Top Petal: Blue */}
            <circle cx="22" cy="14" r="8" fill="#38bdf8" />
            {/* Right Petal: Green */}
            <circle cx="30" cy="22" r="8" fill="#84cc16" />
            {/* Bottom Petal: Pink */}
            <circle cx="22" cy="30" r="8" fill="#f472b6" />
            {/* Left Petal: Yellow */}
            <circle cx="14" cy="22" r="8" fill="#facc15" />
            {/* Center Dark Core */}
            <circle cx="22" cy="22" r="4.5" fill="#000000" />
          </svg>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-[42px] font-bold text-white tracking-tight text-center mb-12 sm:mb-16">
          Research and stories
        </h2>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-start">
          
          {/* CARD 1: The rising role of brain training in midlife health */}
          <Link href="#research-story-1" className="group flex flex-col focus:outline-none">
            {/* Card Graphic */}
            <div className="relative aspect-square w-full rounded-[28px] sm:rounded-[32px] overflow-hidden bg-[#d4ff32] shadow-xl group-hover:scale-[1.02] group-hover:shadow-2xl transition-all duration-300">
              
              {/* Photo Background (Man with beanie, beard & headphones) */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80')`,
                  backgroundPosition: 'center 35%',
                }}
              />

              {/* Decorative Lime Circular Inward Lobes matching design */}
              {/* Left Inward Lobe */}
              <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-28 h-28 rounded-full bg-[#d4ff32]" />
              {/* Right Inward Lobe */}
              <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-28 h-28 rounded-full bg-[#d4ff32]" />
              {/* Top-Left Corner Lobe */}
              <div className="absolute -top-10 -left-10 w-24 h-24 rounded-full bg-[#d4ff32]" />
              {/* Top-Right Corner Lobe */}
              <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-[#d4ff32]" />
              {/* Bottom-Left Corner Lobe */}
              <div className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full bg-[#d4ff32]" />
              {/* Bottom-Right Corner Lobe */}
              <div className="absolute -bottom-10 -right-10 w-24 h-24 rounded-full bg-[#d4ff32]" />
            </div>

            {/* Caption Title */}
            <h3 className="mt-4 text-base sm:text-[17px] font-bold text-white tracking-tight leading-snug group-hover:text-slate-200 transition-colors">
              The rising role of brain training in midlife health
            </h3>
          </Link>

          {/* CARD 2: Mental health for everyone */}
          <Link href="#research-story-2" className="group flex flex-col focus:outline-none">
            {/* Card Graphic */}
            <div className="relative aspect-square w-full rounded-[28px] sm:rounded-[32px] overflow-hidden bg-[#3eb125] p-7 sm:p-8 flex flex-col justify-end shadow-xl group-hover:scale-[1.02] group-hover:shadow-2xl transition-all duration-300">
              
              {/* Top-Left White Segment */}
              <div className="absolute -top-14 -left-14 w-40 h-40 rounded-full bg-white pointer-events-none" />
              {/* Top-Right Large White Lobe */}
              <div className="absolute -top-12 -right-16 w-52 h-52 rounded-full bg-white pointer-events-none" />
              {/* Bottom-Right White Lobe */}
              <div className="absolute -bottom-12 -right-12 w-44 h-44 rounded-full bg-white pointer-events-none" />

              {/* Bold Typography inside */}
              <div className="relative z-10">
                <span className="block text-3xl sm:text-[34px] lg:text-[38px] font-extrabold text-white leading-[1.05] tracking-tight">
                  Mental<br />
                  health for<br />
                  everyone
                </span>
              </div>
            </div>

            {/* Caption Title */}
            <h3 className="mt-4 text-base sm:text-[17px] font-bold text-white tracking-tight leading-snug group-hover:text-slate-200 transition-colors">
              Personalized mental health: The future of care
            </h3>
          </Link>

          {/* CARD 3: 8-Circle Rosette Ring on Pink */}
          <Link href="#research-story-3" className="group flex flex-col focus:outline-none">
            {/* Card Graphic */}
            <div className="relative aspect-square w-full rounded-[28px] sm:rounded-[32px] overflow-hidden bg-[#ffa3bd] flex items-center justify-center p-8 shadow-xl group-hover:scale-[1.02] group-hover:shadow-2xl transition-all duration-300">
              
              {/* 8-Circle Radial Ring (SVG) */}
              <svg viewBox="0 0 240 240" className="w-[68%] h-[68%]" fill="white">
                {/* 8 White Circles arranged radially around center (120, 120) with R=56, r=18 */}
                {/* 0 deg (Right) */}
                <circle cx="176" cy="120" r="18" />
                {/* 45 deg (Bottom-Right) */}
                <circle cx="159.6" cy="159.6" r="18" />
                {/* 90 deg (Bottom) */}
                <circle cx="120" cy="176" r="18" />
                {/* 135 deg (Bottom-Left) */}
                <circle cx="80.4" cy="159.6" r="18" />
                {/* 180 deg (Left) */}
                <circle cx="64" cy="120" r="18" />
                {/* 225 deg (Top-Left) */}
                <circle cx="80.4" cy="80.4" r="18" />
                {/* 270 deg (Top) */}
                <circle cx="120" cy="64" r="18" />
                {/* 315 deg (Top-Right) */}
                <circle cx="159.6" cy="80.4" r="18" />
              </svg>
            </div>

            {/* Caption Title */}
            <h3 className="mt-4 text-base sm:text-[17px] font-bold text-white tracking-tight leading-snug group-hover:text-slate-200 transition-colors">
              Why mental fitness is the new standard
            </h3>
          </Link>

        </div>
      </div>
    </section>
  );
}
