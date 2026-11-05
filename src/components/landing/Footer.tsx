import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 bg-[#070709] pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Center Color Circle Palette */}
        <div className="flex items-center gap-1.5 mb-12">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
        </div>

        {/* Footer Navigation Columns */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-xs font-mono text-neutral-400 uppercase tracking-widest pb-12 border-b border-neutral-900">
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2.5 text-neutral-400 lowercase">
              <li><a href="#services" className="hover:text-white">software-dev</a></li>
              <li><a href="#services" className="hover:text-white">cloud-devops</a></li>
              <li><a href="#services" className="hover:text-white">ai-automation</a></li>
              <li><a href="#services" className="hover:text-white">ui-ux-design</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Products</h4>
            <ul className="space-y-2.5 text-neutral-400 lowercase">
              <li><a href="#products" className="hover:text-white">manage-os</a></li>
              <li><a href="#products" className="hover:text-white">sync-flow</a></li>
              <li><a href="#products" className="hover:text-white">venture-spark</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2.5 text-neutral-400 lowercase">
              <li><a href="#stats" className="hover:text-white">about-us</a></li>
              <li><a href="#projects" className="hover:text-white">case-studies</a></li>
              <li><a href="mailto:contact@themanaging.co" className="hover:text-white">careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Inquiries</h4>
            <ul className="space-y-2.5 text-neutral-400 lowercase">
              <li><a href="mailto:contact@themanaging.co" className="hover:text-white">contact@themanaging.co</a></li>
              <li><span>global-remote</span></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-400 uppercase tracking-widest">
          <span>&copy; {new Date().getFullYear()} The Managing Co. All rights reserved.</span>
          <span className="mt-2 sm:mt-0">IT Services & Proprietary Ventures</span>
        </div>
      </div>
    </footer>
  );
}