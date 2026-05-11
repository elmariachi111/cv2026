import { CV } from '../../../data/cv';
import { SecHead } from './SecHead';

export function SkillsSection() {
  return (
    <section className="t-section">
      <SecHead marker="//" title="skills.matrix" hint="proficiency × years" />
      <div className="t-skills">
        <div className="t-skills-grid">
          {CV.skills.map((cat) => (
            <div className="t-skill-cat" key={cat.id}>
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
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={`t-seg${i < it.level ? ' on' : ''}`} />
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
