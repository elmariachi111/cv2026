import { motion } from 'motion/react';
import { useIsMobile } from './ui/use-mobile';

const timeline = [
  {
    era: '2020S',
    title: 'FOCUS ON DECENTRALIZATION',
    role: 'BUILDING ON-CHAIN SYSTEMS',
    description: 'DEEP EXPERIENCE IN BLOCKCHAIN AND SMART CONTRACT DEVELOPMENT. ETHONLINE 21 FINALIST (<a href="https://ethglobal.com/showcase/splice-dzc68" target="_blank"  rel="noopener noreferrer" style="color:var(--link-color);text-shadow:0 0 10px var(--link-color)">SPLICE</a>). DECENTRALIZED EHRS. DID/VC/VP BASED CERTIFICATE VALIDATORS. PIONEERED WEB3 DEVELOPMENT AT <a href="https://molecule.to" target="_blank" rel="noopener noreferrer" style="color:var(--link-color);text-shadow:0 0 10px var(--link-color)">MOLECULE</a>, BUILDING IP TOKENIZATION INFRASTRUCTURE (IPNFTS), BONDING CURVE MARKETS (CATALYST), AND DECENTRALIZED CROWDFUNDING PROTOCOLS. ',
    tech: ['SOLIDITY', 'SMART CONTRACTS', 'FOUNDRY', 'SUBGRAPHS', 'ERC-20/721/1155', 'DEFI', 'TOKENIZATION', 'DID/VC'],
    link: { url: 'https://molecule.to', text: '→ MOLECULE.TO' },
    color: 'var(--neon-cyan)',
  },
  {
    era: '2010S',
    title: 'AGENCIES, STARTUPS, CORPORATES',
    role: 'BUILDING // MIGRATING // SCALING // EDUCATING',
    description: 'DEEPLY INVOLVED IN INCUBATED STARTUP GROWTH HACKING & SEO (CHECK24). BUSINESS MODEL INNOVATION, MEETUPS & DEVREL (TURBINE KREUZBERG, CODE.TALKS, CODING.EARTH), PRODUCT DEVELOPMENT, REPLATFORMING (SAMSUNG SDS, DISCOUNTO)',
    tech: ['JAVA EE', 'ORACLE', 'SPRING', 'FREEBSD', 'SYMFONY', 'MONGODB', 'NODEJS', 'VUE', 'REACT'],
    link: { url: 'https://turbinekreuzberg.com', text: '→ TURBINEKREUZBERG' },
    color: 'var(--neon-magenta)',
  },
  {
    era: '2000S',
    title: 'ACADEMIC, FOUNDER, BUILDER',
    role: 'THE EARLY YEARS',
    description: 'FINISHED MATH STUDIES. BUILT AT Y2K STARTUPS (CANTO, ASTROMO, ECRYPT). FOUNDED & EXITED AREADIGITAL AG (DIGITAL MEDIA HOUSE). ',
    tech: ['PHP', 'JAVA', 'C++', 'MATHEMATICA', 'NASTRAN', 'MICROSOFT .NET', 'JAVASCRIPT'],
    color: 'var(--neon-green)',
  },
];

export function ExperienceSection() {
  const isMobile = useIsMobile();
  
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

      <div className="relative z-10 max-w-[1800px] mx-auto px-2 md:px-8">
        <motion.div
          className="mt-0 py-24 px-6 md:px-16 lg:px-24 relative overflow-hidden"
          style={{
            background: 'radial-gradient(ellipse at 20% 50%, rgba(255, 0, 255, 0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(0, 255, 65, 0.08) 0%, transparent 60%)',
            borderTop: '1px solid rgba(255, 0, 255, 0.15)',
            borderBottom: '1px solid rgba(0, 255, 65, 0.15)',
          }}
          initial={isMobile ? false : { opacity: 0, y: 30 }}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 
            className="text-5xl md:text-8xl lg:text-[10rem] mb-4 md:mb-6 uppercase tracking-tight leading-none"
            style={{ 
              fontFamily: 'var(--font-accent)',
              color: 'var(--neon-magenta)',
              textShadow: `
                0 0 40px var(--neon-magenta),
                0 0 80px var(--neon-magenta),
                0 0 120px rgba(255, 0, 255, 0.4)
              `,
            }}>
            &gt; 20 YEARS
          </h2>
          <p 
            className="text-lg md:text-2xl uppercase tracking-wider"
            style={{ 
              fontFamily: 'var(--font-terminal)',
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: 'clamp(16px, 4vw, 28px)',
            }}>
            &gt; CODING // BOOTSTRAPPING // MIGRATING // ARCHITECTURING // IDEATING // EDUCATING
          </p>
        </motion.div>

        <div className="space-y-0">
          {timeline.map((item, index) => (
            <TimelinePanel key={item.era} {...item} index={index} isMobile={isMobile} />
          ))}
        </div>

        
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
  link,
  color,
  index,
  isMobile 
}: { 
  era: string;
  title: string;
  role: string;
  description: string;
  tech: string[];
  link?: { url: string; text: string };
  color: string;
  index: number;
  isMobile: boolean;
}) {
  return (
    <motion.div
      className="relative p-6 md:p-12 lg:p-20 overflow-hidden group"
      style={{ 
        backgroundColor: `${color}05`,
      }}
      initial={isMobile ? false : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isMobile ? undefined : { opacity: 1, x: 0 }}
      whileInView={isMobile ? undefined : { opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      whileHover={isMobile ? undefined : {
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
          className="text-base md:text-lg mb-8 leading-relaxed max-w-4xl uppercase tracking-wide [&_a]:underline [&_a]:underline-offset-2 [&_a]:hover:opacity-80"
          style={{
            fontFamily: 'var(--font-primary)',
            color: 'rgba(255, 255, 255, 0.8)',
            ['--link-color' as string]: color,
          }}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: description }}
        />
        
        <div className="flex flex-wrap gap-3 justify-start">
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
        
        {link && (
          <div className="mt-6">
            <a 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-lg uppercase tracking-wide hover:underline"
              style={{ 
                fontFamily: 'var(--font-accent)',
                color: color,
                textShadow: `0 0 10px ${color}`,
              }}
            >
              {link.text}
            </a>
          </div>
        )}
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
