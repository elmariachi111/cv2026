import { Bike, Bot, ChevronDown, Cloud, Code2, Heart, Leaf, Wrench } from 'lucide-react';
import { motion } from 'motion/react';
import hackerImage from '/nb2_hacker.png';
import { useIsMobile } from './ui/use-mobile';

export function HeroSection() {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Massive color blend background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255, 0, 255, 0.12) 0%, transparent 50%)',
            mixBlendMode: 'screen',
          }}
        />
        {/* Inverted dark spots */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 20%, rgba(0, 0, 0, 0.6) 0%, transparent 40%)',
            mixBlendMode: 'multiply',
          }}
        />
      </div>

      {/* Stylized hacker image - full size, anchored to top-right */}
      <motion.div
        className="absolute right-0 top-[4.5rem] md:top-0 h-full w-full z-5 overflow-hidden"
        initial={isMobile === false ? { opacity: 0, x: 100 } : {}}
        animate={isMobile === false ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <img 
          src={hackerImage} 
          alt="Stylized portrait"
          className="absolute top-0 right-0 h-full w-auto"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)',
            opacity: 0.6,
            objectFit: 'contain',
            objectPosition: 'top right',
          }}
        />
      </motion.div>

      <div className="relative z-10 w-full px-2 md:px-8 py-20">
        <motion.div
          className="max-w-4xl"
          initial={isMobile === false ? { opacity: 0 } : {}}
          animate={isMobile === false ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
        >
          {/* Terminal prompt style */}
          <motion.div
            className="mb-8"
            initial={isMobile === false ? { opacity: 0, x: -20 } : {}}
            animate={isMobile === false ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" style={{ boxShadow: '0 0 10px #ff0000' }} />
                <div className="w-3 h-3 rounded-full bg-yellow-500" style={{ boxShadow: '0 0 10px #ffff00' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'var(--neon-green)', boxShadow: '0 0 10px var(--neon-green)' }} />
              </div>
              <span 
                className="text-sm tracking-wider"
                style={{ 
                  fontFamily: 'var(--font-terminal)',
                  color: 'var(--neon-green)',
                  textShadow: '0 0 10px var(--neon-green)',
                  fontSize: '20px',
                }}
              >
                &gt; SYSTEM.INIT_CV
              </span>
            </div>
          </motion.div>

          {/* Main headline - MASSIVE */}
          <motion.h1 
            className="mb-12"
            initial={isMobile === false ? { opacity: 0, y: 50 } : {}}
            animate={isMobile === false ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="space-y-3">
              <div 
                className="text-3xl md:text-5xl lg:text-7xl uppercase leading-none tracking-tight"
                style={{ 
                  fontFamily: 'var(--font-accent)',
                  color: 'var(--neon-cyan)',
                  textShadow: `
                    0 0 40px var(--neon-cyan),
                    0 0 80px var(--neon-cyan),
                    0 0 120px rgba(0, 255, 255, 0.5),
                    2px 2px 0px rgba(255, 0, 255, 0.3),
                    -2px -2px 0px rgba(0, 255, 0, 0.2)
                  `,
                }}
              >
                It only counts
              </div>
                <div 
                  className="text-3xl md:text-5xl lg:text-7xl uppercase leading-none tracking-tight"
                  style={{ 
                    fontFamily: 'var(--font-accent)',
                    color: 'var(--neon-yellow)',
                    textShadow: `
                      0 0 40px var(--neon-yellow),
                      0 0 80px var(--neon-yellow),
                      0 0 120px rgba(255, 255, 0, 0.5),
                      2px 2px 0px rgba(255, 0, 255, 0.3),
                      -2px -2px 0px rgba(0, 255, 255, 0.2)
                    `,
                  }}
                >
                  if it helps
                </div>
              <div 
                className="text-3xl md:text-5xl lg:text-7xl uppercase leading-none tracking-tight"
                style={{ 
                  fontFamily: 'var(--font-accent)',
                  color: 'var(--neon-magenta)',
                  textShadow: `
                    0 0 40px var(--neon-magenta),
                    0 0 80px var(--neon-magenta),
                    0 0 120px rgba(255, 0, 255, 0.5),
                    2px 2px 0px rgba(0, 255, 255, 0.3),
                    -2px -2px 0px rgba(255, 255, 0, 0.2)
                  `,
                }}
              >
                a human
              </div>
            </div>
          </motion.h1>

          {/* Values pills - now with intense glow */}
          <motion.div
            className="flex flex-wrap gap-4 mb-20"
            initial={isMobile === false ? { opacity: 0, y: 30 } : {}}
            animate={isMobile === false ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            
            <ValuePill icon={<Wrench className="w-6 h-6" />} text="BUILDER" color="var(--neon-cyan)" isMobile={isMobile} />
            <ValuePill icon={<Heart className="w-6 h-6" />} text="CARETAKER" color="var(--neon-pink)" isMobile={isMobile} />
            <ValuePill icon={<Bot className="w-6 h-6" />} text="AGENTIC AI" color="var(--neon-yellow)" isMobile={isMobile} />
            <ValuePill icon={<Leaf className="w-6 h-6" />} text="ENVIRONMENTALIST" color="var(--neon-green)" isMobile={isMobile} />
            <ValuePill icon={<Bike className="w-6 h-6" />} text="CYCLEPUNK" color="var(--neon-pink)" isMobile={isMobile} />
          </motion.div>

          {/* Subtitle */}
          <motion.div
            className="max-w-3xl"
            initial={isMobile === false ? { opacity: 0 } : {}}
            animate={isMobile === false ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
          >
            <p 
              className="text-lg md:text-2xl mb-6 leading-relaxed uppercase tracking-wide"
              style={{ 
                fontFamily: 'var(--font-terminal)',
                color: 'rgba(255, 255, 255, 0.9)',
                textShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
              }}
            >
              &gt; BUIDLING SINCE Y2K
            </p>
            <p 
              className="text-base md:text-xl mb-3 opacity-80 uppercase tracking-wider"
              style={{ 
                fontFamily: 'var(--font-primary)',
                color: 'var(--neon-green)',
                textShadow: '0 0 15px var(--neon-green)',
              }}
            >
              WEB STACK DEV • P2P • CRYPTOGRAPHY • ONCHAIN • DONT TRUST, VERIFY
            </p>
            <p 
              className="text-sm md:text-lg opacity-60 uppercase tracking-wider"
              style={{ 
                fontFamily: 'var(--font-terminal)',
                color: 'var(--neon-cyan)',
                textShadow: '0 0 10px var(--neon-cyan)',
              }}
            >
              📍 BERLIN, GERMANY
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            animate={isMobile ? undefined : { y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown 
              className="w-8 h-8" 
              style={{ 
                color: 'var(--neon-cyan)',
                filter: 'drop-shadow(0 0 10px var(--neon-cyan))'
              }} 
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ValuePill({ icon, text, color, isMobile }: { icon: React.ReactNode; text: string; color: string; isMobile: boolean }) {
  return (
    <motion.div 
      className="flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 backdrop-blur-sm uppercase tracking-wider"
      style={{ 
        backgroundColor: `${color}08`,
        boxShadow: `
          0 0 30px ${color}60,
          inset 0 0 30px ${color}20,
          0 0 60px ${color}40
        `,
      }}
      whileHover={isMobile ? undefined : {
        scale: 1.05,
        boxShadow: `
          0 0 40px ${color}80,
          inset 0 0 40px ${color}30,
          0 0 80px ${color}60
        `,
      }}
    >
      <div style={{ color, filter: `drop-shadow(0 0 8px ${color})` }}>{icon}</div>
      <span 
        className="font-bold"
        style={{ 
          fontFamily: 'var(--font-accent)', 
          color,
          textShadow: `0 0 20px ${color}`,
          fontSize: '18px',
        }}>
        {text}
      </span>
    </motion.div>
  );
}
