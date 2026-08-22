import React, { useState } from 'react';
import { Users, DollarSign, Calculator, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const WeddingBudgetSandbox: React.FC = () => {
  const [guestCount, setGuestCount] = useState<number>(250);

  // Estimations per guest
  const venueCost = guestCount * 45;
  const cateringCost = guestCount * 60;
  const decorCost = guestCount * 25;
  const photographyCost = 2500;
  const totalBudget = venueCost + cateringCost + decorCost + photographyCost;

  const whatsappMessage = `Hi Shailesh, I calculated a wedding event scope for ${guestCount} guests ($${totalBudget.toLocaleString()} total estimated budget). Let's connect!`;
  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="space-y-6 text-left">
      <div className="bg-[#11131b] p-4 rounded-xl border border-white/10 flex items-center justify-between">
        <div>
          <div className="text-xs font-mono text-[#ffb596] uppercase tracking-wider">
            EVENT MARKETPLACE & BUDGET CALCULATOR
          </div>
          <div className="text-sm font-bold text-white">Dynamic Event Allocation Engine</div>
        </div>
        <Calculator className="w-5 h-5 text-[#ffb596]" />
      </div>

      {/* Guest Count Slider */}
      <div className="bg-[#141622] p-6 rounded-2xl border border-white/10 space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-xs font-mono text-slate-300 flex items-center gap-2">
            <Users className="w-4 h-4 text-[#4cd7f6]" />
            <span>ATTENDEE GUEST COUNT SLIDER:</span>
          </label>
          <span className="text-xl font-bold font-mono text-[#4cd7f6]">{guestCount} Guests</span>
        </div>

        <input
          type="range"
          min="50"
          max="1000"
          step="25"
          value={guestCount}
          onChange={(e) => setGuestCount(Number(e.target.value))}
          className="w-full h-2 bg-[#11131b] rounded-lg appearance-none cursor-pointer accent-[#4cd7f6]"
        />
      </div>

      {/* Cost Allocation Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-[#11131b] p-4 rounded-xl border border-white/10 text-center">
          <div className="text-[10px] font-mono text-slate-400">VENUE & RESORT</div>
          <div className="text-base font-bold text-white font-mono mt-1">${venueCost.toLocaleString()}</div>
        </div>
        <div className="bg-[#11131b] p-4 rounded-xl border border-white/10 text-center">
          <div className="text-[10px] font-mono text-slate-400">LUXURY CATERING</div>
          <div className="text-base font-bold text-white font-mono mt-1">${cateringCost.toLocaleString()}</div>
        </div>
        <div className="bg-[#11131b] p-4 rounded-xl border border-white/10 text-center">
          <div className="text-[10px] font-mono text-slate-400">LIGHTING & DECOR</div>
          <div className="text-base font-bold text-white font-mono mt-1">${decorCost.toLocaleString()}</div>
        </div>
        <div className="bg-[#11131b] p-4 rounded-xl border border-white/10 text-center">
          <div className="text-[10px] font-mono text-slate-400">PHOTOGRAPHY & REELS</div>
          <div className="text-base font-bold text-white font-mono mt-1">${photographyCost.toLocaleString()}</div>
        </div>
      </div>

      {/* Total & WhatsApp Bridge */}
      <div className="bg-gradient-to-r from-[#191b28] to-[#11131b] p-6 rounded-2xl border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-xs text-slate-400 font-mono">ESTIMATED TOTAL BUDGET</div>
          <div className="text-3xl font-extrabold font-mono text-gradient-accent">
            ${totalBudget.toLocaleString()}
          </div>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#ffb596] to-[#4cd7f6] text-[#11131b] font-bold text-xs flex items-center gap-2 hover:scale-105 transition-all shadow-glowCyan"
        >
          <Send className="w-4 h-4" />
          <span>Send Estimate to WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
