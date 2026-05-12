import '../styles/terminal.css';
import { TopBar } from './components/terminal/TopBar';
import { HeroSection } from './components/terminal/HeroSection';
import { NowStrip } from './components/terminal/NowStrip';
import { SkillsSection } from './components/terminal/SkillsSection';
import { HistorySection } from './components/terminal/HistorySection';
import { QualificationsSection } from './components/terminal/QualificationsSection';
import { ContactSection } from './components/terminal/ContactSection';
import { TerminalFooter } from './components/terminal/TerminalFooter';

export default function App() {
  return (
    <div className="t-root">
      <div className="t-scanlines" />
      <div className="t-vignette" />
      <div className="t-cv">
        <TopBar />
        <HeroSection />
        <NowStrip />
        <SkillsSection />
        <HistorySection />
        <QualificationsSection />
        <ContactSection />
        <TerminalFooter />
      </div>
    </div>
  );
}
