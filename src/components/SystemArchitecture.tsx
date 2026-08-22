import React, { useState } from 'react';
import { Layers, ArrowRight, Quote, Star, CheckCircle } from 'lucide-react';
import { SYSTEM_BLUEPRINTS, TESTIMONIALS } from '../data/portfolioData';

export const SystemArchitecture: React.FC = () => {
  const [activeBlueprintId, setActiveBlueprintId] = useState<string>('saas');

  const activeBlueprint =
    SYSTEM_BLUEPRINTS.find((b) => b.id === activeBlueprintId) || SYSTEM_BLUEPRINTS[0];

  return (
    <section id="architecture" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Architecture Blueprints Subsection */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#191b23] border border-white/10 text-xs font-mono text-[#4cd7f6] mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>PRODUCTION BLUEPRINTS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              System Architecture Topology
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              High-concurrency data flows engineered for zero single-points-of-failure.
            </p>
          </div>

          {/* Blueprint Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {SYSTEM_BLUEPRINTS.map((bp) => (
              <button
                key={bp.id}
                onClick={() => setActiveBlueprintId(bp.id)}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold font-mono transition-all ${
                  activeBlueprintId === bp.id
                    ? 'bg-gradient-to-r from-[#4cd7f6] to-[#b4c5ff] text-[#11131b] shadow-glowCyan scale-105'
                    : 'glass-panel text-slate-300 hover:text-white'
                }`}
              >
                {bp.title}
              </button>
            ))}
          </div>

          {/* Topology Node Diagram Flow */}
          <div className="glass-panel rounded-3xl border border-white/15 p-8 shadow-2xl space-y-6 text-left">
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">{activeBlueprint.title}</h3>
              <p className="text-xs text-slate-300 font-mono">{activeBlueprint.description}</p>
            </div>

            {/* Interactive SVG Flow Nodes */}
            <div className="flex flex-wrap items-center justify-center gap-3 py-8 bg-[#11131b]/90 rounded-2xl border border-white/10 p-6">
              {activeBlueprint.nodes.map((node, idx) => (
                <React.Fragment key={idx}>
                  <div className="px-4 py-3 rounded-xl bg-[#1a1c26] border border-[#4cd7f6]/40 text-xs font-mono font-bold text-[#4cd7f6] shadow-glowCyan flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>{node}</span>
                  </div>
                  {idx < activeBlueprint.nodes.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-slate-500 animate-pulse hidden sm:block" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Client Testimonials Subsection */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Client & Founder Reviews
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Verified testimonials from global clients and founders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="glass-card rounded-2xl p-6 flex flex-col justify-between space-y-4 text-left">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed italic">
                    "{t.content}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#4cd7f6] to-[#b4c5ff] p-[1px]">
                    <div className="w-full h-full bg-[#11131b] rounded-full flex items-center justify-center font-bold text-xs text-[#4cd7f6]">
                      {t.avatar}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{t.name}</div>
                    <div className="text-[10px] font-mono text-slate-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
