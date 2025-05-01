"use client";

import Image from "next/image";
import down from "./down.svg";
import { useState } from "react";

export default function FaqBox() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`${
        isOpen ? "border-[#FCA229]" : "border-slate-300"
      } border-[2px] rounded-lg px-4 py-6 h-fit`}
    >
      <div className="flex items-center justify-between">
        <h3
          className={`${
            isOpen ? "text-[#FCA229]" : "text-[#333]"
          } text-lg font-semibold`}
        >
          What is a Private Limited Company?
        </h3>
        <Image
          src={down}
          alt="down"
          width={20}
          height={20}
          className={`rotate-[${isOpen ? "180deg" : 0}]`}
        />
      </div>
      {isOpen ? (
        <p className="mt-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta natus
          veritatis praesentium doloremque alias quaerat quasi, in, asperiores
          sapiente commodi nesciunt necessitatibus, harum velit doloribus iusto
          recusandae animi rem deserunt?
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}
