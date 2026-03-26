import { motion } from 'motion/react';
import { Mail, Github, Twitter, Send, MessageSquare, ExternalLink, Globe, Hash, Linkedin, Calendar } from 'lucide-react';
import { useIsMobile } from './ui/use-mobile';

const socialLinks = [
  {
    name: 'EMAIL',
    icon: Mail,
    href: 'mailto:elmariachi111+cv@proton.me?subject=Found Your CV on the Interwebs, lets chat',
    color: 'var(--neon-cyan)',
    username: 'ELMARIACHI111+CV@PROTON.ME',
  },
  {
    name: 'GITHUB',
    icon: Github,
    href: 'https://github.com/elmariachi111',
    color: 'var(--neon-green)',
    username: '@ELMARIACHI111',
  },
  {
    name: 'BLUESKY',
    icon: MessageSquare,
    href: 'https://bsky.app/profile/stadolf.bsky.social',
    color: 'var(--neon-blue)',
    username: '@STADOLF.BSKY.SOCIAL',
  },
  {
    name: 'FARCASTER',
    icon: Hash,
    href: 'https://warpcast.com/elmariachi.eth',
    color: 'var(--neon-magenta)',
    username: 'ELMARIACHI.ETH',
  },
  {
    name: 'TELEGRAM',
    icon: Send,
    href: 'https://t.me/stadolf',
    color: 'var(--neon-yellow)',
    username: '@STADOLF',
  },
  {
    name: 'ENS/ETH',
    icon: Globe,
    href: 'https://etherscan.io/address/stadolf.eth',
    color: 'var(--neon-cyan)',
    username: 'STADOLF.ETH',
  },
  {
    name: 'DISCORD',
    icon: MessageSquare,
    href: 'https://discord.com/users/elmariachi#8789',
    color: 'var(--neon-pink)',
    username: 'ELMARIACHI#8789',
  },
  {
    name: 'LINKEDIN',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/stadolf/',
    color: 'var(--neon-blue)',
    username: '@STADOLF',
  },
    {
    name: 'MEET ME',
    icon: Calendar,
    href: '  https://calendly.com/stadolf/chatwithstefan',
    color: 'var(--neon-yellow)',
     username: 'stadolf',
  },

];

export function ContactSection() {
  const isMobile = useIsMobile();
  
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
            className="text-5xl whitespace-nowrap md:text-8xl lg:text-[10rem] mb-4 md:mb-6 uppercase tracking-tight leading-none"
            style={{ 
              fontFamily: 'var(--font-accent)',
              color: 'var(--neon-green)',
              textShadow: `
                0 0 40px var(--neon-green),
                0 0 80px var(--neon-green),
                0 0 120px rgba(0, 255, 65, 0.4)
              `,
            }}>
            REACH OUT
          </h2>
          <p 
            className="text-lg md:text-2xl uppercase tracking-wider px-1"
            style={{ 
              fontFamily: 'var(--font-terminal)',
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: 'clamp(16px, 4vw, 28px)',
            }}>
            GRAB A COFFEE // HAVE A WALK // START A GOOGLE MEET ...
          </p>
        </motion.div>

        {/* Social links - full bleed panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 mb-0">
          {socialLinks.map((link, index) => (
            <SocialPanel key={link.name} {...link} index={index} isMobile={isMobile} />
          ))}
        </div>

        
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
  index,
  isMobile 
}: { 
  name: string;
  icon: React.ElementType;
  href: string;
  color: string;
  username: string;
  index: number;
  isMobile: boolean;
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative p-6 md:p-12 lg:p-16 overflow-hidden group block"
      style={{ 
        backgroundColor: `${color}05`,
      }}
      initial={isMobile ? false : { opacity: 0, scale: 0.95 }}
      animate={isMobile ? undefined : { opacity: 1, scale: 1 }}
      whileInView={isMobile ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={isMobile ? undefined : {
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

      <div className={`relative z-10 ${isMobile ? 'flex items-center gap-4' : ''}`}>
        <div
          className={isMobile ? 'shrink-0' : 'mb-6'}
          style={{ color, filter: `drop-shadow(0 0 20px ${color})` }}
        >
          <Icon className="w-12 h-12" strokeWidth={1.5} />
        </div>

        <div>
          <div className="text-sm  opacity-60 uppercase tracking-widest"
               style={{ fontFamily: 'var(--font-primary)' }}>
            {name}
          </div>

          <div
            className="text-xl md:text-2xl mb-2 uppercase tracking-normal"
            style={{
              fontFamily: 'var(--font-terminal)',
              color,
              textShadow: `0 0 20px ${color}80`,
              fontSize: isMobile ? '28px' : '28px',
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
      </div>
    </motion.a>
  );
}
