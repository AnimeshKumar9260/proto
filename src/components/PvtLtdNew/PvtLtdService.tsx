import Image from "next/image";
import rarr from "./rarr.svg";

export default function PvtLtdService() {
  const points = [
    {
      heading: "LLP Registration",
      desc: "Register your LLP easily with us at an affordable cost",
    },
    {
      heading: "OPC Registration",
      desc: "Take the first step towards entrepreneurial success with OPC registration",
    },
    {
      heading: "GST Registration",
      desc: "Stay tax compliant and boost your business with GST registration",
    },
    {
      heading: "Trademark Registration",
      desc: "Get your brand registered as a Trademark with IPIndia.",
    },
    {
      heading: "Annual Compliance",
      desc: "Protect your company with our reliable annual compliance services at a budget-friendly cost.",
    },
    {
      heading: "FSSAI Registration",
      desc: "Secure your food business future with our comprehensive FSSAI registration solutions.",
    },
  ];

  return (
    <div className="py-12 px-4 md:px-10">
      <h2 className="text-2xl font-[600] mb-12 text-[#333]">
        Services we offer
      </h2>
      <div className="grid grid-cols-3 gap-12">
        {points.map((item, index) => (
          <div key={index} className="group cursor-pointer">
            <h4 className="font-[600] text-2xl duration-300 group-hover:border-b-orange-500 text-[#333] pb-4 mb-4 border-b-[2px] border-b-slate-300">
              {item.heading}
            </h4>
            <p>{item.desc}</p>
            <div className="flex items-center gap-2 mt-4">
              <p className="group-hover:text-orange-500 duration-300">
                More details
              </p>
              <Image
                src={rarr}
                alt="llp"
                width={20}
                height={20}
                className="group-hover:translate-x-2 duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
