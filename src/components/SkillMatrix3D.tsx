import React, { useState } from 'react';
import { Code2, Smartphone, Server, Brain, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillMatrix3D: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const categoryIcons: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-6 h-6 text-[#4cd7f6]" />,
    Smartphone: <Smartphone className="w-6 h-6 text-[#b4c5ff]" />,
    Server: <Server className="w-6 h-6 text-[#ffb596]" />,
    Brain: <Brain className="w-6 h-6 text-[#4cd7f6]" />
  };

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#191b23] border border-white/10 text-xs font-mono text-[#4cd7f6] mb-3">
            <span>VERIFIED PROFICIENCY TELEMETRY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Interactive 3D Skill Matrix
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Hover over categories to inspect proficiency metrics, verified badges, and technology stack mastery.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={cat.title}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`glass-card rounded-3xl p-8 border border-white/15 relative overflow-hidden transition-all duration-500 transform ${
                  isHovered ? 'scale-[1.02] shadow-2xl border-[#4cd7f6]/40 -translate-y-1' : ''
                }`}
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#11131b] border border-white/10 flex items-center justify-center shadow-inner">
                    {categoryIcons[cat.icon]}
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white">
                      {cat.title}
                    </h3>
                    <div className="text-xs font-mono text-slate-400">
                      {cat.skills.length} Core Technologies Mastered
                    </div>
                  </div>
                </div>

                {/* Skill List with Meters */}
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200 flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#4cd7f6]" />
                          <span>{skill.name}</span>
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-slate-300">
                            {skill.badge}
                          </span>
                          <span className="font-mono text-[#4cd7f6] font-bold">
                            {skill.level}%
                          </span>
                        </div>
                      </div>

                      {/* Meter Bar */}
                      <div className="w-full h-2 rounded-full bg-[#11131b] overflow-hidden p-0.5 border border-white/5">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#4cd7f6] to-[#b4c5ff] transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
