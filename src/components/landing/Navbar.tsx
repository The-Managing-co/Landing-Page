'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/85 backdrop-blur-md border-b border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-400 to-indigo-500 flex items-center justify-center p-[2px] shadow-[0_0_15px_rgba(59,130,246,0.3)]">
            <div className="w-full h-full bg-[#09090b] rounded-[10px] flex items-center justify-center">
             <img src="FullWhiteLogo.svg" alt="logo" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-extrabold tracking-tight text-white group-hover:text-neutral-200 transition-colors">
              THE MANAGING CO.
            </span>
            <span className="text-[10px] tracking-widest uppercase text-neutral-400 font-mono">
              IT Services & Ventures
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-mono text-neutral-400">
          <a href="#services" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#products" className="hover:text-white transition-colors">
            Our Products
          </a>
          <a href="#stats" className="hover:text-white transition-colors">
            Impact
          </a>
          <a href="#projects" className="hover:text-white transition-colors">
            Client Work
          </a>
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(37,99,235,0.35)]"
          >
            Start a Project
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-neutral-400 hover:text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0c] border-b border-neutral-800 px-6 py-6 flex flex-col gap-4 text-xs font-mono uppercase tracking-widest text-neutral-300">
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-white">
            Services
          </a>
          <a href="#products" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-white">
            Our Products
          </a>
          <a href="#stats" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-white">
            Impact
          </a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="py-2 hover:text-white">
            Client Work
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center py-3 bg-blue-600 text-white font-bold rounded-lg uppercase"
          >
            Start a Project
          </a>
        </div>
      )}
    </nav>
  );
}