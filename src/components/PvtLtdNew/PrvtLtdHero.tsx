import heroImg from "./hero3.jpg";
import logo from "./logo.webp";
import Image from "next/image";

export default function PrvtLtdHero() {
  return (
    <div
      className="w-full h-[80vh] md:h-[60vh] overflow-hidden bg-cover bg-top"
      style={{
        backgroundImage: `url(${heroImg.src})`,
      }}
    >
      <div className="px-4 py-8 md:px-14 md:py-10 bg-gradient-to-tr from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.2)] w-full h-full flex backdrop-blur-[3px] justify-center md:justify-end flex-col">
        <Image
          src={logo}
          alt="Company logo"
          width={70}
          height={70}
          className=" bg-black/40 rounded-2xl"
        />
        <h1 className="text-[2.5rem] font-[600] text-white leading-[2.5rem] my-4">
          Your Trusted Partner for <br />
          <span className="text-[#eee]">
            Private Limited Company Registration
          </span>
        </h1>
        <p className="text-xl text-slate-200 mb-4">
          Launch Your Dream Business with India's #1 Incorporation Service
          Provider
        </p>
        <button className="px-6 py-3 w-fit bg-orange-400 rounded font-[600] text-[#333]">
          Get free consultation
        </button>
      </div>
    </div>
  );
}

{
  /* <div className="absolute bottom-0 left-0 bg-gradient-to-t from-[--background] to-[rgba(0,0,0,0.1)] w-full h-full flex p-5 justify-end flex-col"></div>; */
}
