import { SecHead } from './SecHead';
import { TechLogoGrid } from './TechLogoGrid';

export function SkillsSection() {
  return (
    <section className="t-section" data-hue="green">
      <SecHead
        num="00"
        marker="//"
        title="cat stadolf.stack"
        hint="a selection "
      />
      <TechLogoGrid />
    </section>
  );
}
