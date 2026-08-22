import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox, PerspectiveCamera, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { CheckCircle2, ArrowRight, Download, Phone, Sparkles, Layers, ShieldCheck, Cpu } from 'lucide-react';
import { PERSONAL_INFO, CORE_STACK_LOGOS } from '../data/portfolioData';

interface Hero3DProps {
  onOpenResume: () => void;
}

// 3D Canvas Animated Device Screen Texture
function useAnimatedCanvasTexture() {
  const [texture, setTexture] = useState<THREE.CanvasTexture | null>(null);

  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    let t = 0;

    const render = () => {
      t += 0.03;

      // Screen background
      ctx.fillStyle = '#0d0e15';
      ctx.fillRect(0, 0, 1024, 1024);

      // Header bar
      ctx.fillStyle = 'rgba(76, 215, 246, 0.15)';
      ctx.fillRect(40, 40, 944, 80);
      ctx.fillStyle = '#4cd7f6';
      ctx.font = 'bold 32px sans-serif';
      ctx.fillText('SHAILESH RAVAL // CORE AGENT TELEMETRY', 70, 92);

      // Glowing grid lines
      ctx.strokeStyle = 'rgba(180, 197, 255, 0.1)';
      ctx.lineWidth = 2;
      for (let x = 0; x < 1024; x += 64) {
        ctx.beginPath();
        ctx.moveTo(x, 140);
        ctx.lineTo(x, 980);
        ctx.stroke();
      }

      // Sine wave telemetry line
      ctx.strokeStyle = '#4cd7f6';
      ctx.lineWidth = 4;
      ctx.beginPath();
      for (let x = 40; x < 984; x += 10) {
        const y = 500 + Math.sin(x * 0.01 + t) * 120 + Math.cos(x * 0.02 - t) * 40;
        if (x === 40) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Floating telemetry metrics boxes
      ctx.fillStyle = 'rgba(25, 27, 35, 0.85)';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.fillRect(70, 700, 420, 220);
      ctx.strokeRect(70, 700, 420, 220);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 28px sans-serif';
      ctx.fillText('GEMINI 2.5 RAG PIPELINE', 100, 750);
      ctx.fillStyle = '#4cd7f6';
      ctx.font = '22px monospace';
      ctx.fillText(`STATUS: ACTIVE (LATENCY: ${Math.floor(24 + Math.sin(t) * 5)}ms)`, 100, 795);
      ctx.fillText(`TOKENS: ${(14200 + Math.floor(t * 120)).toLocaleString()} / SEC`, 100, 840);

      ctx.fillStyle = 'rgba(25, 27, 35, 0.85)';
      ctx.fillRect(530, 700, 420, 220);
      ctx.strokeRect(530, 700, 420, 220);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 28px sans-serif';
      ctx.fillText('FLUTTER 60 FPS ENGINE', 560, 750);
      ctx.fillStyle = '#b4c5ff';
      ctx.font = '22px monospace';
      ctx.fillText('MEMORY: 48.2 MB [STABLE]', 560, 795);
      ctx.fillText('RENDER TIME: 16.6ms', 560, 840);

      const tex = new THREE.CanvasTexture(canvas);
      tex.needsUpdate = true;
      setTexture(tex);

      animFrame = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return texture;
}

// 3D Scene containing Laptop & Smartphone
function DevicesScene({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const groupRef = useRef<THREE.Group>(null);
  const screenTex = useAnimatedCanvasTexture();

  useFrame(() => {
    if (!groupRef.current) return;
    // Damped mouse rotation
    const targetRotX = mouse.current.y * 0.15;
    const targetRotY = mouse.current.x * 0.2;
    groupRef.current.rotation.x += (targetRotX - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y += (targetRotY - groupRef.current.rotation.y) * 0.05;
  });

  return (
    <group ref={groupRef} position={[0, -0.2, 0]}>
      {/* Laptop Model */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <group position={[-0.4, 0, 0]} rotation={[0.1, 0.35, -0.05]}>
          {/* Laptop Base Keyboard Deck */}
          <RoundedBox args={[3.2, 0.12, 2.2]} radius={0.05} smoothness={4}>
            <meshStandardMaterial color="#1a1c26" metalness={0.8} roughness={0.2} />
          </RoundedBox>

          {/* Trackpad */}
          <mesh position={[0, 0.07, 0.6]}>
            <planeGeometry args={[0.9, 0.6]} />
            <meshStandardMaterial color="#11131b" roughness={0.3} metalness={0.5} />
          </mesh>

          {/* Keyboard Grid */}
          <mesh position={[0, 0.07, -0.2]}>
            <planeGeometry args={[2.6, 1.1]} />
            <meshStandardMaterial color="#0d0e14" roughness={0.8} />
          </mesh>

          {/* Laptop Display Screen Lid */}
          <group position={[0, 0.06, -1.05]} rotation={[-0.35, 0, 0]}>
            <RoundedBox args={[3.2, 2.0, 0.08]} radius={0.04} smoothness={4} position={[0, 1.0, 0]}>
              <meshStandardMaterial color="#12141d" metalness={0.9} roughness={0.15} />
            </RoundedBox>

            {/* Screen Inner Display */}
            <mesh position={[0, 1.0, 0.045]}>
              <planeGeometry args={[3.0, 1.85]} />
              {screenTex ? (
                <meshBasicMaterial map={screenTex} />
              ) : (
                <meshBasicMaterial color="#0d0e15" />
              )}
            </mesh>
          </group>
        </group>
      </Float>

      {/* Futuristic Smartphone Model */}
      <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
        <group position={[1.4, -0.2, 0.8]} rotation={[-0.1, -0.4, 0.15]}>
          {/* Phone Outer Metallic Frame */}
          <RoundedBox args={[1.1, 2.2, 0.1]} radius={0.12} smoothness={8}>
            <meshStandardMaterial color="#222533" metalness={0.95} roughness={0.1} />
          </RoundedBox>

          {/* Phone Display Screen */}
          <mesh position={[0, 0, 0.052]}>
            <planeGeometry args={[1.0, 2.1]} />
            {screenTex ? (
              <meshBasicMaterial map={screenTex} />
            ) : (
              <meshBasicMaterial color="#0b0c12" />
            )}
          </mesh>

          {/* Dynamic Island Notch */}
          <mesh position={[0, 0.92, 0.055]}>
            <planeGeometry args={[0.3, 0.06]} />
            <meshBasicMaterial color="#000000" />
          </mesh>
        </group>
      </Float>

      {/* Ambient Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#b4c5ff" />
      <pointLight position={[-3, 2, 2]} intensity={2.0} color="#4cd7f6" />
      <pointLight position={[3, -2, -2]} intensity={1.5} color="#ffb596" />
    </group>
  );
}

export const Hero3D: React.FC<Hero3DProps> = ({ onOpenResume }) => {
  const [webglSupported, setWebglSupported] = useState(true);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const hasWebGL = !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
      setWebglSupported(hasWebGL);
    } catch (e) {
      setWebglSupported(false);
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.whatsapp}?text=${encodeURIComponent(
    "Hi Shailesh, I reviewed your 3D portfolio and want to discuss hiring you for a project."
  )}`;

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Text & Information */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Role Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191b23]/80 border border-[#4cd7f6]/30 backdrop-blur-md shadow-glowCyan">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4cd7f6] animate-ping" />
              <span className="text-xs font-mono font-semibold tracking-wider text-[#4cd7f6] uppercase">
                {PERSONAL_INFO.title}
              </span>
            </div>

            {/* Eyebrow */}
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#ffb596]" />
              <span>{PERSONAL_INFO.name} — {PERSONAL_INFO.location}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Building Modern <br className="hidden sm:inline" />
              <span className="text-gradient">Apps, Websites & AI</span> Solutions
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
              Architecting high-performance <strong className="text-white">Flutter mobile apps</strong>,{' '}
              <strong className="text-white">Next.js 14 web platforms</strong>, and autonomous{' '}
              <strong className="text-[#4cd7f6]">Google Gemini 2.5 AI agent pipelines</strong> with sub-100ms rendering speed and 60 FPS polish.
            </p>

            {/* Key Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Flutter Cross-Platform (iOS & Android)',
                'Next.js 14 App Router & React 19',
                'Gemini 2.5 RAG & Autonomous AI Agents',
                'Sub-100ms Concurrency API Architecture'
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#4cd7f6] shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#4cd7f6] to-[#b4c5ff] text-[#11131b] font-bold text-sm shadow-glowCyan hover:scale-[1.03] transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Hire Me on WhatsApp</span>
              </a>

              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl glass-card text-white font-semibold text-sm hover:border-[#4cd7f6]/50 transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-[#4cd7f6]" />
              </a>

              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl glass-panel text-slate-300 font-semibold text-sm hover:bg-white/10 transition-all border border-white/15"
              >
                <Download className="w-4 h-4 text-[#ffb596]" />
                <span>Printable Resume</span>
              </button>
            </div>

            {/* Tech Stack Logo Strip */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest mb-3">
                Core Stack Arsenal
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {CORE_STACK_LOGOS.map((stack) => (
                  <span
                    key={stack.name}
                    className="px-3 py-1 rounded-md bg-[#191b23]/90 border border-white/10 text-xs font-mono font-medium text-slate-300 hover:border-[#4cd7f6]/40 transition-colors"
                  >
                    {stack.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Three.js 3D Devices Scene */}
          <div className="lg:col-span-5 h-[460px] sm:h-[520px] w-full relative">
            <div className="w-full h-full glass-panel rounded-3xl border border-white/15 p-2 overflow-hidden relative shadow-2xl">
              
              {/* Top Bar Telemetry Controls */}
              <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#11131b]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#4cd7f6]">
                  <Cpu className="w-3.5 h-3.5 animate-spin" />
                  <span>THREE.JS WEBGL 3D ACTIVE</span>
                </div>
                <div className="text-[10px] font-mono text-slate-400 bg-[#11131b]/80 px-3 py-1 rounded-full border border-white/10">
                  60 FPS LERP PHYSICS
                </div>
              </div>

              {/* Three.js Canvas or CSS Fallback */}
              {webglSupported ? (
                <Canvas gl={{ antialias: true, alpha: true }}>
                  <PerspectiveCamera makeDefault position={[0, 0, 5.2]} fov={45} />
                  <DevicesScene mouse={mouse} />
                </Canvas>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#191b23] to-[#11131b]">
                  <div className="w-32 h-48 rounded-2xl border-2 border-[#4cd7f6] bg-[#11131b] p-3 shadow-glowCyan animate-float mb-4 flex flex-col justify-between">
                    <div className="w-12 h-2 bg-[#4cd7f6] rounded-full mx-auto" />
                    <div className="text-center font-mono text-[10px] text-[#4cd7f6]">
                      FLUTTER & NEXT.JS 14
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/10 mx-auto flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-[#ffb596]" />
                    </div>
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    CSS 3D Mobile Fallback Render Mode
                  </div>
                </div>
              )}

              {/* Bottom Glow Sheen */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#11131b] to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
