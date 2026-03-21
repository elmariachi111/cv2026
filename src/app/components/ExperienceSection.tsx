import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

const timeline = [
  {
    era: '2020S',
    title: 'AI × WEB3 × CLOUD',
    role: 'BUILDING THE DECENTRALIZED FUTURE',
    description: 'LEADING INITIATIVES AT THE INTERSECTION OF AGENTIC AI, CRYPTOGRAPHY, AND CLOUD OPERATIONS. DESIGNING PERMISSIONLESS SYSTEMS THAT SCALE. NO INTERMEDIARIES. NO SINGLE POINT OF FAILURE.',
    tech: ['AI AGENTS', 'WEB3', 'CRYPTOGRAPHY', 'CLOUD OPS', 'DEVOPS', 'SMART CONTRACTS'],
    color: 'var(--neon-cyan)',
  },
  {
    era: '2010S',
    title: 'STARTUP ECOSYSTEM',
    role: 'BUILDING & SCALING',
    description: 'DEEP INVOLVEMENT IN STARTUP CULTURE. BUSINESS MODEL INNOVATION, PRODUCT DEVELOPMENT, AND GROWTH STRATEGIES. LEARNED WHAT IT TAKES TO GO FROM ZERO TO ONE. FAILED FAST, LEARNED FASTER.',
    tech: ['BUSINESS MODELS', 'PRODUCT STRATEGY', 'GROWTH', 'TEAM BUILDING', 'FUNDRAISING'],
    color: 'var(--neon-magenta)',
  },
  {
    era: '2000S',
    title: 'SOFTWARE FOUNDATIONS',
    role: 'MASTERING THE CRAFT',
    description: 'BUILDING THE TECHNICAL FOUNDATION. LEARNING SYSTEMS THINKING, SOFTWARE ARCHITECTURE, AND THE ART OF SHIPPING RELIABLE CODE. WHERE IT ALL BEGAN. THE FUNDAMENTALS THAT NEVER CHANGE.',
    tech: ['SOFTWARE ARCHITECTURE', 'SYSTEM DESIGN', 'DATABASES', 'APIS', 'LINUX', 'NETWORKING'],
    color: 'var(--neon-green)',
  },
];

