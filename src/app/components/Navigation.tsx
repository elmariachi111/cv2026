import { motion } from 'motion/react';
import { Menu, X, Square } from 'lucide-react';
import { useState } from 'react';
import { VolumeControl } from './VolumeControl';

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

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 px-8 py-6 backdrop-blur-md"
      style={{ 
        backgroundColor: 'rgba(10, 10, 15, 0.85)',
        boxShadow: '0 0 40px rgba(0, 255, 255, 0.1)',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <div className="max-w-[1800px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="relative">
            <Square 
              className="w-8 h-8" 
              style={{ 
                color: 'var(--neon-cyan)',
                filter: 'drop-shadow(0 0 10px var(--neon-cyan))',
              }} 
            />
            <div 
              className="absolute inset-0 rotate-45"
              style={{
                border: '2px solid var(--neon-magenta)',
                filter: 'drop-shadow(0 0 8px var(--neon-magenta))',
              }}
            />
          </div>
          <span 
            className="text-xl uppercase tracking-widest"
            style={{ 
              fontFamily: 'var(--font-accent)',
              color: 'var(--neon-cyan)',
              textShadow: '0 0 15px var(--neon-cyan)',
            }}>
            PORTFOLIO
          </span>
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
        </motion.div>
      )}
    </motion.nav>
  );
}
