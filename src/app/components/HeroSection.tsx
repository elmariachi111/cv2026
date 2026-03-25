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
              <span 
                className="text-sm tracking-wider"
                style={{ 
                  fontFamily: 'var(--font-terminal)',
                  color: 'var(--neon-green)',
                  textShadow: '0 0 10px var(--neon-green)',
                  fontSize: '20px',
                }}
              >
                &tilde;/work/cv26 $ system --init cv
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
                Prinicipal
              </div>
                <div 
                  className="text-3xl md:text-5xl lg:text-7xl uppercase leading-none tracking-tight"
                  style={{ 
                    fontFamily: 'var(--font-accent)',
                    color: 'var(--neon-cyan)',
                    textShadow: `
                      0 0 40px var(--neon-cyan),
                      0 0 80px var(--neon-cyan),
                      0 0 120px rgba(255, 255, 0, 0.5),
                      2px 2px 0px rgba(255, 0, 255, 0.3),
                      -2px -2px 0px rgba(0, 255, 255, 0.2)
                    `,
                  }}
                >
                  With
                </div>
              <div 
                className="text-3xl md:text-5xl lg:text-7xl uppercase leading-none tracking-tight"
                style={{ 
                  fontFamily: 'var(--font-accent)',
                  color: 'var(--neon-cyan)',
                  textShadow: `
                    0 0 40px var(--neon-cyan),
                    0 0 80px var(--neon-cyan),
                    0 0 120px rgba(255, 0, 255, 0.5),
                    2px 2px 0px rgba(0, 255, 255, 0.3),
                    -2px -2px 0px rgba(255, 255, 0, 0.2)
                  `,
                }}
              >
                Principles
              </div>
            </div>
          </motion.h1>

          {/* Values pills - now with intense glow */}
          <motion.div
            className="flex flex-wrap gap-1 mb-20"
            initial={isMobile === false ? { opacity: 0, y: 30 } : {}}
            animate={isMobile === false ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            
            <ValuePill icon={<Wrench className="w-6 h-6" />} text="DEV" color="var(--neon-green)" isMobile={isMobile} />
            <ValuePill icon={<Bot className="w-6 h-6" />} text="AGENT CHARMER" color="var(--neon-green)" isMobile={isMobile} />
            <ValuePill icon={<Leaf className="w-6 h-6" />} text="ENVIRONMENTALIST" color="var(--neon-green)" isMobile={isMobile} />
            <ValuePill icon={<Bike className="w-6 h-6" />} text="CYCLEPUNK" color="var(--neon-green)" isMobile={isMobile} />
          </motion.div>

          {/* Subtitle */}
          <motion.div
            className="max-w-3xl"
            initial={isMobile === false ? { opacity: 0 } : {}}
            animate={isMobile === false ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 1 }}
          >
           
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
