import { useState, useEffect, useRef, useCallback } from 'react';

const DEFAULT_VOLUME = 0.1;

export function useBackgroundAudio() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  const [muted, setMuted] = useState(false);

  const toggleMute = useCallback(() => {
    setMuted((prev) => !prev);
  }, []);

  const changeVolume = useCallback((v: number) => {
    const clamped = Math.max(0, Math.min(1, v));
    setVolume(clamped);
    if (clamped > 0 && muted) setMuted(false);
  }, [muted]);

  // Sync volume/mute to the video element
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.volume = volume;
    el.muted = muted;
  }, [volume, muted]);

  // Global keyboard listener: "m" toggles mute
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'm' || e.key === 'M') {
        toggleMute();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [toggleMute]);

  return { videoRef, volume, muted, setVolume: changeVolume, toggleMute };
}
