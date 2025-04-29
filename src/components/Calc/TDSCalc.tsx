"use client";

import { useState } from "react";
import Breadcrumbs from "./Breadcrumbs";

export default function TDSCalc() {
  const breadcrumbsItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Calc",
      href: "/calc",
    },
    {
      label: "TDSCalc",
    },
  ];

  const [radio, setRadio] = useState(0);
  const [amount, setAmount] = useState("");

  // Helper to format number as rupee with commas
  function formatRupee(num: number) {
    return `
${num.toLocaleString("en-IN")}`;
  }

  return (
    <div className="py-[3.75rem] px-24 bg-[#F4F9FF]">
      <div className="max-w-[1210px] mx-auto">
        <Breadcrumbs items={breadcrumbsItems} />
        <h1 className="font-[600] text-[2.5rem] mb-1 text-[#1E446C]">
          TDS Calculator
        </h1>
        <p className="font-[500] text-[#242424] mb-10">
          The TDS calculator estimates your tax exemption on housing allowance,
          helping you manage finances efficiently.
        </p>
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left grid */}
          <div>
            {/* Radio Group */}
            <div className="flex gap-[2.37rem] mb-[1.87rem]">
              <div
                className={`${
                  radio === 0 ? "bg-[#FFF8E8]" : ""
                } flex items-center justify-center gap-3 rounded-2xl px-2 py-1`}
              >
                <input
                  type="radio"
                  name="calc-type"
                  className="accent-[#E58C1F] h-7 w-7"
                  onChange={() => setRadio(0)}
                  checked={radio === 0}
                />
                <p>Individual</p>
              </div>
              <div
                className={`${
                  radio === 1 ? "bg-[#FFF8E8]" : ""
                } flex items-center justify-center gap-3 rounded-2xl px-2 py-1`}
              >
                <input
                  type="radio"
                  name="calc-type"
                  className="accent-[#E58C1F] h-7 w-7"
                  onChange={() => setRadio(1)}
                  checked={radio === 1}
                />
                <p>Other</p>
              </div>
            </div>
            {/* Field - 1 */}
            <div className="flex flex-col mb-10">
              <label htmlFor="pan" className="mb-2 font-[600] text-[#616161]">
                Is PAN available?
              </label>
              <select
                name="pan"
                className="font-[500] text-[1.25rem] py-2 px-3 bg-white rounded-xl border-[1px] border-[#AEC0CA]"
              >
                <option value="">Yes</option>
                <option value="">No</option>
              </select>
            </div>
            {/* Field - 2 */}
            <div className="flex flex-col mb-10">
              <label htmlFor="pan" className="mb-2 font-[600] text-[#616161]">
                Type of Payment
              </label>
              <select
                name="pan"
                className="font-[500] text-[1.25rem] py-2 px-3 bg-white rounded-xl border-[1px] border-[#AEC0CA]"
              >
                <option value="">
                  Section 192A - Payment of accumulated PF bala...
                </option>
                <option value="">No</option>
              </select>
            </div>
            {/* Field - 3 */}
            <div className="flex flex-col mb-10">
              <label htmlFor="pan" className="mb-2 font-[600] text-[#616161]">
                Payment Amount
              </label>
              <input
                type="number"
                name="pan"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="font-[500] text-2xl py-2 px-3 bg-white rounded-xl border-[1px] border-[#AEC0CA]"
              />
            </div>
          </div>
          {/* Right grid */}
          <div className="flex justify-center items-center">
            <div className="border-[1px] bg-[#FFFFFF]/40 border-[#FDB34D] rounded-2xl flex justify-center items-center flex-col px-[6.25rem] py-6">
              <p className="font-[600] text-[#616161] text-[1.75rem]">
                Total TDS
              </p>
              <p className="text-[#1F3E6C] text-[2.68rem] font-[600]">
                <span>₹</span> {formatRupee(Number(amount) || 0)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
