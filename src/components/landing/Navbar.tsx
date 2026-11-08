'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#features' },
  { label: 'About', href: '#outcomes' },
  { label: 'Services', href: '#how-it-works' },
  { label: 'Clients', href: '#use-cases' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Close the mobile menu on Escape and lock body scroll while open
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <nav className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:grid lg:grid-cols-3 lg:px-8">
        {/* left: links (desktop only) */}
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/80 transition hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* center: logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center lg:justify-self-center"
          aria-label="Hobbes home"
        >
          <Image
            src="/logo.svg"
            alt="Hobbes"
            width={150}
            height={24}
            priority
     
          />
        </Link>

        {/* right: buttons */}
        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <button
            type="button"
            className="hidden h-10 items-center justify-center rounded-full bg-neutral-700/70 px-5 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-neutral-700 md:inline-flex"
          >
            Products
          </button>

          <button
            type="button"
            className="inline-flex h-10 items-center justify-center rounded-full bg-white px-4 text-sm font-medium text-black transition hover:bg-white/90 sm:px-5"
          >
            Start Demo
          </button>

          {/* hamburger (mobile + tablet) */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-700/70 text-white backdrop-blur-sm transition hover:bg-neutral-700 lg:hidden"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* mobile + tablet menu */}
      {open && (
        <>
          {/* backdrop: tap outside to close */}
          <div
            className="fixed inset-0 top-16 z-10 bg-black/40 lg:hidden"
            onClick={closeMenu}
            aria-hidden="true"
          />

          <div
            id="mobile-menu"
            className="relative z-20 mx-4 mt-1 rounded-2xl bg-black/70 p-5 backdrop-blur-md sm:mx-6 lg:hidden"
          >
            <ul className="flex flex-col divide-y divide-white/10">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block py-3 text-base font-medium text-white/80 transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col gap-3 sm:hidden">
              <button
                type="button"
                onClick={closeMenu}
                className="h-11 w-full rounded-full bg-neutral-700/70 text-sm font-medium text-white transition hover:bg-neutral-700"
              >
                Talk to Sales
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
