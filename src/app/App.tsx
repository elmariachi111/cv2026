import { useEffect } from 'react';
import { CRTEffect, LaserBeams } from './components/CRTEffect';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ValuesSection } from './components/ValuesSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BackgroundVideo } from './components/BackgroundVideo';
import { useBackgroundAudio } from './hooks/useBackgroundAudio';

export default function App() {
  const { videoRef, volume, muted, setVolume, toggleMute } = useBackgroundAudio();

  useEffect(() => {
    document.body.style.backgroundColor = '#0a0a0f';
    document.body.style.fontFamily = 'var(--font-primary)';
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden"
         style={{
           backgroundColor: '#0a0a0f',
           color: 'rgba(255, 255, 255, 0.95)',
           maxWidth: '100vw',
         }}>
      {/* Background video */}
      <BackgroundVideo videoRef={videoRef} volume={volume} muted={muted} />

      {/* CRT monitor effect */}
      <CRTEffect />

      {/* Laser beams crossing the screen */}
      <LaserBeams />

      <Navigation
        volume={volume}
        muted={muted}
        onVolumeChange={setVolume}
        onToggleMute={toggleMute}
      />

      <div className="relative z-10">
        <HeroSection />
        <ValuesSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}
