import { useEffect, useState, useCallback } from 'react';
import { motion } from 'motion/react';

const images = [
  'bch2.jpg',
  'bchh2.jpg',
  'blockstagram.jpg',
  'check.jpg',
  'ct_panel.jpg',
  'ct_speaker.jpg',
  'ct22_talk.jpg',
  'ethams.jpg',
  'hack_eb2.jpg',
  'meetup_ivq.jpg',
  'meetup_pt.jpg',
  'meetup.jpg',
  'moderate_bo.jpg',
  'ostalb.jpg',
  'sfliveb_speaker.jpg',
  'txb_final_presentation.jpg',
  'warranti.jpg',
  'welshare_gang.jpg',
].map((f) => `/assets/optimized/${f}`);

const DISPLAY_DURATION = 3500;
const SLIDE_DURATION = 600;

export function PhotoSlideshow() {
  const [current, setCurrent] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [incoming, setIncoming] = useState<number | null>(null);

  const goTo = useCallback((nextIndex: number, dir: 1 | -1 = 1) => {
    if (sliding) return;
    setDirection(dir);
    setIncoming(nextIndex);
    setSliding(true);
    setTimeout(() => {
      setCurrent(nextIndex);
      setIncoming(null);
      setSliding(false);
    }, SLIDE_DURATION);
  }, [sliding]);

  const advance = useCallback(() => {
    goTo((current + 1) % images.length, 1);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setTimeout(advance, DISPLAY_DURATION);
    return () => clearTimeout(timer);
  }, [advance]);

  return (
    <section className="relative w-full py-16 flex justify-center">
      {/* Outer bezel — rounded TV corners */}
      <div
        style={{
          width: 'min(90vw, 960px)',
          aspectRatio: '4/3',
          borderRadius: '2.5%',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 0 0 4px rgba(255,255,255,0.04), 0 0 60px rgba(0,0,0,0.8)',
        }}
      >
        {/* Current image sliding out */}
        <img
          key={`cur-${current}`}
          src={images[current]}
          alt=""
          className="absolute inset-0 w-full h-full"
          style={{
            transform: sliding ? `translateX(${direction * -100}%)` : 'translateX(0%)',
            transition: sliding ? `transform ${SLIDE_DURATION}ms ease-in-out` : 'none',
          }}
          draggable={false}
        />

        {/* Incoming image sliding in */}
        {incoming !== null && (
          <img
            key={`inc-${incoming}`}
            src={images[incoming]}
            alt=""
            className="absolute inset-0 w-full h-full"
            style={{
              transform: sliding ? 'translateX(0%)' : `translateX(${direction * 100}%)`,
              transition: `transform ${SLIDE_DURATION}ms ease-in-out`,
            }}
            draggable={false}
          />
        )}

        {/* ── CRT overlay stack ── */}

        {/* Scanlines */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            opacity: 0.08,
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.8) 2px, rgba(0,255,255,0.8) 3px)',
            animation: 'scanlines 8s linear infinite',
          }}
        />

        {/* Sweeping scan bar */}
        <div
          className="absolute left-0 right-0 pointer-events-none z-10"
          style={{
            height: 6,
            background:
              'linear-gradient(to bottom, transparent, rgba(0,255,255,0.15), rgba(255,255,255,0.06), transparent)',
            boxShadow: '0 0 12px 2px rgba(0,255,255,0.08)',
            animation: 'crt-sweep 4s linear infinite',
          }}
        />

        {/* Flicker */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          style={{ backgroundColor: 'rgba(0,200,255,0.03)' }}
          animate={{ opacity: [0.4, 0.7, 0.4, 0.9, 0.4] }}
          transition={{ duration: 0.15, repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        />

        {/* TV vignette — radial */}
        <div
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background: `radial-gradient(ellipse 100% 100% at 50% 50%,
              transparent 28%,
              rgba(0,0,0,0.5) 66%,
              rgba(0,0,0,0.92) 100%
            )`,
          }}
        />
        {/* TV vignette — left/right edges */}
        <div
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background: `linear-gradient(to right,
              rgba(0,0,0,0.5) 0%,
              transparent 14%,
              transparent 86%,
              rgba(0,0,0,0.5) 100%
            )`,
          }}
        />

        {/* Dot indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i === current ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)',
                transform: i === current ? 'scale(1.4)' : 'scale(1)',
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scanlines {
          0%   { transform: translateY(0); }
          100% { transform: translateY(4px); }
        }
        @keyframes crt-sweep {
          0%   { top: -6px; }
          100% { top: 100%; }
        }
      `}</style>
    </section>
  );
}
