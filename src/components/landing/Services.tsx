'use client';

import React from 'react';
import { PenTool, Monitor, Heart, Play, ArrowUpRight } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  isDark?: boolean;
  avatars: string[];
}

const servicesData: ServiceItem[] = [
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    description: "Visually and emotionally communicate a brand's values, personality.",
    icon: <PenTool className="w-4 h-4 text-slate-800" />,
    avatars: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&h=120&q=80',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&h=120&q=80',
    ],
  },
  {
    id: 'uiux-design',
    title: 'UIUX Design',
    description: 'Crafting Visually Stunning and User-Centric Websites.',
    isDark: true,
    icon: <Monitor className="w-4 h-4 text-slate-900" />,
    avatars: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&h=120&q=80',
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&h=120&q=80',
    ],
  },
  {
    id: 'social-media',
    title: 'Social Media',
    description: 'Strategize, create, and manage engaging content across platforms to build brand awareness.',
    icon: <Heart className="w-4 h-4 text-slate-800 fill-slate-800" />,
    avatars: [
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=120&h=120&q=80',
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&h=120&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
      'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=120&h=120&q=80',
    ],
  },
  {
    id: 'animation',
    title: 'Animation',
    description: 'visually engaging and dynamic motion graphics or character animations that bring stories, concepts, or ideas to life.',
    icon: <Play className="w-4 h-4 text-slate-800 fill-slate-800 ml-0.5" />,
    avatars: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
      'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&h=120&q=80',
      'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=120&h=120&q=80',
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&h=120&q=80',
    ],
  },
];

export default function Services() {
  return (
    <section className="relative z-20 w-full max-w-full overflow-hidden bg-white text-slate-900 pt-8 sm:pt-12 pb-24 sm:pb-28 px-4 sm:px-6 font-sans">
      <div className="max-w-[1020px] mx-auto">
        
        {/* Top Header Row matching screenshot */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
          {/* Left Title */}
          <div>
            <div className="inline-flex items-center px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-medium text-slate-600 bg-white border border-slate-200/90 shadow-sm mb-4">
              Talent
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-[46px] font-semibold tracking-tight text-slate-900 leading-[1.12]">
              Explore Our <br />
              <span>Expert </span>
              {/* Purple Sparkle/Star Badge */}
              <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#9333ea] text-white shadow-sm align-middle mx-1 -translate-y-0.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.4 8.6L21 9.2L16 13.8L17.5 20.4L12 17L6.5 20.4L8 13.8L3 9.2L9.6 8.6L12 2Z" />
                </svg>
              </span>
              <span>Talent</span>
            </h2>
          </div>

          {/* Right Subtitle */}
          <p className="text-xs sm:text-[13px] text-slate-400 font-normal leading-relaxed sm:text-right max-w-[210px]">
            we connect you with the best professionals from around the world.
          </p>
        </div>

        {/* 2x2 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className={`group relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[310px] sm:min-h-[340px] transition-all duration-300 hover:shadow-lg ${
                service.isDark
                  ? 'bg-[#121316] text-white shadow-md'
                  : 'bg-[#fbfcfd] border border-slate-100/90 text-slate-900 shadow-sm hover:border-slate-200'
              }`}
            >
              {/* Top: Icon Badge & Title */}
              <div>
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-sm mb-5 ${
                    service.isDark
                      ? 'bg-white text-slate-900'
                      : 'bg-[#eef2f6] text-slate-800'
                  }`}
                >
                  {service.icon}
                </div>

                <h3
                  className={`text-xl sm:text-2xl font-semibold tracking-tight ${
                    service.isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {service.title}
                </h3>
              </div>

              {/* Bottom: Description, Avatars & Arrow CTA */}
              <div>
                <p
                  className={`text-xs sm:text-[13px] font-normal leading-relaxed mb-6 max-w-[310px] ${
                    service.isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  {service.description}
                </p>

                <div className="flex items-center justify-between pt-2">
                  {/* Avatar Stack */}
                  <div className="flex -space-x-2 items-center">
                    {service.avatars.map((avatar, idx) => (
                      <img
                        key={idx}
                        src={avatar}
                        alt="Expert profile"
                        className={`w-8 h-8 rounded-full object-cover shadow-sm ${
                          service.isDark
                            ? 'ring-2 ring-[#121316]'
                            : 'ring-2 ring-white'
                        }`}
                      />
                    ))}
                  </div>

                  {/* Circular Arrow Button */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer ${
                      service.isDark
                        ? 'border border-white/10 bg-white/[0.04] text-slate-400 group-hover:text-white group-hover:border-white/30 group-hover:scale-105'
                        : 'border border-slate-200/90 bg-white text-slate-400 group-hover:text-slate-900 group-hover:border-slate-400 group-hover:scale-105 shadow-sm'
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
