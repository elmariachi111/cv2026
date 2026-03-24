import { Terminal } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-16 px-2 md:px-8 overflow-hidden" 
            style={{ 
              backgroundColor: 'rgba(0, 255, 255, 0.02)',
            }}>
      {/* Top laser line */}
      <div 
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{
          background: 'linear-gradient(to right, transparent, var(--neon-cyan), transparent)',
          boxShadow: '0 0 20px var(--neon-cyan)',
        }}
      />

      <div className="max-w-[1800px] mx-auto text-center">
        <Terminal 
          className="w-10 h-10 mx-auto mb-6" 
          style={{ 
            color: 'var(--neon-cyan)',
            filter: 'drop-shadow(0 0 15px var(--neon-cyan))'
          }} 
        />
        
       
        <p 
          className="text-xs mb-4 uppercase tracking-widest opacity-50"
          style={{ fontFamily: 'var(--font-terminal)', fontSize: '14px' }}
        >
          TOOLS USED: CLAUDE • RUNWAY ML • FIGMA
        </p>
        
        <p 
          className="text-xs uppercase tracking-widest opacity-40 mb-6"
          style={{ fontFamily: 'var(--font-accent)' }}
        >
          © 2026 • THE STRUGGLE IS REAL
        </p>
        
        {/* Terminal-style ASCII art */}
        <div 
          className="text-xs opacity-20 font-mono tracking-wider"
          style={{ 
            fontFamily: 'var(--font-terminal)',
            color: 'var(--neon-green)',
            fontSize: '14px',
          }}
        >
          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
          <br />
          &gt; SYSTEM.SHUTDOWN_COMPLETE
          <br />
          ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
        </div>
      </div>
    </footer>
  );
}
