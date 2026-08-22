import React, { useState } from 'react';
import { Calculator, Send, CheckCircle2, Clock, DollarSign, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ScopeOption {
  id: string;
  label: string;
  cost: number;
  days: number;
  category: string;
}

export const ScopeEstimator: React.FC = () => {
  const [selectedScopes, setSelectedScopes] = useState<string[]>([
    'web-app',
    'auth',
    'payments',
    'mobile'
  ]);

  const scopeOptions: ScopeOption[] = [
    { id: 'web-app', label: 'Next.js 14 Web Platform', cost: 1500, days: 10, category: 'Core' },
    { id: 'mobile', label: 'Flutter Mobile App (iOS/Android)', cost: 1800, days: 12, category: 'Mobile' },
    { id: 'auth', label: 'OAuth & RBAC Security', cost: 400, days: 3, category: 'Backend' },
    { id: 'payments', label: 'Stripe & UPI Payments', cost: 500, days: 4, category: 'Backend' },
    { id: 'realtime', label: 'WebSocket & Live Telemetry', cost: 700, days: 5, category: 'Backend' },
    { id: 'ai-rag', label: 'Gemini 2.5 AI & RAG Pipeline', cost: 1200, days: 7, category: 'AI' },
    { id: 'admin', label: 'Admin Telemetry Dashboard', cost: 800, days: 5, category: 'Frontend' }
  ];

  const toggleOption = (id: string) => {
    setSelectedScopes((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const totalCost = scopeOptions
    .filter((opt) => selectedScopes.includes(opt.id))
    .reduce((sum, opt) => sum + opt.cost, 0);

  const totalDays = scopeOptions
    .filter((opt) => selectedScopes.includes(opt.id))
    .reduce((sum, opt) => sum + opt.days, 0);

  const selectedLabels = scopeOptions
    .filter((opt) => selectedScopes.includes(opt.id))
    .map((opt) => opt.label)
    .join(', ');

  const whatsappMessage = `Hi Shailesh, I configured a project scope on your portfolio:
Selected Features: ${selectedLabels}
Estimated Total: $${totalCost.toLocaleString()} USD (~${totalDays} business days delivery).
Let's align on starting this build!`;

  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="estimator" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#191b23] border border-white/10 text-xs font-mono text-[#ffb596] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>INSTANT PROJECT ESTIMATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Interactive Scope & Cost Estimator
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Select your desired feature stack to get an instant cost and timeline estimate, then send it directly to WhatsApp.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="glass-panel rounded-3xl border border-white/15 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Feature Selector Chips */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                SELECT ARCHITECTURE SCOPE MODULES:
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {scopeOptions.map((opt) => {
                  const isSelected = selectedScopes.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      onClick={() => toggleOption(opt.id)}
                      className={`p-4 rounded-2xl border text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#191b28] border-[#4cd7f6] shadow-glowCyan scale-[1.02]'
                          : 'bg-[#11131b]/80 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-2">
                          <CheckCircle2
                            className={`w-4 h-4 ${
                              isSelected ? 'text-[#4cd7f6]' : 'text-slate-600'
                            }`}
                          />
                          <span>{opt.label}</span>
                        </div>
                        <div className="text-[10px] font-mono text-slate-400 mt-1">
                          ~{opt.days} days build time
                        </div>
                      </div>

                      <div className="text-xs font-mono font-bold text-[#4cd7f6]">
                        +${opt.cost}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Total Calculation & 1-Click WhatsApp Bridge */}
            <div className="lg:col-span-5 bg-[#11131b] p-8 rounded-3xl border border-white/15 text-center space-y-6 shadow-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4cd7f6]/10 text-[#4cd7f6] text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                INSTANT ESTIMATE CALCULATED
              </div>

              <div className="space-y-1">
                <div className="text-xs font-mono text-slate-400">ESTIMATED TOTAL BUDGET</div>
                <div className="text-4xl sm:text-5xl font-extrabold font-mono text-gradient-cyan">
                  ${totalCost.toLocaleString()} USD
                </div>
              </div>

              <div className="flex items-center justify-center gap-6 pt-2 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#ffb596]" />
                  <span>Timeline: ~{totalDays} Days</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  <span>Milestone Payments</span>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#4cd7f6] to-[#b4c5ff] text-[#11131b] font-extrabold text-sm flex items-center justify-center gap-2 shadow-glowCyan hover:scale-105 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Send Scope to WhatsApp (+919727239468)</span>
              </a>

              <div className="text-[10px] font-mono text-slate-500">
                Includes full source code ownership, clean documentation & 30-day post-launch support.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
