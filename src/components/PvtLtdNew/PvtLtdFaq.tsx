import FaqBox from "./FaqBox";

export default function PvtLtdFaq() {
  return (
    <div className="py-12 px-4 md:px-10">
      <h2 className="text-2xl font-[600] mb-12 text-[#333]">
        Frequently Asked Questions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FaqBox />
        <FaqBox />
        <FaqBox />
        <FaqBox />
        <FaqBox />
        <FaqBox />
      </div>
    </div>
  );
}
