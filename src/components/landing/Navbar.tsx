'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'Resources', href: '#resources' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Careers', href: '#careers' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#020617]/80 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">
          
          {/* Left: Antimetal Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            {/* Antimetal Signature Dot Cluster / Constellation Icon */}
            <div className="relative w-6 h-6 flex items-center justify-center">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-white group-hover:text-lime-300 transition-colors">
                <circle cx="5" cy="12" r="1.8" />
                <circle cx="9" cy="8" r="1.8" />
                <circle cx="9" cy="16" r="1.8" />
                <circle cx="13" cy="5" r="1.8" />
                <circle cx="13" cy="12" r="2.2" />
                <circle cx="13" cy="19" r="1.8" />
                <circle cx="18" cy="12" r="1.8" />
              </svg>
            </div>
            <span className="text-lg font-semibold tracking-tight text-white group-hover:text-gray-200 transition-colors">
              Antimetal
            </span>
          </Link>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Auth & CTA */}
          <div className="hidden md:flex items-center gap-5">
            <Link
              href="#login"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Log in
            </Link>
            <Link
              href="#demo"
              className="px-4 py-2 rounded-full text-xs font-semibold tracking-wide text-white border border-white/20 bg-white/[0.06] hover:bg-white/15 backdrop-blur-sm transition-all duration-200 active:scale-95 shadow-sm"
            >
              Book a demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pt-3 pb-6 bg-[#020617]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <Link
                href="#login"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2 text-sm font-medium text-gray-300 hover:text-white"
              >
                Log in
              </Link>
              <Link
                href="#demo"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center py-2 rounded-full text-xs font-semibold text-black bg-[#d4ff32] hover:bg-[#c2f022] shadow transition-colors"
              >
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
