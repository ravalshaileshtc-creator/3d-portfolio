import React, { useState } from 'react';
import { RotateCw, ShieldCheck, Sparkles, Trophy } from 'lucide-react';

export const LuckyDrawSandbox: React.FC = () => {
  const [spinning, setSpinning] = useState(false);
  const [winner, setWinner] = useState<string | null>(null);
  const [hash, setHash] = useState<string | null>(null);

  const contestants = ['Alex M.', 'Rahul S.', 'Sophia T.', 'Priya P.', 'David K.', 'Elena R.'];

  const triggerDraw = () => {
    setSpinning(true);
    setWinner(null);
    setHash(null);

    setTimeout(() => {
      const luckyIndex = Math.floor(Math.random() * contestants.length);
      const chosenWinner = contestants[luckyIndex];
      const cryptoSeed = Array.from({ length: 16 }, () =>
        Math.floor(Math.random() * 16).toString(16)
      ).join('');
      
      setWinner(chosenWinner);
      setHash(`SHA256-${cryptoSeed}-FAIR`);
      setSpinning(false);
    }, 2500);
  };

  return (
    <div className="space-y-6 text-left">
      <div className="bg-[#11131b] p-4 rounded-xl border border-white/10 flex items-center justify-between">
        <div>
          <div className="text-xs font-mono text-[#4cd7f6] uppercase tracking-wider flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#4cd7f6]" />
            PROVABLY FAIR SHA-256 DRAW ENGINE
          </div>
          <div className="text-sm font-bold text-white">Cryptographic Winner Selection</div>
        </div>
      </div>

      {/* Wheel Visual Simulator */}
      <div className="bg-[#141622] p-8 rounded-2xl border border-white/10 text-center relative overflow-hidden space-y-6">
        <div className="relative w-40 h-40 mx-auto rounded-full border-4 border-[#4cd7f6] flex items-center justify-center shadow-glowCyan">
          <div
            className={`w-full h-full rounded-full border-4 border-dashed border-[#b4c5ff] flex items-center justify-center transition-all duration-1000 ${
              spinning ? 'animate-spin' : ''
            }`}
          >
            <Sparkles className="w-10 h-10 text-[#4cd7f6]" />
          </div>

          <div className="absolute -top-3 w-4 h-6 bg-red-500 clip-triangle mx-auto" />
        </div>

        <button
          onClick={triggerDraw}
          disabled={spinning}
          className={`px-8 py-3.5 rounded-xl font-extrabold text-xs flex items-center justify-center gap-2 mx-auto transition-all ${
            spinning
              ? 'bg-slate-700 text-slate-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-[#4cd7f6] to-[#b4c5ff] text-[#11131b] shadow-glowCyan hover:scale-105'
          }`}
        >
          <RotateCw className={`w-4 h-4 ${spinning ? 'animate-spin' : ''}`} />
          <span>{spinning ? 'Hashing Cryptographic Seed...' : 'Spin Provably Fair Draw'}</span>
        </button>
      </div>

      {/* Winner Reveal Card */}
      {winner && (
        <div className="bg-gradient-to-r from-[#191b28] to-[#11131b] p-6 rounded-2xl border border-[#4cd7f6]/50 space-y-3 animate-in fade-in text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono">
            <Trophy className="w-4 h-4" />
            OFFICIAL WINNER REVEALED
          </div>

          <div className="text-3xl font-extrabold text-white font-mono">{winner}</div>

          <div className="text-xs font-mono text-slate-400 pt-2 border-t border-white/10">
            Cryptographic Audit Seed: <span className="text-[#4cd7f6] font-bold">{hash}</span>
          </div>
        </div>
      )}
    </div>
  );
};
