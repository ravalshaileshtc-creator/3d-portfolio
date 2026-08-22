import React, { useState } from 'react';
import { Smartphone, Laptop, Tablet, Monitor, Play, Pause, ExternalLink, Sparkles, CheckCircle } from 'lucide-react';

interface DeviceItem {
  id: string;
  type: 'phone' | 'laptop' | 'tablet' | 'ultrawide';
  title: string;
  category: string;
  subtitle: string;
  techTag: string;
  screenContent: {
    title: string;
    metrics: string[];
    logLines: string[];
  };
}

export const DeviceScreenShowcase: React.FC = () => {
  const [activeDeviceId, setActiveDeviceId] = useState<string>('phone');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  const devices: DeviceItem[] = [
    {
      id: 'phone',
      type: 'phone',
      title: 'Smartphone — Flutter Mobile App',
      category: 'Mobile Engineering',
      subtitle: 'Event & QR Ticket Booking Platform',
      techTag: 'Flutter iOS / Android',
      screenContent: {
        title: 'CONCERT PASS // ATOMIC SEAT RESERVATION',
        metrics: ['FPS: 60.0 [FLUID]', 'RESERVATION LOCK: 3m 00s', 'QR STATUS: ENCRYPTED'],
        logLines: [
          '>> Event Gate Scanner Connected...',
          '>> Seat Section B, Row 4, Seat 12 Reserved.',
          '>> QR Barcode Hash: SHA256-a9f830... Verified.'
        ]
      }
    },
    {
      id: 'laptop',
      type: 'laptop',
      title: 'Pro Laptop — Next.js 14 Full Stack',
      category: 'Enterprise AI SaaS',
      subtitle: 'Enterprise AI Studio & Gemini 2.5 Agent Engine',
      techTag: 'Next.js 14 App Router',
      screenContent: {
        title: 'GEMINI 2.5 REASONING AGENT // CONTEXT RAG',
        metrics: ['TOKENS: 4,280 / s', 'VECTOR MATCH: 99.4%', 'LATENCY: 180ms'],
        logLines: [
          '>> Query: "Summarize Q3 Architecture & pgvector locks"',
          '>> Step 1: Searching 45,000 document chunks...',
          '>> Step 2: Gemini 2.5 RAG streaming response generated.'
        ]
      }
    },
    {
      id: 'tablet',
      type: 'tablet',
      title: 'Touch Tablet — Restaurant POS & KDS',
      category: 'POS & Web Systems',
      subtitle: 'Contactless QR Menu & Kitchen Display System',
      techTag: 'React + WebSockets',
      screenContent: {
        title: 'TABLE #14 ORDER // KITCHEN DISPLAY SYSTEM',
        metrics: ['KITCHEN ALERT: ACTIVE', 'WAITER CALL: ACKNOWLEDGED', 'PREP TIME: 4m 12s'],
        logLines: [
          '>> Table #14 scanned menu QR code',
          '>> 2x Signature Paneer Tikka + 1x Cold Brew added',
          '>> Waiter Bell Pressed: Station 2 notified.'
        ]
      }
    },
    {
      id: 'ultrawide',
      type: 'ultrawide',
      title: 'Ultra-Wide Desktop — Fantasy Sports Telemetry',
      category: 'Real-Time Telemetry',
      subtitle: 'Fantasy Sports Match Telemetry Engine',
      techTag: 'Node.js + Redis Pub/Sub',
      screenContent: {
        title: 'LIVE TELEMETRY // 50,000 CONCURRENT MATCHES',
        metrics: ['REDIS SUB: ACTIVE', 'CAPTAIN 2X MULTIPLIER: ON', 'RANK: #1 / 48,200'],
        logLines: [
          '>> Live ball stream: Over 14.4 - SIX RUNS!',
          '>> Captain points recalculated (+24 pts)',
          '>> Global Leaderboard updated in 12ms.'
        ]
      }
    }
  ];

  const activeDevice = devices.find((d) => d.id === activeDeviceId) || devices[0];

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#191b23] border border-white/10 text-xs font-mono text-[#4cd7f6] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CROSS-PLATFORM HARDWARE SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            "My Work in Motion" Multi-Device Showcase
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Real hardware frame rendering across Mobile, Laptop, Tablet POS, and Gaming Desktop viewports.
          </p>
        </div>

        {/* Device Selection Chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {devices.map((d) => {
            const isActive = d.id === activeDeviceId;
            return (
              <button
                key={d.id}
                onClick={() => setActiveDeviceId(d.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-[#4cd7f6] to-[#b4c5ff] text-[#11131b] shadow-glowCyan scale-[1.03]'
                    : 'glass-panel text-slate-300 hover:text-white hover:border-white/20'
                }`}
              >
                {d.type === 'phone' && <Smartphone className="w-4 h-4" />}
                {d.type === 'laptop' && <Laptop className="w-4 h-4" />}
                {d.type === 'tablet' && <Tablet className="w-4 h-4" />}
                {d.type === 'ultrawide' && <Monitor className="w-4 h-4" />}
                <span>{d.subtitle}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Device Hardware Viewport Container */}
        <div className="glass-panel rounded-3xl border border-white/15 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Hardware Information */}
            <div className="lg:col-span-4 space-y-4 text-left">
              <div className="inline-block px-3 py-1 rounded-md bg-[#4cd7f6]/10 text-[#4cd7f6] text-xs font-mono font-bold">
                {activeDevice.techTag}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {activeDevice.subtitle}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {activeDevice.title} — engineered with custom pixel-perfect glassmorphism, responsive frame layouts, and zero overflow.
              </p>

              <div className="space-y-2 pt-2">
                {activeDevice.screenContent.metrics.map((m, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-[#4cd7f6]" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/15 text-xs text-white hover:bg-white/20 transition-all"
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5 text-[#ffb596]" /> : <Play className="w-3.5 h-3.5 text-[#4cd7f6]" />}
                  <span>{isPlaying ? 'Pause Simulation' : 'Play Live Feed'}</span>
                </button>
              </div>
            </div>

            {/* Right Screen Device Display Frame */}
            <div className="lg:col-span-8 flex items-center justify-center">
              <div
                className={`w-full bg-[#090a0f] rounded-2xl border-2 border-white/15 shadow-2xl overflow-hidden relative transition-all duration-500 ${
                  activeDevice.type === 'phone' ? 'max-w-xs h-[480px]' : 'max-w-2xl h-[380px]'
                }`}
              >
                {/* Hardware Top Notch / Camera Bar */}
                <div className="w-full bg-[#141620] px-4 py-2 flex items-center justify-between border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">
                    {activeDevice.title}
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-ping" />
                </div>

                {/* Animated Telemetry Screen Content */}
                <div className="p-6 font-mono text-left space-y-4 h-[calc(100%-40px)] overflow-y-auto">
                  <div className="text-sm font-bold text-[#4cd7f6] pb-2 border-b border-white/10">
                    {activeDevice.screenContent.title}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {activeDevice.screenContent.metrics.map((m, idx) => (
                      <div key={idx} className="bg-[#11131b] p-2.5 rounded-lg border border-white/10 text-[11px] text-slate-200">
                        {m}
                      </div>
                    ))}
                  </div>

                  {/* Terminal Log Streams */}
                  <div className="bg-[#050608] p-4 rounded-xl border border-white/10 text-xs space-y-2 text-slate-300">
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest">
                      REALTIME CONSOLE OUTPUT:
                    </div>
                    {activeDevice.screenContent.logLines.map((line, idx) => (
                      <div key={idx} className="text-[#b4c5ff] flex items-center gap-2">
                        <span className="text-[#4cd7f6]">›</span>
                        <span>{line}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 bg-[#191b23] rounded-lg border border-[#4cd7f6]/20 flex items-center justify-between text-xs">
                    <span className="text-slate-300">Architecture Status</span>
                    <span className="text-[#4cd7f6] font-bold">100% OPERATIONAL</span>
                  </div>
                </div>

                {/* Specular Glass Sheen */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
