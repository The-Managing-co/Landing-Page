'use client';

import React, { useState } from 'react';
import { Heart, Star, Search } from 'lucide-react';

interface WorkProject {
  id: string;
  creatorName: string;
  creatorAvatar: string;
  rating: number;
  isProSeller: boolean;
  type: 'branding' | 'mobile' | 'dashboard';
  bgImage: string;
}

const projects: WorkProject[] = [
  {
    id: 'trackx-branding',
    creatorName: 'Ronald Timo',
    creatorAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&h=120&q=80',
    rating: 4.5,
    isProSeller: true,
    type: 'branding',
    bgImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'photobook-app',
    creatorName: 'Agnes Natalie',
    creatorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    rating: 4.8,
    isProSeller: true,
    type: 'mobile',
    bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'saas-dashboard',
    creatorName: 'John Wick',
    creatorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    rating: 4.9,
    isProSeller: true,
    type: 'dashboard',
    bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Work() {
  const [favorites, setFavorites] = useState<{ [key: string]: boolean }>({});
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="relative z-20 w-full max-w-full overflow-hidden bg-white text-slate-900 pt-6 sm:pt-10 pb-24 sm:pb-28 px-4 sm:px-6 font-sans">
      <div className="max-w-[1020px] mx-auto">
        
        {/* Top Header Row matching screenshot */}
        <div className="flex items-center justify-between gap-4 mb-8 sm:mb-10">
          {/* Left Title: Made on [🟠] Prohub */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 flex items-center">
              <span>Made on</span>
              {/* Orange Pill / Badge */}
              <span className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#ff5e28] text-white shadow-sm align-middle mx-1.5 sm:mx-2 -translate-y-0.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.06 2.94a2.5 2.5 0 0 1 3.53 0l3.47 3.47a2.5 2.5 0 0 1 0 3.53L8.5 22.5H3v-5.5L14.06 2.94zm2.12 1.41a1 1 0 0 0-1.41 0L13.5 5.62l3.47 3.47 1.21-1.21a1 1 0 0 0 0-1.41l-2-2.12zM12.09 7.03L4.5 14.62V19.5h4.88l7.59-7.59-4.88-4.88z" />
                </svg>
              </span>
              <span>Prohub</span>
            </h2>
          </div>

          {/* Right: Search Input Pill */}
          <div className="relative">
            <div className="flex items-center justify-between px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-50 border border-slate-200/90 text-xs sm:text-sm text-slate-400 w-36 sm:w-56 shadow-sm focus-within:border-slate-400 focus-within:bg-white transition-all">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent outline-none text-slate-800 placeholder-slate-400 text-xs sm:text-sm"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1.5" />
            </div>
          </div>
        </div>

        {/* 3 Columns Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          
          {/* CARD 1: Ronald Timo - TrackX Business Card Mockup */}
          <div className="group relative rounded-3xl overflow-hidden bg-[#18191d] min-h-[340px] sm:min-h-[380px] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-slate-100">
            {/* Background Texture & Diagonal Cards Visual */}
            <div className="absolute inset-0 bg-[#16171b] overflow-hidden pointer-events-none">
              {/* Mesh background grid lines */}
              <div 
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
                  backgroundSize: '16px 16px',
                }}
              />

              {/* Realistic 3D Business Card Mockups matching screenshot */}
              <div className="absolute inset-0 flex items-center justify-center p-6">
                {/* Underneath Black Card */}
                <div className="absolute w-[210px] h-[130px] rounded-xl bg-[#0f1013] border border-white/10 shadow-2xl p-4 flex flex-col justify-between transform rotate-[8deg] translate-x-4 translate-y-6">
                  <div className="flex justify-end">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-xs tracking-wider">TIM HARVIE</h4>
                    <p className="text-[10px] text-orange-400 font-mono tracking-widest">CEO</p>
                  </div>
                </div>

                {/* Top Diagonal Orange TrackX Card */}
                <div className="relative w-[210px] h-[130px] rounded-xl bg-gradient-to-br from-[#ff5e28] to-[#e64a19] shadow-2xl p-4 flex flex-col justify-between transform -rotate-[14deg] -translate-x-2 -translate-y-2 border border-white/20">
                  <div className="flex items-center gap-1.5">
                    <span className="text-white text-base font-black">❈</span>
                    <span className="text-white font-bold text-sm tracking-tight">TrackX</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-white"></span>
                    </div>
                    <span className="text-[9px] text-white/70 font-mono">2026</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Bar: Heart & Rating (Left) | Pro Seller (Right) */}
            <div className="relative z-10 flex items-center justify-between p-4 sm:p-5 w-full">
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => toggleFavorite('trackx-branding', e)}
                  className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-600 hover:text-red-500 shadow-sm transition-colors cursor-pointer"
                  aria-label="Add to favorites"
                >
                  <Heart
                    className={`w-3.5 h-3.5 transition-colors ${
                      favorites['trackx-branding'] ? 'fill-red-500 text-red-500' : 'text-slate-600'
                    }`}
                  />
                </button>
                <div className="flex items-center gap-1 text-[11px] font-semibold text-white/90 bg-black/35 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                  <span>4.5</span>
                  <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                </div>
              </div>

              <span className="text-[11px] font-medium text-white px-3 py-1 rounded-full bg-black/55 backdrop-blur-md border border-white/15 shadow-sm">
                Pro Seller
              </span>
            </div>

            {/* Bottom Bar: Creator Info */}
            <div className="relative z-10 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-5 flex items-center gap-2.5">
              <img
                src={projects[0].creatorAvatar}
                alt="Ronald Timo"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover ring-2 ring-white/60 shadow-md"
              />
              <span className="text-xs sm:text-sm font-medium text-white drop-shadow">
                Ronald Timo
              </span>
            </div>
          </div>

          {/* CARD 2: Agnes Natalie - Mobile App & Gallery Mockup */}
          <div className="group relative rounded-3xl overflow-hidden bg-[#f1f3f6] min-h-[340px] sm:min-h-[380px] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-slate-100">
            {/* Background Photobook Mobile Screens Mockup */}
            <div className="absolute inset-0 bg-[#eef1f5] overflow-hidden pointer-events-none p-4 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-2.5 w-full max-w-[260px] opacity-95 transform scale-95 sm:scale-100">
                {/* Phone screen 1 */}
                <div className="bg-white rounded-xl shadow-md p-2.5 border border-slate-200/60 flex flex-col gap-2">
                  <div className="h-20 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 p-2 flex flex-col justify-end text-white">
                    <span className="text-[8px] font-bold">Photobook</span>
                  </div>
                  <div className="space-y-1">
                    <div className="h-1.5 w-12 bg-slate-200 rounded"></div>
                    <div className="h-1 w-16 bg-slate-100 rounded"></div>
                  </div>
                </div>

                {/* Phone screen 2 */}
                <div className="bg-white rounded-xl shadow-md p-2.5 border border-slate-200/60 flex flex-col gap-2">
                  <div className="h-16 rounded-lg overflow-hidden bg-sky-100">
                    <img
                      src="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=300&q=80"
                      alt="Mediterranean architecture"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-5 rounded bg-slate-900 text-[8px] text-white flex items-center justify-center font-medium">
                    Organise
                  </div>
                </div>
              </div>
            </div>

            {/* Top Bar: Heart & Rating (Left) | Pro Seller (Right) */}
            <div className="relative z-10 flex items-center justify-between p-4 sm:p-5 w-full">
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => toggleFavorite('photobook-app', e)}
                  className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-600 hover:text-red-500 shadow-sm transition-colors cursor-pointer"
                  aria-label="Add to favorites"
                >
                  <Heart
                    className={`w-3.5 h-3.5 transition-colors ${
                      favorites['photobook-app'] ? 'fill-red-500 text-red-500' : 'text-slate-600'
                    }`}
                  />
                </button>
              </div>

              <span className="text-[11px] font-medium text-white px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 shadow-sm">
                Pro Seller
              </span>
            </div>

            {/* Bottom Bar: Creator Info */}
            <div className="relative z-10 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent p-4 sm:p-5 flex items-center gap-2.5">
              <img
                src={projects[1].creatorAvatar}
                alt="Agnes Natalie"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover ring-2 ring-white/70 shadow-md"
              />
              <span className="text-xs sm:text-sm font-medium text-white drop-shadow">
                Agnes Natalie
              </span>
            </div>
          </div>

          {/* CARD 3: John Wick - SaaS Analytics UI Mockup */}
          <div className="group relative rounded-3xl overflow-hidden bg-[#e9edf3] min-h-[340px] sm:min-h-[380px] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-slate-100">
            {/* Background SaaS Dashboard Mockup */}
            <div className="absolute inset-0 bg-[#eef1f5] overflow-hidden pointer-events-none p-4 flex items-center justify-center">
              <div className="w-full max-w-[270px] bg-white rounded-2xl shadow-xl border border-slate-200/70 p-3.5 flex flex-col gap-2.5 transform scale-95 sm:scale-100">
                {/* Header inside Dashboard */}
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <div className="flex -space-x-1.5">
                      <span className="w-4 h-4 rounded-full bg-slate-300 border border-white"></span>
                      <span className="w-4 h-4 rounded-full bg-slate-400 border border-white"></span>
                    </div>
                    <span className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-slate-900 text-white">
                      + Invite
                    </span>
                  </div>
                  <span className="text-[9px] font-semibold text-orange-600">85.2%</span>
                </div>

                {/* Dashboard Metrics */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-orange-50 rounded-xl p-2 border border-orange-100">
                    <p className="text-[8px] text-slate-500">Sales Target</p>
                    <p className="text-xs font-bold text-slate-900">$21.1K</p>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-2 border border-slate-100 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border-2 border-slate-900 flex items-center justify-center">
                      <span className="text-[8px] font-bold text-slate-800">37%</span>
                    </div>
                  </div>
                </div>

                {/* Performance index bar */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[8px] text-slate-400">Performance Index</span>
                  <div className="flex gap-0.5 items-end h-3">
                    <span className="w-1 h-1.5 bg-orange-400 rounded-sm"></span>
                    <span className="w-1 h-3 bg-orange-500 rounded-sm"></span>
                    <span className="w-1 h-2 bg-orange-400 rounded-sm"></span>
                    <span className="w-1 h-2.5 bg-orange-500 rounded-sm"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Bar: Heart (Left) | Pro Seller (Right) */}
            <div className="relative z-10 flex items-center justify-between p-4 sm:p-5 w-full">
              <button
                onClick={(e) => toggleFavorite('saas-dashboard', e)}
                className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-slate-600 hover:text-red-500 shadow-sm transition-colors cursor-pointer"
                aria-label="Add to favorites"
              >
                <Heart
                  className={`w-3.5 h-3.5 transition-colors ${
                    favorites['saas-dashboard'] ? 'fill-red-500 text-red-500' : 'text-slate-600'
                  }`}
                />
              </button>

              <span className="text-[11px] font-medium text-white px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 shadow-sm">
                Pro Seller
              </span>
            </div>

            {/* Bottom Bar: Creator Info */}
            <div className="relative z-10 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent p-4 sm:p-5 flex items-center gap-2.5">
              <img
                src={projects[2].creatorAvatar}
                alt="John Wick"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover ring-2 ring-white/70 shadow-md"
              />
              <span className="text-xs sm:text-sm font-medium text-white drop-shadow">
                John Wick
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
