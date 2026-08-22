import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, RoundedBox, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { CheckCircle2, ArrowRight, Download, Phone, Sparkles, Cpu, Layers, ShieldCheck } from 'lucide-react';
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

// 3D Devices Scene
function DevicesScene({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
  const groupRef = useRef<THREE.Group>(null);
  const laptopRef = useRef<THREE.Group>(null);
  const phoneRef = useRef<THREE.Group>(null);
  const screenTexture = useAnimatedCanvasTexture();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouse.current.x * 0.25,
        delta * 3
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mouse.current.y * 0.15,
        delta * 3
      );
    }
  });

  return (
    <group ref={groupRef}>
      {/* 3D Laptop Device */}
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <group ref={laptopRef} position={[-0.4, -0.2, 0]} rotation={[0.1, 0.2, -0.05]}>
          <RoundedBox args={[2.8, 0.08, 1.8]} radius={0.03} smoothness={4}>
            <meshStandardMaterial color="#1a1c23" metalness={0.8} roughness={0.2} />
          </RoundedBox>
          <group position={[0, 0.9, -0.9]} rotation={[-0.15, 0, 0]}>
            <RoundedBox args={[2.7, 1.7, 0.04]} radius={0.02} smoothness={4}>
              <meshStandardMaterial color="#0f1117" metalness={0.9} roughness={0.1} />
            </RoundedBox>
            <mesh position={[0, 0, 0.025]}>
              <planeGeometry args={[2.55, 1.55]} />
              {screenTexture ? (
                <meshBasicMaterial map={screenTexture} />
              ) : (
                <meshStandardMaterial color="#191b23" emissive="#4cd7f6" emissiveIntensity={0.2} />
              )}
            </mesh>
          </group>
        </group>
      </Float>

      {/* 3D Smartphone Device */}
      <Float speed={2.5} rotationIntensity={0.3} floatIntensity={0.6}>
        <group ref={phoneRef} position={[1.3, 0.2, 0.8]} rotation={[-0.1, -0.3, 0.1]}>
          <RoundedBox args={[0.7, 1.4, 0.06]} radius={0.05} smoothness={4}>
            <meshStandardMaterial color="#2d303e" metalness={0.85} roughness={0.15} />
          </RoundedBox>
          <mesh position={[0, 0, 0.032]}>
            <planeGeometry args={[0.64, 1.32]} />
            {screenTexture ? (
              <meshBasicMaterial map={screenTexture} />
            ) : (
              <meshStandardMaterial color="#0d0e15" emissive="#b4c5ff" emissiveIntensity={0.3} />
            )}
          </mesh>
        </group>
      </Float>

      {/* Ambient & Point Lighting */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#b4c5ff" />
      <pointLight position={[-3, 2, 2]} intensity={2.0} color="#4cd7f6" />
      <pointLight position={[3, -2, -2]} intensity={1.5} color="#ffb596" />
    </group>
  );
}

