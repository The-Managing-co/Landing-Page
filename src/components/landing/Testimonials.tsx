'use client';

import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialItem {
  id: string;
  name: string;
  avatar: string;
  content: string;
  rating: number;
}

const leftTestimonial: TestimonialItem = {
  id: 'brooklyn-simmons',
  name: 'Brooklyn Simmons',
  avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=140&h=140&q=80',
  content:
    'ProHub has completely transformed how I approach freelance projects. The platform is user-friendly, and the freelancers are professional, communicative, and highly skilled.',
  rating: 5,
};

const centerTestimonials: TestimonialItem[] = [
  {
    id: 'farrel-alexa',
    name: 'Farrel Alexa',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=140&h=140&q=80',
    content:
      'ProHub made finding top-tier talent effortless! Highly recommend for quality freelancers.',
    rating: 5,
  },
  {
    id: 'esther-howard',
    name: 'Esther Howard',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=140&h=140&q=80',
    content:
      'I completed my project ahead of schedule thanks to ProHub’s amazing professionals.',
    rating: 5,
  },
  {
    id: 'kristin-watson',
    name: 'Kristin Watson',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=140&h=140&q=80',
    content:
      'ProHub connected me with the perfect freelancer. I couldn’t be happier with the outcome!',
    rating: 5,
  },
];

const rightTestimonials: TestimonialItem[] = [
  {
    id: 'robert-fox',
    name: 'Robert Fox',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=140&h=140&q=80',
    content:
      'As a small business owner, finding reliable and affordable freelance support used to be a challenge. ProHub has been a game-changer for me.',
    rating: 5,
  },
  {
    id: 'devon-lane',
    name: 'Devon Lane',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=140&h=140&q=80',
    content:
      'ProHub truly bridges the gap between quality work and affordability. A freelancer’s dream!',
    rating: 5,
  },
];

function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <div className="bg-[#fcfdfd] border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all duration-200">
      {/* Avatar */}
      <img
        src={item.avatar}
        alt={item.name}
        className="w-11 h-11 rounded-full object-cover ring-2 ring-slate-100 shadow-sm mb-3.5"
      />

      {/* Name */}
      <h3 className="text-base font-semibold tracking-tight text-slate-900 mb-2">
        {item.name}
      </h3>

      {/* Review Text */}
      <p className="text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed mb-4">
        {item.content}
      </p>

      {/* Star Rating */}
      <div className="flex items-center gap-0.5 text-amber-400">
        {[...Array(item.rating)].map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative z-20 w-full max-w-full overflow-hidden bg-white text-slate-900 pt-8 sm:pt-12 pb-24 sm:pb-32 px-4 sm:px-6 font-sans">
      <div className="max-w-[1020px] mx-auto">
        
        {/* Top Header Section */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          {/* Pill Badge */}
          <div className="inline-flex items-center px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-medium text-slate-600 bg-white border border-slate-200/90 shadow-sm mb-4">
            Testimonial
          </div>

          {/* Heading with Blue Speech Icon Badge */}
          <h2 className="text-3xl sm:text-4xl md:text-[44px] font-semibold tracking-tight text-slate-900 leading-tight flex items-center justify-center flex-wrap">
            <span>What People</span>
            {/* Blue Icon Badge */}
            <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#2563eb] text-white shadow-sm align-middle mx-1.5 -translate-y-0.5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
              </svg>
            </span>
            <span>Says</span>
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-[13px] text-slate-400 font-normal leading-relaxed mt-3 px-4">
            Don&apos;t just take our word for it—see what our clients and freelancers have to say about their experience with ProHub
          </p>
        </div>

        {/* 3-Column Staggered Masonry Layout matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 items-center">
          
          {/* Column 1 (Left): 1 Card centered vertically */}
          <div className="flex flex-col justify-center">
            <TestimonialCard item={leftTestimonial} />
          </div>

          {/* Column 2 (Center): 3 Stacked Cards */}
          <div className="space-y-4 sm:space-y-5">
            {centerTestimonials.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>

          {/* Column 3 (Right): 2 Stacked Cards */}
          <div className="space-y-4 sm:space-y-5">
            {rightTestimonials.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
