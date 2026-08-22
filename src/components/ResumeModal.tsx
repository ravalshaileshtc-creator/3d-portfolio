import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, CheckCircle2, Award } from 'lucide-react';
import { PERSONAL_INFO, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in">
      <div className="glass-panel w-full max-w-4xl max-h-[90vh] rounded-3xl border border-white/20 p-6 sm:p-10 overflow-y-auto relative shadow-2xl space-y-8 text-left bg-[#11131b]">
        
        {/* Modal Top Actions */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4cd7f6] animate-pulse" />
            <span className="text-xs font-mono font-bold text-[#4cd7f6] uppercase tracking-wider">
              SHAILESH RAVAL — OFFICIAL RESUME CV
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#4cd7f6] to-[#b4c5ff] text-[#11131b] font-bold text-xs shadow-glowCyan hover:scale-105 transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Paper Viewport */}
        <div className="space-y-8 print:text-black">
          
          {/* Header */}
          <div className="border-b border-white/15 pb-6 space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              {PERSONAL_INFO.name}
            </h1>
            <div className="text-sm font-mono text-[#4cd7f6] font-semibold">
              {PERSONAL_INFO.title} | {PERSONAL_INFO.roleSub}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#4cd7f6]" /> {PERSONAL_INFO.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#b4c5ff]" /> {PERSONAL_INFO.email}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#ffb596]" /> {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#4cd7f6] font-bold">
              EXECUTIVE SUMMARY & PHILOSOPHY
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Core Skills Grid */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#4cd7f6] font-bold">
              CORE TECHNICAL ARSENAL
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title} className="p-4 rounded-xl bg-[#141622] border border-white/10 space-y-2">
                  <div className="text-xs font-bold text-white">{cat.title}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <span key={s.name} className="px-2 py-0.5 rounded bg-[#11131b] text-[10px] font-mono text-[#b4c5ff]">
                        {s.name} ({s.level}%)
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Achievements */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#4cd7f6] font-bold">
              PRODUCTION MILESTONES & STATS
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {PERSONAL_INFO.stats.map((s) => (
                <div key={s.label} className="p-4 rounded-xl bg-[#141622] border border-white/10 text-center">
                  <div className="text-2xl font-extrabold text-[#4cd7f6] font-mono">{s.count}</div>
                  <div className="text-[11px] font-bold text-white mt-1">{s.label}</div>
                  <div className="text-[10px] text-slate-400">{s.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Language Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-white/15">
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#4cd7f6] font-bold">
                EDUCATION & DEGREES
              </h3>
              <div className="text-xs text-slate-300">
                <div className="font-bold text-white">Bachelor of Technology / Science (CS & IT)</div>
                <div className="text-slate-400 font-mono">Gujarat Technical University, India</div>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#4cd7f6] font-bold">
                LANGUAGES
              </h3>
              <div className="flex gap-2">
                {PERSONAL_INFO.languages.map((l) => (
                  <span key={l.name} className="px-3 py-1 rounded bg-[#141622] text-xs font-mono text-white border border-white/10">
                    {l.name} ({l.fluency})
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
