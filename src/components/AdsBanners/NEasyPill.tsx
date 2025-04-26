import './components-styles.scss';

export default function NEasyPill({
  num,
  text,
  first,
  last,
}: {
  num: number;
  text: string;
  first: boolean;
  last: boolean;
}) {
  return (
    <div className={`NEasyPill-outer${first ? ' first' : ''}${last ? ' last' : ''}${!first && !last ? ' middle' : ''}`}>
      <div className="NEasyPill-inner">
        <span className="NEasyPill-num">{num + 1}</span>{" "}
        <p className="NEasyPill-text">{text}</p>
      </div>
      <div className="NEasyPill-connector"></div>
    </div>
  );
}
