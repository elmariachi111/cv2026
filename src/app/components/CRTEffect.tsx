import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

export function CRTEffect() {
  const [totalHeight, setTotalHeight] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const update = () => {
      setTotalHeight(document.body.scrollHeight);
      setIsMobile(window.innerWidth < 768);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const { scrollY } = useScroll();
  const crtFade = totalHeight * 0.15;
  const crtOpacity = useTransform(scrollY, [crtFade - 100, crtFade], [isMobile ? 0.3 : 1, 0]);

  return (
    <motion.div className="fixed inset-0 pointer-events-none overflow-hidden z-50" style={{ opacity: crtOpacity }}>
      {/* Scanlines - horizontal lines */}
      <div 
        className="absolute inset-0"
        style={{
          opacity: isMobile ? 0.03 : 0.08,
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.8) 2px, rgba(0, 255, 255, 0.8) 3px)',
          animation: 'scanlines 8s linear infinite',
        }}
      />
      
      {/* Flicker effect */}
      <motion.div 
        className="absolute inset-0 bg-cyan-500/5"
        animate={{ 
          opacity: [0.03, 0.05, 0.03, 0.06, 0.03],
        }}
        transition={{ 
          duration: 0.15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
      />
      
      {/* Screen curvature vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0, 0, 0, 0.4) 100%)',
          boxShadow: 'inset 0 0 200px rgba(0, 0, 0, 0.9)',
        }}
      />

      {/* Chromatic aberration glow */}
      <div 
        className="absolute inset-0 mix-blend-screen opacity-20"
        style={{
          background: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.1) 0%, transparent 60%)',
        }}
      />

      {/* CRT scanline bar - continuous top-to-bottom sweep */}
      <div
        className="absolute left-0 right-0"
        style={{
          height: 6,
          background: 'linear-gradient(to bottom, transparent, rgba(0, 255, 255, 0.15), rgba(255, 255, 255, 0.06), transparent)',
          boxShadow: '0 0 12px 2px rgba(0, 255, 255, 0.08)',
          animation: 'crt-sweep 4s linear infinite',
        }}
      />

      <style>{`
        @keyframes scanlines {
          0% { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }
        @keyframes crt-sweep {
          0% { top: -6px; }
          100% { top: 100%; }
        }
      `}</style>
    </motion.div>
  );
}

// Laser lightshow - 8 beams from projector below viewport, sweep top→bottom, whiteout at center
export function LaserBeams() {
  const [totalHeight, setTotalHeight] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => {
      setTotalHeight(document.body.scrollHeight);
      setIsMobile(window.innerWidth < 768);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const { scrollY } = useScroll();

  // ── Scroll zones ──
  const start = totalHeight * 0.45;
  const hit   = totalHeight * 0.62;
  const end   = totalHeight * 0.70;

  // Master beam visibility (disabled on mobile)
  const rawBeamOpacity = useTransform(
    scrollY,
    [start - 50, start, start + 100, end - 200, end],
    isMobile ? [0, 0, 0, 0, 0] : [0, 0.5, 1, 0.6, 0]
  );
  const beamOpacity = useSpring(rawBeamOpacity, { stiffness: 60, damping: 22 });

  // Fan spread: starts very narrow (beams nearly vertical = pointing at ceiling),
  // opens to full width at hit (beams fanned out at eye level)
  const rawFanSpread = useTransform(
    scrollY,
    [start, hit, end],
    [0.15, 1, 1.05]
  );
  const fanSpread = useSpring(rawFanSpread, { stiffness: 50, damping: 18 });

  // Origin rises from far below to just under viewport as beams tilt toward viewer
  const originBottom = useTransform(
    scrollY,
    [start, hit, end],
    [-500, -160, -140]
  );

  // ── Whiteout sequence (disabled on mobile) ──
  const colorTint = useTransform(
    scrollY,
    [hit - 400, hit - 150, hit, hit + 200, hit + 500],
    isMobile ? [0, 0, 0, 0, 0] : [0, 0.25, 0.15, 0.25, 0]
  );
  const colorTintSpring = useSpring(colorTint, { stiffness: 50, damping: 20 });

  const whiteout = useTransform(
    scrollY,
    [hit - 80, hit, hit + 80, hit + 350],
    isMobile ? [0, 0, 0, 0] : [0, 0.92, 0.7, 0]
  );
  const whiteoutSpring = useSpring(whiteout, { stiffness: 40, damping: 16 });

  const hitColor = '0, 255, 255';

  // 8 beams fanned symmetrically around 0° (straight up)
  // rotate(0) = straight up, negative = left, positive = right
  // ±56° covers the full viewport width and beyond
  const beams: { color: string; angle: number; width: number; shimmer: number }[] = [
    { color: 'var(--neon-green)',           angle: -56, width: 1.5, shimmer: 3.6 },
    { color: 'var(--neon-magenta)',         angle: -40, width: 1.5, shimmer: 2.6 },
    { color: 'var(--neon-yellow)',          angle: -24, width: 1.5, shimmer: 3.8 },
    { color: 'var(--neon-pink, #ff2d78)',   angle: -8,  width: 1.5, shimmer: 3.4 },
    { color: 'var(--neon-cyan)',            angle: 0,   width: 3,   shimmer: 2.8 }, // center hitter
    { color: 'var(--neon-green)',           angle: 8,   width: 1.5, shimmer: 3.2 },
    { color: 'var(--neon-magenta)',         angle: 24,  width: 1.5, shimmer: 2.4 },
    { color: 'var(--neon-yellow)',          angle: 40,  width: 1.5, shimmer: 3.0 },
  ];

  return (
    <>
      <motion.div
        className="fixed inset-0 pointer-events-none overflow-hidden z-40"
        style={{ opacity: beamOpacity }}
      >
        {/* Projector origin: bottom center, below viewport */}
        <motion.div
          className="absolute left-1/2"
          style={{
            bottom: originBottom,
            width: 0,
            height: 0,
            scaleX: fanSpread,
          }}
        >
          {beams.map((beam, i) => (
            <LaserRay
              key={i}
              color={beam.color}
              angle={beam.angle}
              width={beam.width}
              shimmerDuration={beam.shimmer}
              isCenter={beam.angle === 0}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Color tint overlay */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-40"
        style={{
          opacity: colorTintSpring,
          backgroundColor: `rgba(${hitColor}, 0.5)`,
          mixBlendMode: 'screen',
        }}
      />

      {/* Full-page whiteout */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-40"
        style={{
          opacity: whiteoutSpring,
          backgroundColor: 'white',
        }}
      />
    </>
  );
}

interface LaserRayProps {
  color: string;
  angle: number;
  width: number;
  shimmerDuration: number;
  isCenter?: boolean;
}

function LaserRay({ color, angle, width, shimmerDuration, isCenter }: LaserRayProps) {
  return (
    <motion.div
      className="absolute bottom-0 left-0 origin-bottom"
      style={{
        width,
        height: '250vh',
        transform: `rotate(${angle}deg)`,
        background: `linear-gradient(to top, ${color} 0%, ${color}dd 20%, ${color}99 50%, ${color}55 80%, ${color}22 100%)`,
        boxShadow: isCenter
          ? `0 0 14px 3px ${color}, 0 0 40px 6px ${color}`
          : `0 0 8px 1px ${color}, 0 0 20px 3px ${color}`,
        filter: `blur(${isCenter ? 0.3 : 0.6}px)`,
        marginLeft: -width / 2,
      }}
      animate={{
        opacity: isCenter ? [0.6, 1, 0.6] : [0.35, 0.8, 0.35],
      }}
      transition={{
        duration: shimmerDuration,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}
