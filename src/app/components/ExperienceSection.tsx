import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';
import { useIsMobile } from './ui/use-mobile';

const timeline = [
  {
    era: '2020S',
    title: 'DECENTRALIZATION FOCUS',
    role: '6 YEARS BUILDING ON-CHAIN SYSTEMS',
    description: 'DEEP EXPERIENCE IN BLOCKCHAIN AND SMART CONTRACT DEVELOPMENT. ETHONLINE 21 FINALIST (SPLICE). DECENTRALIZED EHRS. DID/VC/VP BASED CERTIFICATE VALIDATORS. LED WEB3 DEVELOPMENT AT MOLECULE AG, BUILDING IP TOKENIZATION INFRASTRUCTURE (IPNFTS), BONDING CURVE MARKETS (CATALYST), AND DECENTRALIZED CROWDFUNDING PROTOCOLS. ',
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
        {/* Current Focus - Full bleed panel */}
        <motion.div
          className="mt-0 p-6 md:p-16 lg:p-24 relative overflow-hidden"
          style={{ 
            backgroundColor: 'rgba(0, 255, 255, 0.05)',
          }}
          initial={isMobile ? false : { opacity: 0, y: 30 }}
          animate={isMobile ? undefined : { opacity: 1, y: 0 }}
          whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >


          <div className="relative z-10">
            <Terminal 
              className="w-16 h-16 mb-8" 
              style={{ 
                color: 'var(--neon-cyan)',
                filter: 'drop-shadow(0 0 20px var(--neon-cyan))'
              }} 
            />
            
            <h3 
              className="text-4xl md:text-7xl lg:text-8xl mb-8 md:mb-12 uppercase tracking-tight leading-tight"
              style={{ 
                fontFamily: 'var(--font-accent)',
                color: 'var(--neon-cyan)',
                textShadow: `
                  0 0 40px var(--neon-cyan),
                  0 0 80px var(--neon-cyan),
                  0 0 120px rgba(0, 255, 255, 0.4)
                `,
              }}>
              WHAT I'M DOING NOW
            </h3>
            
            {/* Welshare Section */}
            <div className="mb-16">
              <h4 
                className="text-3xl md:text-4xl mb-6 uppercase tracking-tight"
                style={{ 
                  fontFamily: 'var(--font-accent)',
                  color: 'var(--neon-green)',
                  textShadow: '0 0 20px var(--neon-green)',
                }}>
                MD / BUILDER @ WELSHARE.HEALTH
              </h4>
              <p 
                className="text-lg md:text-xl mb-6 leading-relaxed max-w-5xl"
                style={{ 
                  fontFamily: 'var(--font-primary)',
                  color: 'rgba(255, 255, 255, 0.85)',
                }}>
                RESPONSIBLE FOR ALL DEVELOPMENT AT WELSHARE, BUILDING THE HEALTH PROFILE MATCHING PROTOCOL (HPMP) — 
                IT CONNECTS AGENTIC SCIENTISTS WITH PATIENTS FOR CLINICAL TRIALS. 
                PATIENT HEALTH DATA IS NEVER DISCLOSED. FILTERING, QUERYING, AND MATCHING HAPPENS INSIDE 
                TRUSTED EXECUTION ENVIRONMENTS (TEEs) AND A PRIVATE COMPUTE TIER (POWERED BY NILLION).
              </p>
              <div className="flex flex-wrap gap-3">
                {['TYPESCRIPT', 'REACT', 'FHIR', 'NILLION', 'TEE', 'MCP', 'CRYPTOGRAPHY', 'PRIVACY TECH'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 uppercase tracking-wider text-sm"
                    style={{
                      fontFamily: 'var(--font-accent)',
                      color: 'var(--neon-green)',
                      backgroundColor: 'rgba(0, 255, 65, 0.08)',
                      boxShadow: '0 0 15px rgba(0, 255, 65, 0.3), inset 0 0 15px rgba(0, 255, 65, 0.1)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6">
                <a 
                  href="https://welshare.health" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg uppercase tracking-wide hover:underline"
                  style={{ 
                    fontFamily: 'var(--font-accent)',
                    color: 'var(--neon-green)',
                    textShadow: '0 0 10px var(--neon-green)',
                  }}
                >
                  → WELSHARE.HEALTH
                </a>
              </div>
            </div>

            {/* Infrastructure Section */}
            <div>
              <h4 
                className="text-3xl md:text-4xl mb-6 uppercase tracking-tight"
                style={{ 
                  fontFamily: 'var(--font-accent)',
                  color: 'var(--neon-magenta)',
                  textShadow: '0 0 20px var(--neon-magenta)',
                }}>
                AGENTIC AI INFRASTRUCTURE AT SCALE
              </h4>
              <p 
                className="text-lg md:text-xl mb-6 leading-relaxed max-w-5xl"
                style={{ 
                  fontFamily: 'var(--font-primary)',
                  color: 'rgba(255, 255, 255, 0.85)',
                }}>
                I PROVISION, SHAPE AND OPERATE INFRASTRUCTURE TO RUN OPENCLAW AGENTS AT SCALE ON AFFORDABLE VPS HOSTS. 
                LEVERAGING AWS, TERRAFORM, AND OPENCLAW BEST PRACTICES TO BUILD RESILIENT, COST-EFFECTIVE AGENT 
                DEPLOYMENT PIPELINES. INFRASTRUCTURE AS CODE FOR AI AGENT FLEETS.
              </p>
              <div className="flex flex-wrap gap-3">
                {['AWS', 'TERRAFORM', 'OPENCLAW', 'DOCKER', 'VPS', 'DEVOPS', 'AGENT ORCHESTRATION', 'CI/CD'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 uppercase tracking-wider text-sm"
                    style={{
                      fontFamily: 'var(--font-accent)',
                      color: 'var(--neon-magenta)',
                      backgroundColor: 'rgba(255, 0, 255, 0.08)',
                      boxShadow: '0 0 15px rgba(255, 0, 255, 0.3), inset 0 0 15px rgba(255, 0, 255, 0.1)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 gap-12 flex flex-row">
                <a 
                  href="https://beach.science" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg uppercase tracking-wide hover:underline"
                  style={{ 
                    fontFamily: 'var(--font-accent)',
                    color: 'var(--neon-magenta)',
                    textShadow: '0 0 10px var(--neon-magenta)',
                  }}
                >
                  → BEACH.SCIENCE
                </a>
                <a 
                  href="https://molecule.to" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-lg uppercase tracking-wide hover:underline"
                  style={{ 
                    fontFamily: 'var(--font-accent)',
                    color: 'var(--neon-magenta)',
                    textShadow: '0 0 10px var(--neon-magenta)',
                  }}
                >
                  → MOLECULE.TO
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-48 mb-24"
          initial={isMobile === false ? { opacity: 0, y: 30 } : {}}
          whileInView={isMobile === false ? { opacity: 1, y: 0 } : {}}
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
          className="text-base md:text-lg mb-8 leading-relaxed max-w-4xl uppercase tracking-wide"
          style={{ 
            fontFamily: 'var(--font-primary)',
            color: 'rgba(255, 255, 255, 0.8)',
          }}>
          {description}
        </p>
        
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
