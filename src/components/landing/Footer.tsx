'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-20 w-full max-w-full overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#edf2f7] text-slate-900 pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 font-sans border-t border-slate-200/60">
      
      {/* Subtle atmospheric ambient glow behind footer */}
      <div 
        className="absolute bottom-0 right-0 w-[500px] h-[350px] pointer-events-none opacity-40 blur-[90px]"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.35) 0%, rgba(147, 51, 234, 0.15) 50%, transparent 80%)',
        }}
      />

      <div className="max-w-[1020px] mx-auto relative z-10 flex flex-col justify-between min-h-[260px]">
        
        {/* Main Footer 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-6 mb-16 sm:mb-20">
          
          {/* COLUMN 1: Brand Logo, Socials & Tagline */}
          <div className="space-y-4">
            {/* Logo + Socials Row */}
            <div className="flex items-center gap-3">
              {/* ProHub Logo */}
              <Link href="/" className="flex items-center gap-2 group">
                <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center shadow-sm">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10.5 17.5C9.12 17.5 8 16.38 8 15C8 13.62 9.12 12.5 10.5 12.5C11.88 12.5 13 13.62 13 15C13 16.38 11.88 17.5 10.5 17.5ZM13.5 11.5C12.12 11.5 11 10.38 11 9C11 7.62 12.12 6.5 13.5 6.5C14.88 6.5 16 7.62 16 9C16 10.38 14.88 11.5 13.5 11.5Z" />
                  </svg>
                </span>
                <span className="font-bold text-sm tracking-tight text-slate-900 group-hover:text-black transition-colors">
                  ProHub
                </span>
              </Link>

              {/* Social Media Icons */}
              <div className="flex items-center gap-2.5 ml-2">
                {/* GitHub */}
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-5 h-5 flex items-center justify-center text-slate-700 hover:text-black transition-colors"
                  aria-label="GitHub"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </Link>

                {/* X / Twitter */}
                <Link
                  href="https://x.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-5 h-5 flex items-center justify-center text-slate-700 hover:text-black transition-colors"
                  aria-label="X"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </Link>

                {/* Instagram */}
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-5 h-5 flex items-center justify-center text-slate-700 hover:text-black transition-colors"
                  aria-label="Instagram"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-xs text-slate-500 font-normal leading-relaxed max-w-[210px] pt-1">
              Scale your professional workforce with freelancers
            </p>
          </div>

          {/* COLUMN 2: Categories */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 mb-3.5 tracking-tight">
              Categories
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-500 font-normal">
              <li>
                <Link href="#graphics-design" className="hover:text-slate-900 transition-colors">
                  Graphics Design
                </Link>
              </li>
              <li>
                <Link href="#video-animation" className="hover:text-slate-900 transition-colors">
                  Video &amp; Animation
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="#ui-ux-design" className="hover:text-slate-900 transition-colors">
                  UI UX Design
                </Link>
                <span className="ml-2 px-1.5 py-0.5 rounded-full text-[9px] font-bold text-white bg-[#2563eb] leading-none">
                  New
                </span>
              </li>
              <li>
                <Link href="#music-audio" className="hover:text-slate-900 transition-colors">
                  Music &amp; Audio
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: For Clients */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 mb-3.5 tracking-tight">
              For Clients
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-500 font-normal">
              <li>
                <Link href="#how-it-works" className="hover:text-slate-900 transition-colors">
                  How ProHub Works
                </Link>
              </li>
              <li className="flex items-center">
                <Link href="#trust-safety" className="hover:text-slate-900 transition-colors">
                  Trust &amp; Safety
                </Link>
                <span className="ml-2 px-1.5 py-0.5 rounded-full text-[9px] font-bold text-white bg-[#9333ea] leading-none">
                  New
                </span>
              </li>
              <li>
                <Link href="#quality-guide" className="hover:text-slate-900 transition-colors">
                  Quality Guide
                </Link>
              </li>
              <li>
                <Link href="#learn" className="hover:text-slate-900 transition-colors">
                  Prohub Learn
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 4: Company */}
          <div>
            <h4 className="text-xs font-semibold text-slate-900 mb-3.5 tracking-tight">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-500 font-normal">
              <li className="flex items-center">
                <Link href="#careers" className="hover:text-slate-900 transition-colors">
                  Careers
                </Link>
                <span className="ml-2 px-2 py-0.5 rounded-full text-[9px] font-medium text-slate-200 bg-slate-700/80 leading-none">
                  We&apos;re hiring!
                </span>
              </li>
              <li>
                <Link href="#about" className="hover:text-slate-900 transition-colors">
                  About us
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Row matching columns alignment */}
        <div className="pt-6 border-t border-slate-200/60 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 items-center text-xs text-slate-400">
          
          {/* Copyright below branding column */}
          <div>
            <p className="text-[11px] sm:text-xs">
              &copy; 2024 ProHub .All Right Reserved.
            </p>
          </div>

          {/* Privacy Policy below Categories column */}
          <div>
            <Link href="#privacy" className="hover:text-slate-700 transition-colors text-[11px] sm:text-xs">
              Privacy Policy
            </Link>
          </div>

          {/* Term of Service below For Clients column */}
          <div>
            <Link href="#terms" className="hover:text-slate-700 transition-colors text-[11px] sm:text-xs">
              Term of Service
            </Link>
          </div>

          {/* Cookies Setting below Company column */}
          <div>
            <Link href="#cookies" className="hover:text-slate-700 transition-colors text-[11px] sm:text-xs">
              Cookies Setting
            </Link>
          </div>

        </div>

      </div>
    </footer>
  );
}
