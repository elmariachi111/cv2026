import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Twitter, Send, MessageSquare, ExternalLink } from 'lucide-react';

const socialLinks = [
  {
    name: 'EMAIL',
    icon: Mail,
    href: 'mailto:hello@example.com',
    color: 'var(--neon-cyan)',
    username: 'HELLO@EXAMPLE.COM',
  },
  {
    name: 'GITHUB',
    icon: Github,
    href: 'https://github.com',
    color: 'var(--neon-green)',
    username: '@YOURUSERNAME',
  },
  {
    name: 'LINKEDIN',
    icon: Linkedin,
    href: 'https://linkedin.com',
    color: 'var(--neon-blue)',
    username: '/IN/YOURPROFILE',
  },
  {
    name: 'TWITTER',
    icon: Twitter,
    href: 'https://twitter.com',
    color: 'var(--neon-magenta)',
    username: '@YOURHANDLE',
  },
  {
    name: 'TELEGRAM',
    icon: Send,
    href: 'https://t.me/username',
    color: 'var(--neon-yellow)',
    username: '@USERNAME',
  },
];

export function ContactSection() {
  return (
    <section className="relative py-32" id="contact">
      {/* Massive color blend */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 65, 0.15) 0%, transparent 60%)',
            mixBlendMode: 'screen',
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
            className="text-8xl md:text-[12rem] mb-6 uppercase tracking-tight leading-none"
            style={{ 
              fontFamily: 'var(--font-accent)',
              color: 'var(--neon-green)',
              textShadow: `
                0 0 40px var(--neon-green),
                0 0 80px var(--neon-green),
                0 0 120px rgba(0, 255, 65, 0.4)
              `,
            }}>
            LET'S BUILD
          </h2>
          <p 
            className="text-2xl uppercase tracking-wider max-w-3xl"
            style={{ 
              fontFamily: 'var(--font-terminal)',
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '28px',
            }}>
            &gt; WORKING ON SOMETHING THAT MATTERS? BUILDING TOOLS FOR CHANGE? LET'S TALK.
          </p>
        </motion.div>

        {/* Social links - full bleed panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mb-0">
          {socialLinks.map((link, index) => (
            <SocialPanel key={link.name} {...link} index={index} />
          ))}
        </div>

        {/* Collaboration panel */}
        <motion.div
          className="p-16 md:p-24 relative overflow-hidden"
          style={{ 
            backgroundColor: 'rgba(0, 255, 65, 0.05)',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Glow */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(0, 255, 65, 0.12) 0%, transparent 70%)',
              boxShadow: 'inset 0 0 100px rgba(0, 255, 65, 0.2)',
            }}
          />

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <MessageSquare 
              className="w-16 h-16 mx-auto mb-8" 
              style={{ 
                color: 'var(--neon-green)',
                filter: 'drop-shadow(0 0 20px var(--neon-green))'
              }} 
            />
            
            <h3 
              className="text-5xl md:text-6xl mb-8 uppercase tracking-tight"
              style={{ 
                fontFamily: 'var(--font-accent)',
                color: 'var(--neon-green)',
                textShadow: '0 0 40px var(--neon-green)',
              }}>
              OPEN TO COLLABORATE
            </h3>
            
            <p 
              className="text-xl md:text-2xl leading-relaxed uppercase tracking-wide"
              style={{ 
                fontFamily: 'var(--font-primary)',
                color: 'rgba(255, 255, 255, 0.85)',
              }}>
              INTERESTED IN PROJECTS INVOLVING DECENTRALIZED SYSTEMS, AI AGENTS, CLIMATE TECH, 
              OR TOOLS THAT EMPOWER COMMUNITIES. LET'S BUILD SOMETHING THAT LASTS.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialPanel({ 
  name, 
  icon: Icon, 
  href, 
  color, 
  username, 
  index 
}: { 
  name: string;
  icon: React.ElementType;
  href: string;
  color: string;
  username: string;
  index: number;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative p-12 md:p-16 overflow-hidden group block"
      style={{ 
        backgroundColor: `${color}05`,
      }}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        backgroundColor: `${color}10`,
      }}
    >
      {/* Intense hover glow */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at center, ${color}20 0%, transparent 70%)`,
          boxShadow: `inset 0 0 80px ${color}40`,
        }}
      />

      {/* Diagonal laser */}
      <div 
        className="absolute top-0 right-0 w-[2px] h-full origin-top opacity-30 group-hover:opacity-70 transition-opacity"
        style={{
          background: `linear-gradient(to bottom, transparent, ${color}, transparent)`,
          boxShadow: `0 0 15px ${color}`,
          transform: 'skewX(-15deg)',
        }}
      />

      <div className="relative z-10">
        <div className="mb-6" style={{ color, filter: `drop-shadow(0 0 20px ${color})` }}>
          <Icon className="w-12 h-12" strokeWidth={1.5} />
        </div>
        
        <div className="text-sm mb-2 opacity-60 uppercase tracking-widest" 
             style={{ fontFamily: 'var(--font-primary)' }}>
          {name}
        </div>
        
        <div 
          className="text-xl md:text-2xl mb-4 uppercase tracking-wide"
          style={{ 
            fontFamily: 'var(--font-terminal)', 
            color,
            textShadow: `0 0 20px ${color}80`,
            fontSize: '28px',
          }}>
          {username}
        </div>

        <motion.div
          className="flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity"
          style={{ color }}
        >
          <span className="text-sm uppercase tracking-wider" style={{ fontFamily: 'var(--font-primary)' }}>
            CONNECT
          </span>
          <ExternalLink className="w-4 h-4" />
        </motion.div>
      </div>
    </motion.a>
  );
}