export function ExperienceSection() {
  return (
    <section className="relative py-32" id="experience">
      {/* Massive color blend */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 30% 40%, rgba(255, 0, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(0, 255, 65, 0.08) 0%, transparent 50%)',
            mixBlendMode: 'screen',
          }}
        />
        {/* Dark inversion */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 0, 0, 0.4) 0%, transparent 60%)',
            mixBlendMode: 'multiply',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-8">
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 
            className="text-8xl md:text-[10rem] mb-6 uppercase tracking-tight leading-none"
            style={{ 
              fontFamily: 'var(--font-accent)',
              color: 'var(--neon-magenta)',
              textShadow: `
                0 0 40px var(--neon-magenta),
                0 0 80px var(--neon-magenta),
                0 0 120px rgba(255, 0, 255, 0.4)
              `,
            }}>
            25+ YEARS
          </h2>
          <p 
            className="text-2xl uppercase tracking-wider"
            style={{ 
              fontFamily: 'var(--font-terminal)',
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '28px',
            }}>
            &gt; SOFTWARE // STARTUPS // SYSTEMIC CHANGE
          </p>
        </motion.div>

        <div className="space-y-0">
          {timeline.map((item, index) => (
            <TimelinePanel key={item.era} {...item} index={index} />
          ))}
        </div>

        {/* Current Focus - Full bleed panel */}
        <motion.div
          className="mt-0 p-16 md:p-24 relative overflow-hidden"
          style={{ 
            backgroundColor: 'rgba(0, 255, 255, 0.05)',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Intense glow background */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 30% 50%, rgba(0, 255, 255, 0.15) 0%, transparent 60%)',
              boxShadow: 'inset 0 0 100px rgba(0, 255, 255, 0.2)',
            }}
          />

          <div className="relative z-10">
            <Terminal 
              className="w-16 h-16 mb-8" 
              style={{ 
                color: 'var(--neon-cyan)',
                filter: 'drop-shadow(0 0 20px var(--neon-cyan))'
              }} 
            />
            
            <h3 
              className="text-6xl md:text-7xl mb-8 uppercase tracking-tight"
              style={{ 
                fontFamily: 'var(--font-accent)',
                color: 'var(--neon-cyan)',
                textShadow: '0 0 40px var(--neon-cyan)',
              }}>
              CURRENT FOCUS
            </h3>
            
            <p 
              className="text-xl md:text-2xl mb-10 leading-relaxed max-w-5xl uppercase tracking-wide"
              style={{ 
                fontFamily: 'var(--font-primary)',
                color: 'rgba(255, 255, 255, 0.9)',
              }}>
              WORKING ON THE CUTTING EDGE WHERE AUTONOMOUS AI AGENTS MEET DECENTRALIZED INFRASTRUCTURE. 
              BUILDING SYSTEMS THAT ARE PERSISTENT, TRUSTLESS, AND DESIGNED FOR A FUTURE WHERE NO SINGLE 
              ENTITY CONTROLS THE FLOW OF INFORMATION.
            </p>
            
            <div className="flex flex-wrap gap-4">
              {['AGENTIC AI', 'WEB3 PROTOCOLS', 'CRYPTOGRAPHY', 'CLOUD INFRASTRUCTURE', 'DEVOPS', 'SMART CONTRACTS'].map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-3 uppercase tracking-wider"
                  style={{
                    fontFamily: 'var(--font-accent)',
                    fontSize: '14px',
                    color: 'var(--neon-cyan)',
                    backgroundColor: 'rgba(0, 255, 255, 0.08)',
                    boxShadow: '0 0 20px rgba(0, 255, 255, 0.3), inset 0 0 20px rgba(0, 255, 255, 0.1)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TimelinePanel({ 
  era, 
  title, 
  role, 
  description, 
  tech, 
  color,
  index 
}: { 
  era: string;
  title: string;
  role: string;
  description: string;
  tech: string[];
  color: string;
  index: number;
}) {
  return (
    <motion.div
      className="relative p-12 md:p-20 overflow-hidden group"
      style={{ 
        backgroundColor: `${color}05`,
      }}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      whileHover={{
        backgroundColor: `${color}10`,
      }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle at center, ${color}15 0%, transparent 70%)`,
          boxShadow: `inset 0 0 100px ${color}30`,
        }}
      />

      {/* Vertical laser line */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-[3px] opacity-50"
        style={{
          background: color,
          boxShadow: `0 0 20px ${color}, 0 0 40px ${color}`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-baseline gap-6 mb-8">
          <span 
            className="text-5xl md:text-6xl uppercase tracking-tight"
            style={{ 
              fontFamily: 'var(--font-terminal)',
              color,
              textShadow: `0 0 30px ${color}`,
              fontSize: '72px',
            }}>
            {era}
          </span>
        </div>
        
        <h3 
          className="text-4xl md:text-6xl mb-3 uppercase tracking-tight"
          style={{ 
            fontFamily: 'var(--font-accent)', 
            color,
            textShadow: `0 0 30px ${color}80`,
          }}>
          {title}
        </h3>
        
        <p 
          className="text-xl md:text-2xl mb-6 uppercase tracking-wide"
          style={{ 
            fontFamily: 'var(--font-terminal)',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '24px',
          }}>
          {role}
        </p>
        
        <p 
          className="text-base md:text-lg mb-8 leading-relaxed max-w-4xl uppercase tracking-wide"
          style={{ 
            fontFamily: 'var(--font-primary)',
            color: 'rgba(255, 255, 255, 0.8)',
          }}>
          {description}
        </p>
        
        <div className="flex flex-wrap gap-3">
          {tech.map((t) => (
            <span 
              key={t} 
              className="px-4 py-2 text-sm uppercase tracking-wider"
              style={{ 
                fontFamily: 'var(--font-primary)',
                color: color,
                backgroundColor: `${color}08`,
                boxShadow: `0 0 15px ${color}40`,
              }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Era number watermark */}
      <div 
        className="absolute bottom-8 right-8 text-9xl opacity-5"
        style={{ 
          fontFamily: 'var(--font-terminal)',
          color,
          fontSize: '160px',
          lineHeight: '1',
        }}
      >
        {era.substring(2, 4)}
      </div>
    </motion.div>
  );
}
