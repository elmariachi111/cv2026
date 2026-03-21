import { useEffect } from 'react';

interface BackgroundVideoProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  volume: number;
  muted: boolean;
}

export function BackgroundVideo({ videoRef, volume, muted }: BackgroundVideoProps) {
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.volume = volume;
    el.muted = muted;

    // Try unmuted autoplay first
    el.play().catch(() => {
      // Browser blocked unmuted autoplay — start muted, then unmute on first interaction
      el.muted = true;
      el.play().catch(() => {});

      const unmute = () => {
        if (el.muted && !muted) {
          el.muted = false;
        }
        cleanup();
      };
      const events = ['click', 'keydown', 'scroll', 'touchstart'] as const;
      const cleanup = () => events.forEach((e) => document.removeEventListener(e, unmute));
      events.forEach((e) => document.addEventListener(e, unmute, { once: true }));
    });
  }, []);

  return (
    <video
      ref={videoRef}
      className="fixed inset-0 w-full h-full object-cover z-0"
      style={{ opacity: 0.15 }}
      src="/chase.mp4"
      loop
      playsInline
      autoPlay
    />
  );
}
