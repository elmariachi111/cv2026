import { motion } from 'motion/react';
import { Shield, Zap, Globe, Users, Cpu, Lock, VenetianMask } from 'lucide-react';
import { useIsMobile } from './ui/use-mobile';

const values = [
  {
    icon: Shield,
    title: 'CYPHERPUNK ETHOS',
    description: 'I BUILD SYSTEMS THAT EMPOWER INDIVIDUALS THROUGH CRYPTOGRAPHY AND PRIVACY-FIRST DESIGN. CODE IS LAW, ENCRYPTION IS FREEDOM.',
    color: 'var(--neon-cyan)',
    bgColor: 'rgba(0, 255, 255, 0.05)',
  },
  {
    icon: Users,
    title: 'EMPATHY & HUMANITY',
    description: 'I\'M DRIVEN BY EMPATHY AND I WANT TO UNDERSTAND MY PARTNERS\' REASONING AND DECISIONS.',
    color: 'var(--neon-pink)',
    bgColor: 'rgba(255, 16, 240, 0.05)',
  },
  {
    icon: VenetianMask,
    title: 'PRIVACY',
    description: 'WHAT\'S PRIVATE SHOULD BE PROTECTED. KNOW WHAT YOU SHARE, KNOW WHAT YOU KEEP. CRYPTOGRAPHY IS NOT A CRIME.',
    color: 'var(--neon-yellow)',
    bgColor: 'rgba(255, 255, 0, 0.05)',
  },
  {
    icon: Globe,
    title: 'DECENTRALIZATION',
    description: 'AVOID SINGLE POINTS OF FAILURE AND GATEKEEPERS. BUILD SOFTWARE THAT RESISTS CENSORSHIP. WHAT\'S MADE AVAILABLE SHOULD BE ACCESSIBLE TO EVERYONE.',
    color: 'var(--neon-green)',
    bgColor: 'rgba(0, 255, 65, 0.05)',
  },
  {
    icon: Cpu,
    title: 'BUILT TO LAST',
    description: 'RELIABILITY, OBSERVABILITY, MAINTAINABILITY MATTERS. WHAT I BUILD SHOULD SURVIVE ME. QUALITY WINS OVER QUICK.',
    color: 'var(--neon-magenta)',
    bgColor: 'rgba(255, 0, 255, 0.05)',
  },
  {
    icon: Lock,
    title: 'PERMISSIONLESS',
    description: 'I PREFER OPEN PROTOCOLS OVER COMMERCIAL SERVICES. CODE SHOULD BE REUSABLE AND COMPOSABLE -  WITHOUT ASKING FOR PERMISSION.',
    color: 'var(--neon-blue)',
    bgColor: 'rgba(0, 212, 255, 0.05)',
  },
];

export function ValuesSection() {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative py-32" id="values">
      {/* Color blend background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 80% 50%, rgba(255, 0, 255, 0.12) 0%, transparent 60%)',
            mixBlendMode: 'screen',
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto px-2 md:px-8">
        <motion.div
          className="mb-24"
          initial={isMobile ? false : { opacity: 0, y: 30 }}
          animate={isMobile ? undefined : { opacity: 1, y: 0 }}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 
            className="text-7xl md:text-9xl mb-6 uppercase tracking-tight"
            style={{ 
              fontFamily: 'var(--font-accent)',
              color: 'var(--neon-cyan)',
              textShadow: `
                0 0 40px var(--neon-cyan),
                0 0 80px var(--neon-cyan),
                0 0 120px rgba(0, 255, 255, 0.4)
              `,
            }}>
            CORE VALUES
          </h2>
          <p 
            className="text-2xl uppercase tracking-wider"
            style={{ 
              fontFamily: 'var(--font-terminal)',
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '28px',
            }}>
            &gt; WHAT DRIVES ME BEYOND THE CODE
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {values.map((value, index) => (
            <ValuePanel key={value.title} {...value} index={index} isMobile={isMobile} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ValuePanel({ 
  icon: Icon, 
  title, 
  description, 
  color, 
  bgColor,
  index,
  isMobile 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  color: string;
  bgColor: string;
  index: number;
  isMobile: boolean;
}) {
  return (
    <motion.div
      className="relative p-6 md:p-12 lg:p-16 overflow-hidden group"
      style={{ 
        backgroundColor: bgColor,
      }}
      initial={isMobile ? false : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isMobile ? undefined : { opacity: 1, x: 0 }}
      whileInView={isMobile ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={isMobile ? undefined : { 
        backgroundColor: `${color}10`,
      }}
    >
      {/* Intense glow on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        style={{
          background: `radial-gradient(circle at center, ${color}20 0%, transparent 70%)`,
          boxShadow: `inset 0 0 100px ${color}40`,
        }}
      />

      <div className="relative z-10">
        <div className="mb-8" style={{ color, filter: `drop-shadow(0 0 20px ${color})` }}>
          <Icon className="w-16 h-16 md:w-20 md:h-20" strokeWidth={1.5} />
        </div>
        
        <h3 
          className="text-4xl md:text-5xl mb-6 uppercase tracking-tight leading-tight"
          style={{ 
            fontFamily: 'var(--font-accent)', 
            color,
            textShadow: `0 0 30px ${color}80`,
          }}>
          {title}
        </h3>
        
        <p 
          className="text-base md:text-lg leading-relaxed uppercase tracking-wide"
          style={{ 
            fontFamily: 'var(--font-primary)',
            color: 'rgba(255, 255, 255, 0.8)',
          }}>
          {description}
        </p>
      </div>

      {/* Corner number indicator */}
      <div 
        className="absolute bottom-6 right-6 text-6xl opacity-10 group-hover:opacity-20 transition-opacity"
        style={{ 
          fontFamily: 'var(--font-terminal)',
          color,
          fontSize: '80px',
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>
    </motion.div>
  );
}
