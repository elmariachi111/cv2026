import { Volume2, Volume1, VolumeX } from 'lucide-react';

interface VolumeControlProps {
  volume: number;
  muted: boolean;
  onVolumeChange: (v: number) => void;
  onToggleMute: () => void;
  compact?: boolean;
}

export function VolumeControl({ volume, muted, onVolumeChange, onToggleMute, compact }: VolumeControlProps) {
  const Icon = muted || volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onToggleMute}
        className="p-1.5 rounded transition-opacity hover:opacity-100 opacity-70"
        style={{
          color: 'var(--neon-cyan)',
          filter: 'drop-shadow(0 0 6px var(--neon-cyan))',
        }}
        title={muted ? 'Unmute (M)' : 'Mute (M)'}
      >
        <Icon className="w-5 h-5" />
      </button>
      {!compact && (
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={muted ? 0 : volume}
          onChange={(e) => onVolumeChange(parseFloat(e.target.value))}
          className="w-16 h-1 appearance-none rounded-full cursor-pointer"
          style={{
            accentColor: 'var(--neon-cyan)',
            background: `linear-gradient(to right, var(--neon-cyan) 0%, var(--neon-cyan) ${(muted ? 0 : volume) * 100}%, rgba(255,255,255,0.2) ${(muted ? 0 : volume) * 100}%, rgba(255,255,255,0.2) 100%)`,
          }}
        />
      )}
    </div>
  );
}
