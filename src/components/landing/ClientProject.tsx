import React from 'react';

const stories = [
  {
    title: 'Modernizing Fintech Core for high concurrency',
    tag: 'Cloud & Architecture',
    bgColor: 'bg-amber-400',
    textColor: 'text-neutral-950',
    desc: 'How we restructured a legacy banking backend into microservices, cutting response latencies by 62%.',
  },
  {
    title: 'Enterprise AI Copilot for logistics operations',
    tag: 'AI Automation',
    bgColor: 'bg-emerald-500',
    textColor: 'text-white',
    desc: 'Building autonomous dispatch workflows using bespoke LLM pipelines and real-time fleet GPS integration.',
  },
  {
    title: 'Scaling an in-house venture to 50k users',
    tag: 'Venture Studio',
    bgColor: 'bg-rose-400',
    textColor: 'text-white',
    desc: 'The complete development, design, and growth playbook behind our proprietary SaaS release.',
  },
];

export default function ClientProject() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        {/* Flower Dot Icon */}
        <div className="flex justify-center items-center gap-1 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Case studies & insights
        </h2>
        <p className="mt-3 text-sm text-neutral-400">
          Real stories of architectural challenges solved and ventures launched.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stories.map((item, idx) => (
          <div
            key={idx}
            className="group flex flex-col rounded-2xl bg-[#111114] border border-neutral-800/80 overflow-hidden hover:border-neutral-700 transition-all"
          >
            {/* Top Graphic Card */}
            <div className={`h-48 ${item.bgColor} p-6 flex flex-col justify-between ${item.textColor}`}>
              <span className="text-[11px] font-mono uppercase tracking-widest opacity-80">
                {item.tag}
              </span>
              <div className="text-xl font-black leading-snug">
                {item.title}
              </div>
            </div>

            {/* Bottom Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <p className="text-sm text-neutral-400 leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-6 flex items-center text-xs font-semibold text-blue-400 group-hover:text-blue-300">
                Read Case Study →
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}