export const Hero3D: React.FC<Hero3DProps> = ({ onOpenResume }) => {
  const [webglSupported, setWebglSupported] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);

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
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      mouse.current.x = nx;
      mouse.current.y = ny;

      // Parallax mouse translation offset (5-10px smooth depth)
      setMouseOffset({
        x: nx * 8,
        y: ny * 8
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const whatsappUrl = `https://wa.me/${PERSONAL_INFO.whatsapp}?text=${encodeURIComponent(
    "Hi Shailesh, I reviewed your 3D portfolio and want to discuss hiring you for a project."
  )}`;

  const heroBgUrl = `${import.meta.env.BASE_URL}images/hero-background.webp`;
  const fallbackBgUrl = `${import.meta.env.BASE_URL}frames/frame_0001.jpg`;

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* 1. Main Cinematic Hero Background Frame Image */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          backgroundImage: `url("${heroBgUrl}"), url("${fallbackBgUrl}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: `translate3d(${-mouseOffset.x}px, ${-mouseOffset.y}px, 0) scale(1.04)`,
          transition: 'transform 0.2s ease-out, opacity 1s ease-out',
          willChange: 'transform, opacity'
        }}
      />

      {/* 2. Crystal Clear Subtle Overlay for Maximum Background Visibility */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-black/50 via-black/25 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-[#0e131f]/40 via-transparent to-black/20 pointer-events-none" />

      {/* 3. Hero Content Container (Placed Above Background) */}
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 relative transition-all duration-1000 ease-out transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
        style={{
          transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE: Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Name Eyebrow */}
            <div className="text-xs font-mono uppercase tracking-[0.25em] text-[#4cd7f6] flex items-center gap-2 font-bold drop-shadow-md">
              <Sparkles className="w-4 h-4 text-[#ffb596] animate-pulse" />
              <span>SHAILESH RAVAL</span>
            </div>

            {/* Role Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#161c28]/90 border border-[#2fd9f4]/40 backdrop-blur-xl shadow-[0_0_20px_rgba(47,217,244,0.25)]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2fd9f4] animate-ping" />
              <span className="text-xs sm:text-sm font-mono font-bold tracking-wider text-[#8aebff] uppercase">
                FULL STACK APP & WEB DEVELOPER
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] drop-shadow-lg">
              "Building Modern <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#8aebff] via-[#2fd9f4] to-[#d0bcff] bg-clip-text text-transparent">
                Apps, Websites & AI
              </span>{' '}
              Solutions."
            </h1>

            {/* Subtitle Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed drop-shadow">
              Architecting modern, scalable web applications, mobile apps, AI-powered platforms, and enterprise business solutions with sub-100ms response speed and high-end aesthetic polish.
            </p>

            {/* Key Stack Capabilities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Flutter Mobile Apps (iOS & Android)',
                'Next.js 14 & React 19 Web Systems',
                'Google Gemini 2.5 AI SDK Agents',
                'Enterprise Multi-Tenant SaaS Architecture'
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs font-medium text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#2fd9f4] shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* Buttons Row */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* Hire Me Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#2fd9f4] text-[#001f25] font-code-sm font-bold hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(47,217,244,0.5)] transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>Hire Me</span>
              </a>

              {/* View Projects Button */}
              <a
                href="#projects"
                className="flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-[#2fd9f4] text-[#8aebff] font-code-sm font-semibold hover:bg-[#2fd9f4]/15 hover:shadow-[0_0_20px_rgba(47,217,244,0.2)] transition-all duration-300 backdrop-blur-md"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-[#2fd9f4]" />
              </a>

              {/* Download Resume Button */}
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2.5 px-8 py-3.5 rounded-full glass-card text-on-surface hover:text-[#8aebff] font-code-sm transition-all duration-300 border border-white/20"
              >
                <Download className="w-4 h-4 text-[#ffb596]" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Core Tech Stack Badges */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest mb-3">
                Core Stack Arsenal
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {CORE_STACK_LOGOS.map((stack) => (
                  <span
                    key={stack.name}
                    className="px-3 py-1 rounded-md bg-[#161c28]/90 border border-white/15 text-xs font-mono font-medium text-slate-300 hover:border-[#2fd9f4]/40 transition-colors shadow-sm"
                  >
                    {stack.name}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: 3D Interactive Telemetry Screen */}
          <div className="lg:col-span-5 h-[460px] sm:h-[520px] w-full relative">
            <div className="w-full h-full glass-card rounded-3xl border border-white/15 p-2 overflow-hidden relative shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              
              {/* Telemetry Header Badge */}
              <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0e131f]/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-[#8aebff]">
                  <Cpu className="w-3.5 h-3.5 animate-spin" />
                  <span>THREE.JS WEBGL 3D ACTIVE</span>
                </div>
                <div className="text-[10px] font-mono text-slate-400 bg-[#0e131f]/80 px-3 py-1 rounded-full border border-white/15">
                  60 FPS LERP PHYSICS
                </div>
              </div>

              {/* Three.js 3D Device Scene */}
              {webglSupported ? (
                <Canvas gl={{ antialias: true, alpha: true }}>
                  <PerspectiveCamera makeDefault position={[0, 0, 5.2]} fov={45} />
                  <DevicesScene mouse={mouse} />
                </Canvas>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-[#161c28] to-[#0e131f]">
                  <div className="w-32 h-48 rounded-2xl border-2 border-[#2fd9f4] bg-[#0e131f] p-3 shadow-glowCyan animate-float mb-4 flex flex-col justify-between">
                    <div className="w-12 h-2 bg-[#2fd9f4] rounded-full mx-auto" />
                    <div className="text-center font-mono text-[10px] text-[#8aebff]">
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

              {/* Sheen Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0e131f] to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
