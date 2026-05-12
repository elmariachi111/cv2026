import { CV } from '../../../data/cv';
import { SecHead } from './SecHead';

const SKILL_HUES = ['green', 'cyan', 'magenta', 'amber', 'violet', 'green'] as const;

export function SkillsSection() {
  return (
    <section className="t-section" data-hue="green">
      <SecHead
        num="00"
        marker="//"
        title="skills.matrix"
        hint={<>{CV.skills.length} categories · <span className="acc">proficiency × years</span></>}
      />
      <div className="t-skills">
        <div className="t-skills-grid">
          {CV.skills.map((cat, i) => (
            <div
              className="t-skill-cat"
              key={cat.id}
              data-hue={SKILL_HUES[i]}
              data-id={cat.id}
            >
              <div className="t-cat-head">
                <span className="t-cat-accent" />
                <span className="t-cat-id">{cat.id}</span>
                <h3>{cat.title}</h3>
              </div>
              <div className="t-skill-list">
                {cat.items.map((it) => (
                  <div className="t-skill-row" key={it.name}>
                    <span className="name">{it.name}</span>
                    <span className="t-bar">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <span key={j} className={`t-seg${j < it.level ? ' on' : ''}`} />
                      ))}
                      <span className="t-yrs">{it.yrs}y</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
