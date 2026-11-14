'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CreditCard } from 'lucide-react';

export default function Planes() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section className="relative z-20 w-full max-w-full overflow-hidden bg-[#0c0d12] text-white pt-16 sm:pt-24 pb-24 sm:pb-32 px-4 sm:px-6 font-sans">
      <div className="max-w-[1020px] mx-auto">
        
        {/* Top Header Section */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          {/* Pill Badge */}
          <div className="inline-flex items-center px-4 py-1 rounded-full text-[11px] sm:text-xs font-medium text-slate-300 bg-white/[0.04] border border-white/10 shadow-sm mb-4">
            Pricing
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold tracking-tight text-white leading-tight">
            Pricing Made Easy
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-[13px] text-slate-400 font-normal leading-relaxed mt-2.5 mb-7">
            Choose the pricing that suits you best
          </p>

          {/* Billing Cycle Toggle */}
          <div className="flex items-center justify-center gap-3 text-xs sm:text-[13px] font-medium">
            <span
              onClick={() => setIsYearly(false)}
              className={`cursor-pointer transition-colors ${
                !isYearly ? 'text-white' : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              Monthly
            </span>

            {/* Switch */}
            <button
              type="button"
              role="switch"
              aria-checked={isYearly}
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-11 h-6 rounded-full bg-slate-800 border border-white/10 p-0.5 transition-colors cursor-pointer"
            >
              <div
                className={`w-4 h-4 rounded-full bg-white shadow-md transition-transform duration-200 ease-in-out ${
                  isYearly ? 'translate-x-5' : 'translate-x-0.5'
                }`}
              />
            </button>

            <span
              onClick={() => setIsYearly(true)}
              className={`cursor-pointer transition-colors flex items-center gap-1.5 ${
                isYearly ? 'text-white' : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              Yearly
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#2563eb] text-white shadow-sm">
                SAVE 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="space-y-5 sm:space-y-6">
          
          {/* Top Row: Basic Plan & Pro Plan (2 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            
            {/* CARD 1: Basic Plan ($0) */}
            <div className="bg-[#16171d] border border-white/[0.06] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl hover:border-white/10 transition-all duration-200">
              <div>
                {/* Price & Plan Tag */}
                <div className="flex items-baseline justify-between mb-2">
                  <div className="flex items-baseline">
                    <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                      $0
                    </span>
                    <span className="text-xs text-slate-400 font-normal ml-1.5">
                      /Month
                    </span>
                  </div>
                  <span className="text-xs font-medium text-slate-300 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03]">
                    Basic Plan
                  </span>
                </div>

                {/* Billing Note */}
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
                  <CreditCard className="w-3.5 h-3.5 text-slate-400" />
                  <span>{isYearly ? 'Billed annually, Yearly' : 'Billed monthly'}</span>
                </div>

                {/* CTAs */}
                <div className="flex items-center gap-4 mb-6">
                  <Link
                    href="#get-started"
                    className="px-6 py-2.5 rounded-xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/10 text-white text-xs sm:text-sm font-medium transition-all"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#demo"
                    className="text-slate-400 hover:text-white text-xs sm:text-sm font-medium transition-colors"
                  >
                    Try Demo
                  </Link>
                </div>
              </div>

              {/* Nested Features Box */}
              <div className="bg-[#101116] border border-white/[0.04] rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-300">
                  <svg className="w-4 h-4 text-white shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Post up to 3 jobs per month.</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-300">
                  <svg className="w-4 h-4 text-white shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Access to basic freelancers.</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-300">
                  <svg className="w-4 h-4 text-white shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Secure payment processing.</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-300">
                  <svg className="w-4 h-4 text-white shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Standard customer support.</span>
                </div>
              </div>
            </div>

            {/* CARD 2: Pro Plan ($16) - Featured Blue Button */}
            <div className="bg-[#16171d] border border-white/[0.06] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl hover:border-white/10 transition-all duration-200">
              <div>
                {/* Price & Plan Tag */}
                <div className="flex items-baseline justify-between mb-2">
                  <div className="flex items-baseline">
                    <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                      ${isYearly ? '16' : '20'}
                    </span>
                    <span className="text-xs text-slate-400 font-normal ml-1.5">
                      /Month
                    </span>
                  </div>
                  <span className="text-xs font-medium text-slate-300 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03]">
                    Pro Plan
                  </span>
                </div>

                {/* Billing Note */}
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
                  <CreditCard className="w-3.5 h-3.5 text-slate-400" />
                  <span>{isYearly ? 'Billed annually, Yearly' : 'Billed monthly'}</span>
                </div>

                {/* CTAs with Electric Blue Primary Button */}
                <div className="flex items-center gap-4 mb-6">
                  <Link
                    href="#get-started"
                    className="px-6 py-2.5 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs sm:text-sm font-medium shadow-lg shadow-blue-600/30 transition-all"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#demo"
                    className="text-slate-400 hover:text-white text-xs sm:text-sm font-medium transition-colors"
                  >
                    Try Demo
                  </Link>
                </div>
              </div>

              {/* Nested Features Box */}
              <div className="bg-[#101116] border border-white/[0.04] rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-300">
                  <svg className="w-4 h-4 text-white shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Unlimited job postings.</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-300">
                  <svg className="w-4 h-4 text-white shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Access to top-rated freelancers.</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-300">
                  <svg className="w-4 h-4 text-white shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Priority support for faster assistance.</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-300">
                  <svg className="w-4 h-4 text-white shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Project management tools included.</span>
                </div>
              </div>
            </div>

          </div>

          {/* CARD 3: Custom Pricing (Full Width Card) */}
          <div className="bg-[#16171d] border border-white/[0.06] rounded-3xl p-6 sm:p-8 shadow-xl hover:border-white/10 transition-all duration-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
              
              {/* Left Column: Plan Tag, Price, CTAs */}
              <div className="flex flex-col justify-between h-full">
                <div>
                  <span className="text-xs font-medium text-slate-300 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] inline-block mb-4">
                    Pro Plan
                  </span>

                  <div className="flex items-baseline mb-2">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                      $Custom
                    </span>
                    <span className="text-xs sm:text-sm text-slate-400 font-normal ml-2">
                      (Pricing)
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-6 sm:mb-8">
                    <CreditCard className="w-3.5 h-3.5 text-slate-400" />
                    <span>{isYearly ? 'Billed annually, Yearly' : 'Billed monthly'}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Link
                    href="#get-started"
                    className="px-6 py-2.5 rounded-xl bg-white/[0.07] hover:bg-white/[0.12] border border-white/10 text-white text-xs sm:text-sm font-medium transition-all"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#demo"
                    className="text-slate-400 hover:text-white text-xs sm:text-sm font-medium transition-colors"
                  >
                    Try Demo
                  </Link>
                </div>
              </div>

              {/* Right Column: Custom Plan Enterprise Features */}
              <div className="bg-[#101116] border border-white/[0.04] rounded-2xl p-5 sm:p-6 space-y-3">
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-300">
                  <svg className="w-4 h-4 text-white shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Dedicated Account Manager</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-300">
                  <svg className="w-4 h-4 text-white shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Access to Premium Talent Pool</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-300">
                  <svg className="w-4 h-4 text-white shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Custom Project Management Tools</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-300">
                  <svg className="w-4 h-4 text-white shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Bulk Hiring Discounts</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-300">
                  <svg className="w-4 h-4 text-white shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Advanced Analytics & Reporting</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-[13px] text-slate-300">
                  <svg className="w-4 h-4 text-white shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Scalable Solutions</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
