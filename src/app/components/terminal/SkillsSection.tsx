import { SecHead } from './SecHead';
import { TechLogoGrid } from './TechLogoGrid';

export function SkillsSection() {
  return (
    <section className="t-section" data-hue="green">
      <SecHead
        num="00"
        marker="//"
        title="cat stack"
        hint="selected tools of my stack "
      />
      <TechLogoGrid />
    </section>
  );
}
