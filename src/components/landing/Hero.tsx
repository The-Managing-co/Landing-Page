
'use client';

import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Sparkles, Plus } from 'lucide-react';

const teamImages = [
  {
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=160&h=160&fit=crop&crop=faces',
    alt: 'Creative professional',
    animation: 'float-one',
  },
  {
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&h=160&fit=crop&crop=faces',
    alt: 'Digital professional',
    animation: 'float-two',
  },
  {
    src: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=160&h=160&fit=crop&crop=faces',
    alt: 'Creative team member',
    animation: 'float-three',
  },
];

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Scroll-based parallax effect
  useEffect(() => {
    const section = sectionRef.current;
    const background = backgroundRef.current;
    const content = contentRef.current;

    if (!section || !background || !content) return;

    const mediaQuery = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    if (mediaQuery.matches) return;

    let frameId = 0;

    const updateParallax = () => {
      const rect = section.getBoundingClientRect();

      // How far the hero has moved above the viewport
      const scrollDistance = Math.max(0, -rect.top);

      const sectionHeight = section.offsetHeight;

      // Background moves slower than the page
      const backgroundMovement = scrollDistance * 0.32;

      // Content moves at a different speed
      const contentMovement = scrollDistance * 0.16;

      // Fade content while scrolling
      const opacity = Math.max(
        0,
        Math.min(1, 1 - scrollDistance / (sectionHeight * 0.85))
      );

      background.style.transform =
        `translate3d(0, ${backgroundMovement}px, 0) scale(1.15)`;

      content.style.transform =
        `translate3d(0, ${contentMovement}px, 0)`;

      content.style.opacity = String(opacity);

      frameId = 0;
    };

    const handleScroll = () => {
      if (!frameId) {
        frameId = requestAnimationFrame(updateParallax);
      }
    };

    updateParallax();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);

      if (frameId) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden bg-neutral-950"
    >
      {/* Parallax Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: "url('/hero1.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          transform: 'translate3d(0, 0, 0) scale(1.15)',
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Top gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/50 to-transparent" />

      {/* Parallax Hero Content */}
      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-5 py-28 text-center will-change-transform"
      >

        {/* Floating profile images */}
        <div className="mb-9 flex items-center justify-center gap-5 sm:gap-7">

          {teamImages.map((person, index) => (
            <div
              key={person.alt}
              className={`${person.animation} relative`}
              style={{
                animationDelay: `${index * 0.35}s`,
              }}
            >
              <div className="h-[58px] w-[58px] overflow-hidden rounded-full border-2 border-white/70 bg-neutral-800 shadow-xl shadow-black/30 sm:h-[68px] sm:w-[68px]">
                <img
                  src={person.src}
                  alt={person.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-125"
                />
              </div>

              {index === 1 && (
                <span className="absolute -right-1 -top-1 h-3.5 w-3.5 rounded-full border-2 border-neutral-950 bg-white" />
              )}
            </div>
          ))}

        </div>

        {/* Heading */}
        <h1 className="max-w-5xl text-balance text-4xl font-semibold leading-[1.12] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl">

          Your Marketplace

          <span className="mx-2 inline-flex h-9 w-9 translate-y-[-3px] items-center justify-center rounded-xl border border-white/20 bg-white text-black shadow-lg sm:h-11 sm:w-11 md:h-14 md:w-14">
            <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
          </span>

          for

          <br />

          Creative

          <span className="mx-2 inline-flex h-9 w-9 translate-y-[-3px] items-center justify-center rounded-full border border-white/20 bg-neutral-700/80 text-white sm:h-11 sm:w-11 md:h-14 md:w-14">
            <Plus className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
          </span>

          Digital Services

        </h1>

        {/* Description */}
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-neutral-300 sm:text-base md:text-lg">
          Scale your professional workforce with talented freelancers,
          creative minds and powerful digital solutions.
        </p>

        {/* CTA */}
        <div className="mt-9 flex items-center justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-white py-3 pl-7 pr-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-neutral-200 hover:shadow-xl hover:shadow-white/10"
          >
            Join Now

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-950 text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={17} strokeWidth={2} />
            </span>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute -bottom-16 flex flex-col items-center gap-2 pb-10">
          <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
            Scroll to explore
          </span>

          <div className="h-8 w-px bg-gradient-to-b from-white/50 to-transparent" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
