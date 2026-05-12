export function SecHead({
  num,
  marker,
  title,
  hint,
}: {
  num?: string;
  marker: string;
  title: string;
  hint?: React.ReactNode;
}) {
  return (
    <div className="t-sec-head">
      {num && <span className="num">[{num}]</span>}
      <span className="marker">{marker}</span>
      <span className="title">{title}</span>
      {hint && <span className="hint">{hint}</span>}
    </div>
  );
}
