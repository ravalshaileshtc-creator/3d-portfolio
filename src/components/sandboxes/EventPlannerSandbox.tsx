import React, { useState } from 'react';
import { Check, Lock, QrCode, Ticket, RefreshCw } from 'lucide-react';

export const EventPlannerSandbox: React.FC = () => {
  const [selectedSeat, setSelectedSeat] = useState<string | null>('B-04');
  const [isReserved, setIsReserved] = useState(false);
  const [lockTimer, setLockTimer] = useState(180);

  const rows = ['A', 'B', 'C', 'D'];
  const cols = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleSeatClick = (seatId: string) => {
    setSelectedSeat(seatId);
    setIsReserved(false);
  };

  const handleConfirmReservation = () => {
    if (!selectedSeat) return;
    setIsReserved(true);
  };

  return (
    <div className="space-y-6 text-left">
      <div className="bg-[#11131b] p-4 rounded-xl border border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-xs font-mono text-[#4cd7f6] uppercase tracking-wider">
            LIVE VENUE CONCURRENCY LOCK ENGINE
          </div>
          <div className="text-sm font-bold text-white">
            Grand Concert Hall — Section B Seats
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400" /> Available
          </span>
          <span className="flex items-center gap-1.5 text-[#4cd7f6]">
            <span className="w-2 h-2 rounded-full bg-[#4cd7f6]" /> Selected
          </span>
          <span className="flex items-center gap-1.5 text-slate-500">
            <span className="w-2 h-2 rounded-full bg-slate-600" /> Locked
          </span>
        </div>
      </div>

      {/* Seat Selector Grid */}
      <div className="bg-[#141622] p-6 rounded-2xl border border-white/10 text-center space-y-4">
        <div className="w-full py-2 bg-gradient-to-r from-transparent via-[#4cd7f6]/20 to-transparent rounded-lg border-b border-[#4cd7f6]/40 text-xs font-mono text-[#4cd7f6]">
          STAGE / PERFORMANCE VIEWPORT
        </div>

        <div className="grid grid-cols-8 gap-2 max-w-md mx-auto pt-2">
          {rows.map((row) =>
            cols.map((col) => {
              const seatId = `${row}-${col < 10 ? '0' + col : col}`;
              const isLocked = seatId === 'A-02' || seatId === 'C-05' || seatId === 'D-08';
              const isSelected = selectedSeat === seatId;

              return (
                <button
                  key={seatId}
                  disabled={isLocked}
                  onClick={() => handleSeatClick(seatId)}
                  className={`h-9 rounded-lg text-xs font-mono font-bold transition-all flex items-center justify-center ${
                    isLocked
                      ? 'bg-slate-800 text-slate-600 border border-slate-700 cursor-not-allowed'
                      : isSelected
                      ? 'bg-[#4cd7f6] text-[#11131b] shadow-glowCyan scale-105 border border-white'
                      : 'bg-[#1e2232] text-slate-300 border border-white/10 hover:border-[#4cd7f6]'
                  }`}
                >
                  {seatId}
                </button>
              );
            })
          )}
        </div>
      </div>

      {/* Selected Ticket Action Box */}
      <div className="bg-[#11131b] p-5 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="text-xs text-slate-400 font-mono">SELECTED SEAT POSITION</div>
          <div className="text-xl font-bold text-white font-mono flex items-center gap-2">
            <Ticket className="w-5 h-5 text-[#4cd7f6]" />
            <span>{selectedSeat || 'None Selected'}</span>
            <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-normal">
              VIP Tier ($120.00)
            </span>
          </div>
        </div>

        <button
          onClick={handleConfirmReservation}
          disabled={!selectedSeat || isReserved}
          className={`px-6 py-3 rounded-xl font-bold text-xs flex items-center gap-2 transition-all ${
            isReserved
              ? 'bg-emerald-500 text-slate-950 shadow-glowCyan'
              : 'bg-gradient-to-r from-[#4cd7f6] to-[#b4c5ff] text-[#11131b] hover:scale-105'
          }`}
        >
          {isReserved ? (
            <>
              <Check className="w-4 h-4" />
              <span>Reserved & Ticket Issued!</span>
            </>
          ) : (
            <>
              <Lock className="w-4 h-4" />
              <span>Lock Seat (Redis 3m TTL)</span>
            </>
          )}
        </button>
      </div>

      {/* Generated Ticket Barcode Bar */}
      {isReserved && (
        <div className="bg-gradient-to-r from-[#191b23] to-[#11131b] p-6 rounded-2xl border border-emerald-500/40 space-y-4 animate-in fade-in">
          <div className="flex items-center justify-between text-xs font-mono border-b border-white/10 pb-3">
            <span className="text-emerald-400 font-bold flex items-center gap-2">
              <QrCode className="w-4 h-4" />
              ENCRYPTED PASS GENERATED
            </span>
            <span className="text-slate-400">HASH: SHA256-a94f1...</span>
          </div>

          <div className="flex items-center justify-around bg-white p-4 rounded-xl">
            <div className="font-mono text-black text-center text-xs tracking-widest font-bold">
              ║▌║█║▌│║▌║▌█│║▌║▌
              <div className="text-[10px] text-slate-600 mt-1">PASS ID: {selectedSeat}-884920</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
