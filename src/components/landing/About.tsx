'use client';

import React from 'react';
import Link from 'next/link';
import { UserCheck, ShieldCheck, CreditCard, ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <section className="relative z-20 w-full max-w-full overflow-hidden bg-white text-slate-900 pt-12 sm:pt-16 pb-20 sm:pb-28 px-4 sm:px-6 font-sans">
      
      {/* ----------------- TOP SECTION: PARTNER LOGOS TICKER ----------------- */}
      <div className="max-w-[1020px] mx-auto mb-10 sm:mb-14 border-b border-slate-100 pb-7">
        <div className="flex items-center justify-between gap-4 sm:gap-8 overflow-x-auto no-scrollbar opacity-45 grayscale hover:grayscale-0 hover:opacity-75 transition-all duration-300">
          
          {/* Logo 1 */}
          <div className="flex items-center gap-1.5 shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-slate-800">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="12" cy="12" r="4" fill="currentColor" />
            </svg>
            <span className="font-semibold text-xs sm:text-sm tracking-tight text-slate-800">Logoipsum</span>
          </div>

          {/* Logo 2 */}
          <div className="flex items-center gap-1.5 shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-slate-800">
              <path d="M12 2L15 9H22L16.5 13.5L18.5 20.5L12 16L5.5 20.5L7.5 13.5L2 9H9L12 2Z" />
            </svg>
            <span className="font-semibold text-xs sm:text-sm tracking-tight text-slate-800">Logoipsum</span>
          </div>

          {/* Logo 3 */}
          <div className="flex items-center gap-1.5 shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-slate-800">
              <rect x="3" y="3" width="8" height="8" rx="2" />
              <rect x="13" y="3" width="8" height="8" rx="2" />
              <rect x="3" y="13" width="8" height="8" rx="2" />
              <rect x="13" y="13" width="8" height="8" rx="2" />
            </svg>
            <span className="font-semibold text-xs sm:text-sm tracking-tight text-slate-800">Logoipsum</span>
          </div>

          {/* Logo 4 */}
          <div className="flex items-center gap-1.5 shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-slate-800">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="currentColor" strokeWidth="2.5" fill="none" />
              <path d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18" stroke="currentColor" strokeWidth="2.5" fill="none" />
            </svg>
            <span className="font-semibold text-xs sm:text-sm tracking-tight text-slate-800">Logoipsum</span>
          </div>

          {/* Logo 5 */}
          <div className="flex items-center gap-1.5 shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-slate-800">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" strokeDasharray="4 2" fill="none" />
              <circle cx="12" cy="12" r="3" fill="currentColor" />
            </svg>
            <span className="font-semibold text-xs sm:text-sm tracking-tight text-slate-800">Logoipsum</span>
          </div>

          {/* Logo 6 */}
          <div className="flex items-center gap-1.5 shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-slate-800">
              <path d="M4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20C7.58 20 4 16.42 4 12Z" stroke="currentColor" strokeWidth="2" fill="none" />
              <path d="M8 12L12 8L16 12L12 16L8 12Z" fill="currentColor" />
            </svg>
            <span className="font-semibold text-xs sm:text-sm tracking-tight text-slate-800">Logoipsum</span>
          </div>

          {/* Logo 7 */}
          <div className="flex items-center gap-1.5 shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-slate-800">
              <path d="M12 3L2 12H5V20H19V12H22L12 3Z" fill="currentColor" />
            </svg>
            <span className="font-semibold text-xs sm:text-sm tracking-tight text-slate-800">Logoipsum</span>
          </div>

        </div>
      </div>

      <div className="max-w-[1020px] mx-auto">
        
        {/* ----------------- ABOUT US KICKER & HEADLINE ----------------- */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
          <span className="text-[11px] font-semibold tracking-[0.25em] text-slate-500 uppercase">
            ABOUT US
          </span>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl md:text-[44px] font-medium tracking-tight text-[#0f172a] leading-[1.2]">
            <span>A global consulting partner</span> <br />
            <span>dedicated to building </span>
            {/* Inline Blue Badge */}
            <span className="inline-flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#00a6ff] text-white shadow-sm align-middle mx-1 -translate-y-0.5">
              <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border-2 border-white flex items-center justify-center">
                <span className="w-1 h-1 rounded-full bg-white"></span>
              </span>
            </span>
            <span>smarter</span> <br />
            <span className="text-slate-400 font-normal">and </span>
            {/* Inline Lime Badge */}
            <span className="inline-flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#d4ff32] text-black shadow-sm align-middle mx-1 -translate-y-0.5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" />
              </svg>
            </span>
            <span className="text-slate-400 font-normal">more adaptive</span>
          </h2>
        </div>

        {/* ----------------- BENTO GRID (3 COLUMNS) ----------------- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-stretch">
          
          {/* CARD 1: Blue Sky & Founder Photo with 120+ overlay */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-b from-[#38bdf8] via-[#0284c7] to-[#0369a1] p-4 sm:p-5 flex flex-col justify-between min-h-[350px] sm:min-h-[380px] border border-slate-200/80 shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-lg transition-all duration-300">
            {/* Photo background */}
            <div 
              className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-90 transition-all duration-500"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=800&q=80')`,
                backgroundPosition: 'center 20%',
              }}
            />
            {/* Blue gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-sky-950/70 via-sky-800/10 to-sky-500/30 pointer-events-none" />

            {/* Top Bar of Card 1 */}
            <div className="relative z-10 flex items-center justify-between w-full">
              <span className="font-extrabold tracking-wider text-xs sm:text-sm text-white drop-shadow">
                IPSUM
              </span>
              <div className="w-7 h-7 rounded-lg bg-white/95 backdrop-blur-md flex items-center justify-center shadow-sm">
                <div className="flex items-end gap-0.5 h-2.5">
                  <span className="w-0.5 h-1.5 bg-slate-900 rounded-full animate-pulse"></span>
                  <span className="w-0.5 h-3 bg-slate-900 rounded-full"></span>
                  <span className="w-0.5 h-1.5 bg-slate-900 rounded-full"></span>
                </div>
              </div>
            </div>

            {/* Bottom Floating White Metric Card */}
            <div className="relative z-10 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-lg border border-slate-200/80 mt-20">
              <div className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-1.5">
                120+
              </div>
              <p className="text-xs text-slate-500 font-normal leading-relaxed">
                Collaborating with leading AI and cloud technology providers.
              </p>
            </div>
          </div>

          {/* CARD 2: 100% Commitment & Team Testimonial */}
          <div className="rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 p-5 sm:p-6 flex flex-col justify-between min-h-[350px] sm:min-h-[380px] shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-lg hover:border-slate-300 transition-all duration-300">
            {/* Top Section */}
            <div>
              <p className="text-[11px] sm:text-xs font-medium text-slate-500 tracking-wide mb-1.5">
                Commitment to measurable
              </p>
              <div className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
                100%
              </div>
            </div>

            {/* Bottom Section */}
            <div>
              {/* Overlapping Avatars */}
              <div className="flex -space-x-2 mb-3.5 items-center">
                <img
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Team member 1"
                />
                <img
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Team member 2"
                />
                <img
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Team member 3"
                />
                <img
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full ring-2 ring-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
                  alt="Team member 4"
                />
              </div>

              {/* Quote */}
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                &ldquo;Their automation strategy completely reshaped how we work. It&apos;s efficient, intelligent, and seamless.&rdquo;
              </p>
            </div>
          </div>

          {/* CARD 3: Lime Metric Card + Dark Pill Card */}
          <div className="flex flex-col gap-3 sm:gap-4 justify-between min-h-[350px] sm:min-h-[380px]">
            {/* Top Lime Card */}
            <div className="rounded-2xl sm:rounded-3xl bg-[#d4ff32] border border-lime-300 p-5 sm:p-6 flex-1 flex flex-col justify-between shadow-[0_8px_24px_rgba(212,255,50,0.25)] hover:shadow-[0_12px_28px_rgba(212,255,50,0.35)] transition-all">
              <div>
                <p className="text-[11px] sm:text-xs font-semibold text-black/75 tracking-wide mb-1">
                  Data Points
                </p>
                <div className="text-3xl sm:text-4xl font-bold tracking-tight text-black mb-2">
                  520k+
                </div>
              </div>
              <p className="text-xs text-black/80 font-normal leading-relaxed">
                Analyzed monthly to power smarter business strategies.
              </p>
            </div>

            {/* Bottom Dark Pill Card */}
            <div className="rounded-xl sm:rounded-2xl bg-[#0f172a] text-white px-5 py-4 flex items-center justify-between shadow-md hover:bg-black transition-colors">
              <span className="text-xs font-medium text-slate-400 tracking-wide">
                Continents
              </span>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                20+
              </span>
            </div>
          </div>

        </div>

        {/* ----------------- BOTTOM SECTION: FREELANCE SOLUTION FEATURE CARDS ----------------- */}
        <div className="mt-20 sm:mt-28 pt-16 sm:pt-20 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* LEFT: 3 Feature Cards (/01, /02, /03) with clear visible gray borders & elevated shadows */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-4">
              
              {/* Feature Card 1: /01 Dedicated hiring experts */}
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between min-h-[360px] sm:min-h-[400px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-slate-300 hover:-translate-y-1 transition-all duration-300">
                <div>
                  <span className="text-xs sm:text-sm font-mono text-slate-400 tracking-widest">
                    /01
                  </span>
                </div>
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#2563eb] text-white flex items-center justify-center shadow-md shadow-blue-500/25 mb-6">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 mb-2 leading-snug">
                    Dedicated hiring experts
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed">
                    A personal representative to streamline your hiring
                  </p>
                </div>
              </div>

              {/* Feature Card 2: /02 Satisfaction guarantee */}
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between min-h-[360px] sm:min-h-[400px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-slate-300 hover:-translate-y-1 transition-all duration-300">
                <div>
                  <span className="text-xs sm:text-sm font-mono text-slate-400 tracking-widest">
                    /02
                  </span>
                </div>
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#0f172a] text-white flex items-center justify-center shadow-md mb-6">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 mb-2 leading-snug">
                    Satisfaction guarantee
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed">
                    Order confidently, with guaranteed refunds.
                  </p>
                </div>
              </div>

              {/* Feature Card 3: /03 Advanced management */}
              <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-7 flex flex-col justify-between min-h-[360px] sm:min-h-[400px] shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:border-slate-300 hover:-translate-y-1 transition-all duration-300">
                <div>
                  <span className="text-xs sm:text-sm font-mono text-slate-400 tracking-widest">
                    /03
                  </span>
                </div>
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#0f172a] text-white flex items-center justify-center shadow-md mb-6">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 mb-2 leading-snug">
                    Advanced management
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed">
                    Seamlessly integrate freelancer into your team
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT: Feature Badge, Bold Copy & Action Buttons */}
            <div className="lg:col-span-5 pl-0 lg:pl-4">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium text-slate-700 bg-white border border-slate-200/90 shadow-sm mb-6">
                Feature
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold tracking-tight text-slate-900 leading-[1.28] mb-8">
                A high-end freelance{' '}
                <span className="bg-[#dbeafe] text-[#1d4ed8] px-2.5 py-0.5 rounded-lg border border-blue-200/80 font-semibold inline-block">
                  solution
                </span>{' '}
                offering pro services to support all your business needs.
              </h2>

              <div className="flex items-center gap-3">
                <Link
                  href="#try"
                  className="px-7 py-3.5 rounded-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-semibold shadow-lg shadow-blue-500/25 transition-all duration-200 active:scale-95"
                >
                  Try Now
                </Link>
                <Link
                  href="#try"
                  className="w-12 h-12 rounded-full bg-[#0f172a] hover:bg-black text-white flex items-center justify-center shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
                  aria-label="Try now details"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}
