import React from 'react';
import { Globe, Smartphone, Cpu, LayoutDashboard, Server, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { ENGINEERING_SERVICES } from '../data/portfolioData';

export const EngineeringServices: React.FC = () => {
  const serviceIcons: Record<string, React.ReactNode> = {
    Globe: <Globe className="w-6 h-6 text-[#4cd7f6]" />,
    Smartphone: <Smartphone className="w-6 h-6 text-[#b4c5ff]" />,
    Cpu: <Cpu className="w-6 h-6 text-[#ffb596]" />,
    LayoutDashboard: <LayoutDashboard className="w-6 h-6 text-[#4cd7f6]" />,
    Server: <Server className="w-6 h-6 text-[#b4c5ff]" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#ffb596]" />
  };

  return (
    <section id="services" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#191b23] border border-white/10 text-xs font-mono text-[#b4c5ff] mb-3">
            <span>FULL STACK & AI ENGINEERING CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            End-to-End Engineering Services
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Modular, high-throughput software development tailored for startups and enterprise platforms.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENGINEERING_SERVICES.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-2xl p-7 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle Corner Glow */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#4cd7f6]/10 rounded-full blur-2xl group-hover:bg-[#4cd7f6]/25 transition-all" />

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#11131b] border border-white/10 flex items-center justify-center shadow-inner">
                    {serviceIcons[service.icon]}
                  </div>
                  <a
                    href="#contact"
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#4cd7f6] group-hover:text-[#11131b] text-slate-400 transition-all"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#4cd7f6] transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              <div>
                <div className="text-[11px] font-mono text-[#4cd7f6] mb-3 font-semibold">
                  ⚡ {service.highlight}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-[#11131b]/80 text-[10px] font-mono text-slate-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
