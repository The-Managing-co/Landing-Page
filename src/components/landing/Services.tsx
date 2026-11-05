import React from 'react';

const services = [
  {
    title: 'Custom Software Development',
    category: 'Engineering',
    desc: 'Architecting web applications, mobile platforms, and distributed systems built for high throughput and security.',
    tags: ['React / Next.js', 'Node.js', 'Go', 'Microservices'],
    color: 'from-blue-500/20 to-transparent',
    accent: 'bg-blue-500',
  },
  {
    title: 'Cloud Infrastructure & DevOps',
    category: 'Cloud Systems',
    desc: 'Automated CI/CD pipelines, container orchestration, zero-downtime migrations, and cloud cost optimization.',
    tags: ['AWS', 'GCP', 'Kubernetes', 'Terraform'],
    color: 'from-cyan-500/20 to-transparent',
    accent: 'bg-cyan-400',
  },
  {
    title: 'AI & Workflow Automation',
    category: 'Artificial Intelligence',
    desc: 'Deploying custom LLM integrations, intelligent agent workflows, and predictive analytics pipelines for operations.',
    tags: ['OpenAI / Anthropic', 'LangChain', 'Python', 'Vector DBs'],
    color: 'from-emerald-500/20 to-transparent',
    accent: 'bg-emerald-400',
  },
  {
    title: 'UI/UX & Product Design',
    category: 'Design Systems',
    desc: 'Transforming complex data and enterprise logic into intuitive, high-conversion visual interfaces.',
    tags: ['Figma', 'Design Systems', 'Interactive Prototypes'],
    color: 'from-amber-500/20 to-transparent',
    accent: 'bg-amber-400',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs uppercase font-mono tracking-widest text-blue-400">
          What We Do
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-2 tracking-tight">
          Comprehensive IT Services
        </h2>
        <p className="mt-4 text-sm sm:text-base text-neutral-400">
          From concept to global deployment, we partner with enterprises and startups to engineer robust digital infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((svc, idx) => (
          <div
            key={idx}
            className="group relative rounded-2xl bg-[#111114] border border-neutral-800/80 p-8 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${svc.color} opacity-30 rounded-bl-full pointer-events-none transition-opacity group-hover:opacity-60`} />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400">
                  {svc.category}
                </span>
                <span className={`w-2 h-2 rounded-full ${svc.accent}`} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                {svc.title}
              </h3>
              <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                {svc.desc}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800/60 flex flex-wrap gap-2">
              {svc.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}