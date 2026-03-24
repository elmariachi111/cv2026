import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { VolumeControl } from './VolumeControl';
import { useIsMobile } from './ui/use-mobile';
import { NameMorpher } from './NameMorpher';

const navLinks = [
  { name: 'VALUES', href: '#values' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

interface NavigationProps {
  volume: number;
  muted: boolean;
  onVolumeChange: (v: number) => void;
  onToggleMute: () => void;
}

export function Navigation({ volume, muted, onVolumeChange, onToggleMute }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-2 md:px-8 py-6 backdrop-blur-md"
      style={{ 
        backgroundColor: 'rgba(10, 10, 15, 0.85)',
        boxShadow: '0 0 40px rgba(0, 255, 255, 0.1)',
      }}
      initial={isMobile ? false : { y: -100 }}
      animate={isMobile ? undefined : { y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <CoolCatLogo />
          <NameMorpher />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest hover:opacity-100 opacity-70 transition-all relative group"
              style={{
                fontFamily: 'var(--font-accent)',
                color: 'var(--neon-cyan)',
              }}
            >
              {link.name}
              <span
                className="absolute -bottom-1 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300"
                style={{
                  backgroundColor: 'var(--neon-cyan)',
                  boxShadow: '0 0 10px var(--neon-cyan)',
                }}
              />
            </a>
          ))}
          <a
            href="https://github.com/elmariachi111/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity"
            style={{ color: 'var(--neon-cyan)', filter: 'drop-shadow(0 0 8px var(--neon-cyan))' }}
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>
          <div className="ml-4 border-l border-white/10 pl-4">
            <VolumeControl
              volume={volume}
              muted={muted}
              onVolumeChange={onVolumeChange}
              onToggleMute={onToggleMute}
            />
          </div>
        </div>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <VolumeControl
            volume={volume}
            muted={muted}
            onVolumeChange={onVolumeChange}
            onToggleMute={onToggleMute}
            compact
          />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2"
            style={{
              color: 'var(--neon-cyan)',
              filter: 'drop-shadow(0 0 8px var(--neon-cyan))',
            }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden mt-6 p-6"
          style={{ 
            backgroundColor: 'rgba(0, 255, 255, 0.05)',
            boxShadow: 'inset 0 0 40px rgba(0, 255, 255, 0.1)',
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-4 text-center uppercase tracking-widest"
              style={{
                fontFamily: 'var(--font-accent)',
                color: 'var(--neon-cyan)',
                textShadow: '0 0 15px var(--neon-cyan)',
              }}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://github.com/elmariachi111/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-4 uppercase tracking-widest"
            style={{
              fontFamily: 'var(--font-accent)',
              color: 'var(--neon-cyan)',
              textShadow: '0 0 15px var(--neon-cyan)',
            }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
            </svg>
            GITHUB
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}

function polyPoints(sides: number, r: number, cx: number, cy: number): string {
  return Array.from({ length: sides }, (_, i) => {
    const angle = (2 * Math.PI * i) / sides - Math.PI / 2;
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  }).join(' ');
}

const layers = [
  { sides: 3, r: 8,  color: 'var(--neon-magenta)', duration: 3,  dir:  1 },
  { sides: 4, r: 11, color: 'var(--neon-cyan)',     duration: 6,  dir: -1 },
  { sides: 5, r: 14, color: 'var(--neon-yellow)',   duration: 10, dir:  1 },
  { sides: 6, r: 17, color: 'var(--neon-green)',    duration: 15, dir: -1 },
];

function CoolCatLogo() {
  return <img src="/coolcat_4506.png" className="w-8 h-8" />
}

function PolyLogo() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9" style={{ overflow: 'visible' }}>
      {layers.map(({ sides, r, color, duration, dir }) => (
        <motion.g
          key={sides}
          animate={{ rotate: dir * 360 }}
          transition={{ duration, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '20px 20px' }}
        >
          <polygon
            points={polyPoints(sides, r, 20, 20)}
            fill="none"
            stroke={color}
            strokeWidth="1.5"
            style={{ filter: `drop-shadow(0 0 4px ${color})` }}
          />
        </motion.g>
      ))}
    </svg>
  );
}
