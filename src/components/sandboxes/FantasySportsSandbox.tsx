import React, { useState } from 'react';
import { Zap, Trophy, Shield, RefreshCw } from 'lucide-react';

interface Player {
  id: string;
  name: string;
  role: string;
  basePoints: number;
  isCaptain: boolean;
}

export const FantasySportsSandbox: React.FC = () => {
  const [players, setPlayers] = useState<Player[]>([
    { id: '1', name: 'Virat K.', role: 'BAT', basePoints: 48, isCaptain: true },
    { id: '2', name: 'Jasprit B.', role: 'BOWL', basePoints: 36, isCaptain: false },
    { id: '3', name: 'Hardik P.', role: 'ALL', basePoints: 28, isCaptain: false },
    { id: '4', name: 'Rashid K.', role: 'BOWL', basePoints: 40, isCaptain: false },
  ]);

  const [liveBall, setLiveBall] = useState('Over 18.4: SIX RUNS! (+12 pts)');

  const toggleCaptain = (id: string) => {
    setPlayers((prev) =>
      prev.map((p) => ({
        ...p,
        isCaptain: p.id === id,
      }))
    );
  };

  const simulateLiveBall = () => {
    const events = [
      'Over 18.5: WICKET! Jasprit B. (+25 pts)',
      'Over 19.1: FOUR RUNS! Virat K. (+8 pts)',
      'Over 19.3: 2 RUNS + MAIDEN OVER BONUS (+10 pts)',
      'Over 19.6: BOUNDARY SIX! (+12 pts)',
    ];
    const randomEvent = events[Math.floor(Math.random() * events.length)];
    setLiveBall(randomEvent);

    // Boost points
    setPlayers((prev) =>
      prev.map((p) => (p.isCaptain ? { ...p, basePoints: p.basePoints + 4 } : p))
    );
  };

  const totalPoints = players.reduce(
    (sum, p) => sum + (p.isCaptain ? p.basePoints * 2 : p.basePoints),
    0
  );

  return (
    <div className="space-y-6 text-left">
      {/* Live Ball Telemetry Banner */}
      <div className="bg-[#11131b] p-4 rounded-xl border border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-mono text-[#4cd7f6] uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            LIVE MATCH FEED TELEMETRY
          </div>
          <div className="text-sm font-bold text-white font-mono">{liveBall}</div>
        </div>

        <button
          onClick={simulateLiveBall}
          className="px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-xs font-mono text-[#4cd7f6] hover:bg-white/20 flex items-center gap-2 transition-all"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Simulate Next Ball</span>
        </button>
      </div>

      {/* Players List with Captain 2x Toggle */}
      <div className="bg-[#141622] p-5 rounded-2xl border border-white/10 space-y-4">
        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span>SQUAD SELECTION (SELECT 2X CAPTAIN)</span>
          <Trophy className="w-4 h-4 text-[#ffb596]" />
        </div>

        <div className="space-y-2">
          {players.map((p) => (
            <div
              key={p.id}
              className={`p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                p.isCaptain
                  ? 'bg-[#191b28] border-[#4cd7f6] shadow-glowCyan'
                  : 'bg-[#11131b] border-white/10'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="px-2 py-1 rounded bg-white/10 text-[10px] font-mono text-slate-300 font-bold">
                  {p.role}
                </span>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    {p.name}
                    {p.isCaptain && (
                      <span className="px-2 py-0.5 rounded bg-[#4cd7f6] text-[#11131b] text-[10px] font-mono font-bold">
                        2X CAPTAIN
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    Base Points: {p.basePoints} pts
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right font-mono">
                  <div className="text-xs text-slate-400">Calculated</div>
                  <div className="text-sm font-bold text-[#4cd7f6]">
                    {p.isCaptain ? p.basePoints * 2 : p.basePoints} pts
                  </div>
                </div>

                <button
                  onClick={() => toggleCaptain(p.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                    p.isCaptain
                      ? 'bg-[#4cd7f6] text-[#11131b]'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20'
                  }`}
                >
                  {p.isCaptain ? 'Active 2x' : 'Make Captain'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard Total Card */}
      <div className="bg-[#11131b] p-5 rounded-2xl border border-white/10 flex items-center justify-between">
        <div>
          <div className="text-xs text-slate-400 font-mono">CONTEST TELEMETRY SUMMARY</div>
          <div className="text-xs text-emerald-400 font-mono">Rank: #1 out of 50,000 Teams</div>
        </div>

        <div className="text-right font-mono">
          <div className="text-xs text-slate-400">TOTAL SQUAD POINTS</div>
          <div className="text-2xl font-extrabold text-[#4cd7f6]">{totalPoints} PTS</div>
        </div>
      </div>
    </div>
  );
};
