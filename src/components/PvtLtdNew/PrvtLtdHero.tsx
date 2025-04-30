"use client";

import heroImg from "./hero4.jpg";
import logo from "./logo.webp";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PrvtLtdHero() {
  const [numbers, setNumbers] = useState<number[]>([]);
  const [current, setCurrent] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumbers((prev) => [...prev, current]); // Append current number
      setCurrent((prev) => (prev % 7) + 1); // Cycle from 1 to 7
    }, 500);

    return () => clearInterval(interval); // Clean up on unmount
  }, [current]);

  const checkData = [
    "2 DIN and DSC for two Directors",
    "Drafting of MoA & AoA",
    "Registration fees and stamp duty",
    "Company Incorporation Certificate",
    "Company PAN and TAN",
  ];

  return (
    <div
      className="w-full max-h-[90vh] overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImg.src})`,
      }}
    >
      <div className="px-4 py-8 md:px-14 md:py-10 bg-gradient-to-r from-[rgba(0,0,0,0.9)] to-[rgba(0,0,0,0.2)] w-full h-full flex backdrop-blur-[2px] justify-center flex-col">
        <Image
          src={logo}
          alt="Company logo"
          width={70}
          height={70}
          className="bg-white/10 rounded-2xl"
        />
        <h1 className="text-2xl text-slate-200 leading-[2.5rem] mt-4 mb-8">
          Your Trusted Partner for <br />
          <span className="text-white font-[600] text-[2.5rem]">
            Private Limited Company Registration
          </span>
        </h1>
        <p className="text-xl text-slate-200 mb-8">
          Get your Private Limited Company Registration in just{" "}
          <span className="bg-orange-500 font-[600] px-2 py-1 rounded">
            14 days
          </span>{" "}
          at{" "}
          <span className="bg-orange-500 font-[600] px-2 py-1 rounded">
            Rs.1,999/-
          </span>{" "}
          only.
        </p>
        <div className="text-[white] grid grid-cols-2 max-w-[700px] gap-2 mb-8">
          {checkData.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="checkbox"
                readOnly
                checked={numbers.includes(index + 1)}
                className="accent-orange-500 h-6 w-6 pointer-events-none"
              />
              <p className="text-xl">{item}</p>
            </div>
          ))}
        </div>
        <div className="flex gap-8">
          <button className="px-6 py-3 w-fit bg-sky-800 hover:bg-blue-600 duration-300 rounded font-[600] text-[#eee]">
            Call Us
          </button>
          <button className="px-6 py-3 w-fit bg-green-800 hover:bg-green-600 duration-300 rounded font-[600] text-[#eee]">
            Whatsapp Us
          </button>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="absolute bottom-0 left-0 bg-gradient-to-t from-[--background] to-[rgba(0,0,0,0.1)] w-full h-full flex p-5 justify-end flex-col"></div>; */
}
