import { TECH_LOGOS, TechLogo } from '../../../data/techLogos';

function LogoTile({ item }: { item: TechLogo }) {
  return (
    <div className="t-logo-tile" title={item.name}>
      <div className="t-logo-img-wrap">
        {item.logo ? (
          <img
            src={item.logo}
            alt={item.name}
            className={`t-logo-img${item.colored ? ' colored' : ''}`}
          />
        ) : (
          <span className="t-logo-abbr">
            {item.name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      <span className="t-logo-label">{item.name}</span>
    </div>
  );
}

const ROW_A = TECH_LOGOS.slice(0, Math.ceil(TECH_LOGOS.length / 2));
const ROW_B = TECH_LOGOS.slice(Math.ceil(TECH_LOGOS.length / 2));

export function TechLogoGrid() {
  return (
    <div className="t-logo-band">
      <div className="t-logo-track-wrap">
        <div className="t-logo-track t-logo-track--fwd">
          {[...ROW_A, ...ROW_A].map((item, i) => (
            <LogoTile key={`a-${item.id}-${i}`} item={item} />
          ))}
        </div>
      </div>
      <div className="t-logo-track-wrap">
        <div className="t-logo-track t-logo-track--rev">
          {[...ROW_B, ...ROW_B].map((item, i) => (
            <LogoTile key={`b-${item.id}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
