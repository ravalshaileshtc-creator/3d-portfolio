import React, { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 30;

export const ScrollFrameBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const currentFrameRef = useRef<number>(0);
  const targetFrameRef = useRef<number>(0);
  const animFrameIdRef = useRef<number | null>(null);

  // Preload frames
  useEffect(() => {
    let mounted = true;
    const loadedImages: HTMLImageElement[] = [];
    let count = 0;

    const baseUrl = import.meta.env.BASE_URL.endsWith('/')
      ? import.meta.env.BASE_URL
      : `${import.meta.env.BASE_URL}/`;

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const frameNumber = String(i).padStart(4, '0');
      img.src = `${baseUrl}frames/frame_${frameNumber}.jpg`;
      
      img.onload = () => {
        if (!mounted) return;
        count++;
        setLoadedCount(count);
        if (count === FRAME_COUNT) {
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        if (!mounted) return;
        count++;
        setLoadedCount(count);
        if (count === FRAME_COUNT) {
          setIsLoaded(true);
        }
      };

      loadedImages.push(img);
    }

    imagesRef.current = loadedImages;

    return () => {
      mounted = false;
    };
  }, []);

  // Handle Scroll calculation
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const scrollFraction = Math.min(1, Math.max(0, scrollTop / maxScroll));
      targetFrameRef.current = scrollFraction * (FRAME_COUNT - 1);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Render loop with smooth lerp physics
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const render = () => {
      // Lerp frame target for 60 FPS fluid scrub
      currentFrameRef.current += (targetFrameRef.current - currentFrameRef.current) * 0.12;
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.round(currentFrameRef.current))
      );

      const img = imagesRef.current[frameIndex];

      if (img && img.complete && img.naturalWidth > 0) {
        // Handle cover object-fit calculation
        const cw = canvas.width;
        const ch = canvas.height;
        const iw = img.naturalWidth;
        const ih = img.naturalHeight;

        const scale = Math.max(cw / iw, ch / ih);
        const nw = iw * scale;
        const nh = ih * scale;
        const nx = (cw - nw) / 2;
        const ny = (ch - nh) / 2;

        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, nx, ny, nw, nh);
      }

      animFrameIdRef.current = requestAnimationFrame(render);
    };

    // Resize handler
    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    animFrameIdRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [isLoaded]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#11131b]">
      {/* Background Frame Sequence Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
        style={{ opacity: isLoaded ? 0.75 : 0.2 }}
      />

      {/* Cyberpunk Glass Radial Overlay for Crisp Contrast */}
      <div className="absolute inset-0 bg-radial-vignette bg-gradient-to-b from-[#11131b]/80 via-[#11131b]/60 to-[#11131b]/95 backdrop-blur-[2px]" />

      {/* Cyan & Purple Glowing Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#4cd7f6]/15 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-[30rem] h-[30rem] bg-[#b4c5ff]/15 rounded-full blur-[140px] animate-pulse-slow pointer-events-none" />

      {/* Preloader subtle indicator when frames load */}
      {!isLoaded && (
        <div className="absolute bottom-6 right-6 z-50 flex items-center gap-3 bg-[#191b23]/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs text-slate-300">
          <div className="w-2 h-2 rounded-full bg-[#4cd7f6] animate-ping" />
          <span>Loading background sequence ({loadedCount}/{FRAME_COUNT})</span>
        </div>
      )}
    </div>
  );
};
