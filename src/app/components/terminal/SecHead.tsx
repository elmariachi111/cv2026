export function SecHead({
  marker,
  title,
  hint,
}: {
  marker: string;
  title: string;
  hint?: string;
}) {
  return (
    <div className="t-sec-head">
      <span className="marker">{marker}</span>
      <span className="title">{title}</span>
      {hint && <span className="hint">{hint}</span>}
    </div>
  );
}
