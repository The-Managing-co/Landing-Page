
'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CommingSoon() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      // Initial hidden states
      gsap.set(
        '.gsap-hero, .gsap-coming-soon, .gsap-tagline',
        {
          opacity: 0,
          y: 20,
        }
      );

      gsap.set('.gsap-red-line', {
        scaleY: 0,
        transformOrigin: 'top center',
        opacity: 0,
      });

      gsap.set('.gsap-meta', {
        opacity: 0,
      });

      // Cinematic entrance animation
      tl.to('.gsap-meta', {
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out',
      })
        .to(
          '.gsap-hero',
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: 'power4.out',
          },
          '-=0.8'
        )
        .to(
          '.gsap-red-line',
          {
            scaleY: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'expo.out',
          },
          '-=0.6'
        )
        .to(
          '.gsap-coming-soon',
          {
            opacity: 1,
            y: 0,
            duration: 1,
            letterSpacing: '0.45em',
            ease: 'power3.out',
          },
          '-=0.5'
        )
        .to(
          '.gsap-tagline',
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          '-=0.6'
        );

      // Red line glowing pulse
      gsap.to('.gsap-red-line', {
        opacity: 0.45,
        duration: 2.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 2.2,
      });
    }, container);

    // Desktop mouse parallax
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 768) return;

      const { innerWidth, innerHeight } = window;

      const x = (e.clientX / innerWidth - 0.5) * 12;
      const y = (e.clientY / innerHeight - 0.5) * 12;

      gsap.to(
        container.querySelector('.gsap-hero'),
        {
          x,
          y,
          rotationY: x * 0.35,
          rotationX: -y * 0.35,
          duration: 1.5,
          ease: 'power2.out',
        }
      );
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#0a0a0a] text-neutral-100 flex flex-col justify-between selection:bg-red-500 selection:text-white overflow-hidden font-sans"
    >
      {/* Background Radial Glow & Film Grain */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_45%,rgba(255,255,255,0.035),transparent_70%)]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Header */}
      <header className="gsap-meta relative z-10 w-full px-6 py-6 md:px-12 md:py-8 flex items-center justify-between text-[11px] md:text-xs tracking-[0.25em] text-neutral-400 uppercase font-mono">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
          </span>

          <span className="hidden sm:inline text-neutral-300">
            IT Services & Ventures
          </span>

          <span className="sm:hidden text-neutral-300">
            TMC
          </span>
        </div>

        <div className="text-neutral-500 font-medium">
          Est. 2026
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 -mt-4">
        <div className="flex flex-col items-center text-center max-w-4xl w-full">

          {/* Logo Lockup */}
          <div className="gsap-hero perspective-1000 select-none cursor-default mb-5">
            <div className="relative flex flex-col items-center">
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] font-black uppercase tracking-[-0.03em] leading-none text-white drop-shadow-[0_20px_35px_rgba(0,0,0,0.85)]">
                The Managing Co.
              </h1>

              <div className="mt-3 flex items-center justify-center gap-3 w-full">
                <span className="h-[1px] w-6 sm:w-16 bg-neutral-800" />

                <span className="text-xs sm:text-sm md:text-base tracking-[0.35em] sm:tracking-[0.45em] font-bold text-neutral-300 uppercase">
                  IT Services & Proprietary Projects
                </span>

                <span className="h-[1px] w-6 sm:w-16 bg-neutral-800" />
              </div>
            </div>
          </div>

          {/* Vertical Red Accent */}
          <div className="my-6 sm:my-8 flex justify-center items-center">
            <div className="gsap-red-line w-[1.5px] h-9 sm:h-11 bg-gradient-to-b from-red-600 to-red-400 shadow-[0_0_12px_rgba(239,68,68,0.7)]" />
          </div>

          {/* Coming Soon */}
          <div className="gsap-coming-soon text-[11px] sm:text-xs md:text-sm uppercase font-semibold text-neutral-300 tracking-[0.45em] select-none">
            Coming Soon
          </div>

          {/* Tagline */}
          <p className="gsap-tagline mt-4 text-xs sm:text-sm text-neutral-400 max-w-md mx-auto leading-relaxed font-light tracking-wide px-4">
            Delivering high-impact enterprise IT services and engineering proprietary digital ventures.
          </p>

        </div>
      </main>

      {/* Footer */}
      <footer className="gsap-meta relative z-10 w-full py-6 px-6 text-center text-[10px] md:text-[11px] tracking-[0.25em] text-neutral-400 uppercase font-mono border-t border-neutral-900/60">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
          <span>© 2026 The Managing Co.</span>

          <span className="hidden sm:inline text-neutral-700">
            •
          </span>

          <span className="text-neutral-400">
            All Rights Reserved
          </span>
        </div>
      </footer>
    </div>
  );
}
