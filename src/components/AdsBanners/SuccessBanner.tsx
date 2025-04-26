import "./components-styles.scss";

export default function SuccessBanner({
  text,
  subText,
}: {
  text: string;
  subText: string;
}) {
  return (
    <div className="SuccessBanner-root">
      <div>
        <h2 className="SuccessBanner-title">{text}</h2>
        <p className="SuccessBanner-desc">{subText}</p>
      </div>
      <button className="SuccessBanner-btn">Get Started &rarr;</button>
    </div>
  );
}
