import { useEffect, useState, useCallback } from "react";
import { motion } from "motion/react";

const slides = [
  { file: "ct_speaker.jpg", title: "code.talks 2018: Headless CMS" },
  {
    file: "blockstagram.jpg",
    title: "Blockstack Hackathon 2018: Team Blockstagram",
  },
  { file: "bch2.jpg", title: "Blockchain Hackathon 2019" },
  { file: "check.jpg", title: "Check24 Team Day" },
  { file: "hack_eb2.jpg", title: "ETH Berlin 2" },
  { file: "sfliveb_speaker.jpg", title: "Symfony Live 2019" },
  {
    file: "meetup_ivq.jpg",
    title: "Demoing fullstack resource commission system framework at Inviqa",
  },
  { file: "meetup_pt.jpg", title: "Coding Portugal 2019: A React Talk" },
  { file: "meetup.jpg", title: "Coding Berlin 2019: A Day at the Disco" },
  {
    file: "moderate_bo.jpg",
    title: "2020: Moderating Breakout week (internal hackathon)",
  },
  { file: "ethams.jpg", title: "ETH Amsterdan" },
  {
    file: "ostalb.jpg",
    title: "2020: Inspirational Opener for Ostalb 48h hackathon",
  },
  { file: "ct_panel.jpg", title: "code.talks 2022: web3 panel" },
  {
    file: "ct22_talk.jpg",
    title: "code.talks 2022: took over Ethereum (Merge) talk",
  },
  { file: "warranti.jpg", title: "warranti team says thank you 🫶" },
  { file: "desci_berlin_23.jpg", title: "IP-NFT talk at Desci Berlin 23" },
  { file: "cambridge.jpg", title: "Molecule goes Cambridge (PoI hackathon)" },
  { file: "welshare_gang.jpg", title: "Tech advisor / cofounder Welshare" },
].map((s) => ({ ...s, src: `/assets/optimized/${s.file}` }));

const DISPLAY_DURATION = 3500;
const SLIDE_DURATION = 600;

function SlideTitle({ title }: { title: string }) {
  return (
    <div className="absolute bottom-10 left-0 right-0 flex justify-center pointer-events-none z-30">
      <span
        style={{
          fontFamily: "monospace",
          fontSize: "clamp(0.65rem, 1.5vw, 0.95rem)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.88)",
          textShadow: "0 0 8px rgba(0,200,255,0.6), 0 1px 4px rgba(0,0,0,0.8)",
          background: "rgba(0,0,0,0.35)",
          padding: "0.2em 0.7em",
          borderRadius: "2px",
        }}
      >
        {title}
      </span>
    </div>
  );
}

export function PhotoSlideshow() {
  const [current, setCurrent] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [incoming, setIncoming] = useState<number | null>(null);

  const goTo = useCallback(
    (nextIndex: number, dir: 1 | -1 = 1) => {
      if (sliding) return;
      setDirection(dir);
      setIncoming(nextIndex);
      setSliding(true);
      setTimeout(() => {
        setCurrent(nextIndex);
        setIncoming(null);
        setSliding(false);
      }, SLIDE_DURATION);
    },
    [sliding],
  );

  const advance = useCallback(() => {
    goTo((current + 1) % slides.length, 1);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setTimeout(advance, DISPLAY_DURATION);
    return () => clearTimeout(timer);
  }, [advance]);

  return (
    <section className="relative w-full  flex justify-center">
      {/* Outer bezel — rounded TV corners */}
      <div
        style={{
          width: "min(90vw, 1024px)",
          aspectRatio: "4/3",
          borderRadius: "2.5%",
          overflow: "hidden",
          position: "relative",
          boxShadow:
            "0 0 0 4px rgba(255,255,255,0.04), 0 0 60px rgba(0,0,0,0.8)",
        }}
      >
        {/* Current image sliding out */}
        <img
          key={`cur-${current}`}
          src={slides[current].src}
          alt={slides[current].title}
          className="absolute inset-0 w-full h-full"
          style={{
            transform: sliding
              ? `translateX(${direction * -100}%)`
              : "translateX(0%)",
            transition: sliding
              ? `transform ${SLIDE_DURATION}ms ease-in-out`
              : "none",
          }}
          draggable={false}
        />

        {/* Incoming image sliding in */}
        {incoming !== null && (
          <img
            key={`inc-${incoming}`}
            src={slides[incoming].src}
            alt={slides[incoming].title}
            className="absolute inset-0 w-full h-full"
            style={{
              transform: sliding
                ? "translateX(0%)"
                : `translateX(${direction * 100}%)`,
              transition: `transform ${SLIDE_DURATION}ms ease-in-out`,
            }}
            draggable={false}
          />
        )}

        {/* ── CRT overlay stack ── */}

        {/* Flicker */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          style={{ backgroundColor: "rgba(0,200,255,0.03)" }}
          animate={{ opacity: [0.4, 0.7, 0.4, 0.9, 0.4] }}
          transition={{
            duration: 0.15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
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

        {/* Slide title */}
        <SlideTitle title={slides[current].title} />

        {/* Prev / Next buttons */}
        <button
          onClick={() =>
            goTo((current - 1 + slides.length) % slides.length, -1)
          }
          className="absolute left-3 top-1/2 -translate-y-1/2 z-30"
          style={{
            background: "rgba(0,0,0,0.4)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "rgba(255,255,255,0.8)",
            width: "4rem",
            height: "4rem",
            borderRadius: "2px",
            cursor: "pointer",
            fontSize: "3rem",
            lineHeight: 1,
          }}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          onClick={() => goTo((current + 1) % slides.length, 1)}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-30"
          style={{
            background: "rgba(0,0,0,0.4)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "rgba(255,255,255,0.8)",
            width: "4rem",
            height: "4rem",
            borderRadius: "2px",
            cursor: "pointer",
            fontSize: "3rem",
            lineHeight: 1,
          }}
          aria-label="Next slide"
        >
          ›
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-30">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              className="w-1.5 h-1.5 rounded-full transition-all duration-300"
              style={{
                backgroundColor:
                  i === current
                    ? "rgba(255,255,255,0.9)"
                    : "rgba(255,255,255,0.3)",
                transform: i === current ? "scale(1.4)" : "scale(1)",
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
