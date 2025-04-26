import "./components-styles.scss";
import Image from "next/image";

import NEasyElipse from "./NEasyElipse.svg";
import NEasyPill from "./NEasyPill";

export default function NEasySteps({
  text,
  subText,
}: {
  text: string;
  subText: string;
}) {
  const steps = [
    "Fill The Form",
    "Fill The Form",
    "Fill The Form",
    "Fill The Form",
  ];
  return (
    <div className="NEasySteps-root">
      <div className="NEasySteps-content">
        <div className="NEasySteps-header">
          <h2 className="NEasySteps-title">{text}</h2>
          <p className="NEasySteps-subtext">{subText}</p>
        </div>
        <div className="NEasySteps-list">
          {steps.map((step, index) => (
            <NEasyPill
              first={index === 0}
              last={index === steps.length - 1}
              key={index}
              num={index}
              text={step}
            />
          ))}
        </div>
      </div>
      <Image
        src={NEasyElipse}
        className="NEasySteps-elipse"
        width={380}
        height={80}
        alt="Easy Steps"
      />
    </div>
  );
}
