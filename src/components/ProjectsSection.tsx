import React, { useState } from 'react';
import { ExternalLink, Layers, X, Sparkles, Code2, ArrowUpRight, PlayCircle } from 'lucide-react';
import { FEATURED_PROJECTS, ProjectItem } from '../data/portfolioData';

// Import 6 Sandboxes
import { EventPlannerSandbox } from './sandboxes/EventPlannerSandbox';
import { RestaurantMenuSandbox } from './sandboxes/RestaurantMenuSandbox';
import { FantasySportsSandbox } from './sandboxes/FantasySportsSandbox';
import { WeddingBudgetSandbox } from './sandboxes/WeddingBudgetSandbox';
import { LuckyDrawSandbox } from './sandboxes/LuckyDrawSandbox';
import { AiLearningSandbox } from './sandboxes/AiLearningSandbox';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Mobile', 'Full Stack', 'POS & Web', 'Real-time', 'Crypto & Security', 'AI Systems'];

  const filteredProjects =
    selectedCategory === 'All'
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((p) => p.category === selectedCategory);

  const renderSandboxComponent = (projectId: string) => {
    switch (projectId) {
      case 'event-planner':
        return <EventPlannerSandbox />;
      case 'restaurant-qr':
        return <RestaurantMenuSandbox />;
      case 'fantasy-sports':
        return <FantasySportsSandbox />;
      case 'wedding-vendor':
        return <WeddingBudgetSandbox />;
      case 'lucky-draw':
        return <LuckyDrawSandbox />;
      case 'ai-learning':
        return <AiLearningSandbox />;
      default:
        return <EventPlannerSandbox />;
    }
  };

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#191b23] border border-white/10 text-xs font-mono text-[#4cd7f6] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FEATURED PRODUCTION WORK & SANDBOXES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured Projects & Live Interactive Sandboxes
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Click on any project to launch a live interactive sandbox simulation directly in your browser.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-[#4cd7f6] to-[#b4c5ff] text-[#11131b] shadow-glowCyan scale-105'
                  : 'glass-panel text-slate-300 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="glass-card rounded-3xl p-7 flex flex-col justify-between group cursor-pointer hover:-translate-y-2 transition-all duration-300 relative overflow-hidden border border-white/10"
            >
              {/* Top Tag & Action */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#4cd7f6]/10 border border-[#4cd7f6]/30 text-[11px] font-mono text-[#4cd7f6] font-semibold">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#4cd7f6] font-mono group-hover:translate-x-1 transition-transform">
                    <span>Launch Sandbox</span>
                    <PlayCircle className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#4cd7f6] transition-colors">
                  {project.title}
                </h3>

                <div className="text-xs font-mono text-[#ffb596] mb-3">
                  ⚡ {project.stats}
                </div>

                <p className="text-slate-300 text-xs leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Tags Footer */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-[#11131b] border border-white/5 text-[10px] font-mono text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Interactive Modal Sandbox Dialog */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in">
          <div className="glass-panel w-full max-w-3xl max-h-[90vh] rounded-3xl border border-white/20 p-6 sm:p-8 overflow-y-auto relative shadow-2xl space-y-6 text-left">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#4cd7f6]/10 text-[#4cd7f6] text-xs font-mono font-bold">
                  {activeModalProject.category} INTERACTIVE SANDBOX
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-2">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  {activeModalProject.tagline}
                </p>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-full bg-white/10 text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Sandbox Simulation Content */}
            <div className="py-2">
              {renderSandboxComponent(activeModalProject.id)}
            </div>

            {/* Architecture Footer */}
            <div className="p-4 rounded-xl bg-[#11131b] border border-white/10 text-xs font-mono space-y-1">
              <span className="text-slate-500 uppercase tracking-widest text-[10px]">
                PRODUCTION SYSTEM ARCHITECTURE FLOW:
              </span>
              <div className="text-slate-300">{activeModalProject.architecture}</div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
