"use client";

import Image from "next/image";
import { StaticImageData } from "next/image";
import paper from "./paper.png";
import vault from "./vault.svg";
import interest from "./interest.svg";
import attract from "./attract.svg";
import sell from "./sell.svg";
import handshake from "./handshake.svg";
import stock from "./stock.svg";
import approved from "./approved.svg";
import { useState } from "react";
import rarr from "./rarr.svg";

export default function Benefits() {
  interface BenefitCollection {
    img: string | StaticImageData;
    heading: string;
    desc: string;
    longTxt?: string;
    swapped?: boolean;
  }

  const benefitsList: BenefitCollection[] = [
    {
      img: vault,
      heading: "Limited Liability Protection",
      desc: "Safeguard your personal assets—only your business investment is at risk, not your savings or property.",
      swapped: true,
      longTxt:
        "Many times startups need to borrow money and take things on credit. In case of normal Partnerships, Partners personal savings and property would be at risk incase business is not able to repay its loans. In a private limited company, only investment in business is lost, personal assets of the directors are safe.",
    },
    {
      img: paper,
      heading: "panel",
      desc: "panel",
    },
    {
      img: stock,
      heading: "Enhanced Credibility",
      desc: "Build trust with clients, vendors, and government agencies. Private Limited Companies are the preferred structure for serious businesses.",
      swapped: false,
      longTxt:
        "Private limited company is popular and well known business structure. Corporate Customers, Vendors and Govt. Agencies prefer to deal with Private Limited Company instead of proprietorship or normal partnerships.",
    },
    {
      img: interest,
      heading: "Easier Fundraising",
      desc: "Attract investors, venture capitalists, and secure bank loans with ease. Private Limited Companies have more funding options than LLPs or OPCs.",
      swapped: true,
      longTxt:
        "Private limited company enjoys wide options to raise funds through bank loans, Angel Investors, Venture Capitalists, in comparison to LLPs and OPCs. This wide ranges of options amke it more profitable to run a private limited company",
    },
    {
      img: attract,
      heading: "Attract & Retain Top Talent",
      desc: "Offer stock options and corporate designations to motivate and retain your team.",
      swapped: false,
      longTxt:
        "For startups putting together a team and keeping them for long time is a challenge, due to confidence attached to private limited structure, it is easy to hire people as well as motivate them with corporate designations and stock options. More offerings make it more attractive",
    },
    {
      img: sell,
      heading: "Easy Exit & Transfer",
      desc: "Sell your business or transfer ownership effortlessly with minimal paperwork.",
      swapped: true,
      longTxt:
        "Private Ltd. is easy to sell, very less documentation and cost is involved in selling a Private limited company . Therefore desolution of a private limited company is easier and cheaper as compared to other forms of company in the field . And so it is easy to deal with.",
    },
    {
      img: handshake,
      heading: "Favorite Business structure for Investors",
      desc: "Investors prefer private limited companies due to their structured management, ease of exit, and stable decision-making with fewer fluctuations.",
      swapped: false,
      longTxt:
        "Favorite Business structure for Investorscard-itemInvestors love to invest in Private Limited companies as it is well structured and less strings attached. Most important it is very easy to exit from a private limited company. Morover decision making authoriity is with limited people which reasults into less flutuactions.",
    },
  ];

  const [curIndex, setCurIndex] = useState(0);

  return (
    <div className="bg-[#F5F5F5] hidden md:block py-12 px-4 md:px-10">
      <h2 className="text-2xl font-[600] mb-12 text-[#333]">
        Why Register a Private Limited Company?
      </h2>
      <div className="grid grid-cols-3 gap-8">
        {benefitsList.map((item, index) =>
          item.heading === "panel" ? (
            <div
              key={item.desc}
              className="row-span-3 relative place-self-center self-center"
            >
              <Image
                src={item.img}
                height={1000}
                width={1000}
                alt="Paper"
                className="drop-shadow-2xl"
              />
              <Image
                src={approved}
                height={200}
                width={200}
                alt="stamp"
                className="absolute bottom-[7%] opacity-50 right-[4%] rotate-[25deg]"
              />
              <div
                style={{ fontFamily: '"Courier Prime", system-ui' }}
                className="absolute w-full px-16 py-20 top-0 left-1/2 -translate-x-1/2"
              >
                <h3 className="font-[700] text-xl mb-4">
                  {benefitsList[curIndex].heading}
                </h3>
                <p>{benefitsList[curIndex].longTxt}</p>
              </div>
            </div>
          ) : (
            <div
              onClick={() => setCurIndex(index)}
              key={index}
              className={`${
                item.swapped ? "grid-cols-[5fr_1fr]" : "grid-cols-[1fr_5fr]"
              } ${
                curIndex === index ? "bg-white" : ""
              } place-self-center gap-4 grid self-center p-5 rounded-lg cursor-pointer`}
            >
              <Image
                src={item.img}
                height={50}
                width={50}
                alt="Interest"
                className={`${
                  item.swapped ? "order-1" : "order-0"
                } drop-shadow-2xl mb-2 place-self-center self-center`}
              />
              <div
                className={`${
                  item.swapped ? "order-0" : "order-1"
                } place-self-center self-center`}
              >
                <h4 className="font-[600] text-[#333]">{item.heading}</h4>
                <p className="text-slate-500">{item.desc}</p>
                <div className="flex gap-2 mt-4 group hover:underline duration-300 underline-offset-4 decoration-[#FCA229]">
                  <p className="text-[#FCA229]">Read More</p>
                  <Image
                    src={rarr}
                    height={15}
                    width={15}
                    alt="rarr"
                    className="group-hover:translate-x-1 transition"
                  />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
