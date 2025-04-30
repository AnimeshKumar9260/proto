import Image from "next/image";
import checkmark from "./checkmark.svg";

export default function PvtCard({
  data,
}: {
  data: {
    type: string;
    tag: string;
    purpose: string;
    off: string;
    current: string;
    special: string[];
    get: string[];
  };
}) {
  return (
    <div className="border-[2px] border-slate-300 h-fit px-4 py-6 rounded-lg">
      <h3 className="text-2xl font-[600] mb-2">{data.type}</h3>
      <p className="text-lg mb-8">{data.purpose}</p>
      <div className="flex items-center gap-2 mb-6">
        <p className="relative w-fit">
          {data.off}
          <span className="h-[1px] w-full absolute bg-red-500 top-1/2 left-0 rotate-[-25deg]"></span>
        </p>
        <p className="bg-green-100 text-green-800 px-2 rounded-md">
          {data.tag}
        </p>
      </div>
      <h4 className="text-5xl font-bold mb-4">₹{data.current}</h4>
      <p className="text-xl font-[500] text-slate-600">
        + Govt. Fee (to be paid later)
      </p>
      <div className="py-3 px-2 mt-8 mb-6 border-t-[2px] border-t-slate-300 border-b-[2px] border-b-slate-300">
        <p className="font-bold">{data.special[0]}</p>
        <p className="font-semibold text-[#333]">{data.special[1]}</p>
      </div>
      <button className="mb-6 text-xl w-full font-[500] border-[2px] border-slate-300 p-3 rounded-lg">
        Get Started
      </button>
      <p className="font-bold text-xl mb-4">What you'll get</p>
      <div className="flex flex-col gap-3">
        {data.get.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <Image src={checkmark} alt="checkmark" width={20} height={20} />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
