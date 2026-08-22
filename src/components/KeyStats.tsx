import React from 'react';
import { Layers, Smartphone, Globe, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const KeyStats: React.FC = () => {
  const statIcons = [
    <Layers className="w-6 h-6 text-[#4cd7f6]" />,
    <Smartphone className="w-6 h-6 text-[#b4c5ff]" />,
    <Globe className="w-6 h-6 text-[#ffb596]" />,
    <Award className="w-6 h-6 text-[#4cd7f6]" />
  ];

  return (
    <section className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-6 relative group hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
            >
              {/* Soft Gradient Rim Glow */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-[#4cd7f6]/10 rounded-full blur-xl group-hover:bg-[#4cd7f6]/25 transition-all" />

              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#11131b] border border-white/10 flex items-center justify-center shadow-inner">
                  {statIcons[idx]}
                </div>
                <div className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                  VERIFIED STAT
                </div>
              </div>

              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1 text-gradient font-mono">
                {stat.count}
              </div>

              <div className="text-sm font-semibold text-slate-200 mb-1">
                {stat.label}
              </div>

              <div className="text-xs text-slate-400 font-normal">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
