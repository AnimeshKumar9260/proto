import heroImg from "./hero5.jpg";
import logo from "./logo.webp";
import Image from "next/image";

export default function PrvtLtdHero() {
  return (
    <div className="w-full max-h-[90vh] relative overflow-hidden">
      <Image
        src={heroImg}
        alt="Hero Image"
        width={1440}
        height={1440}
        priority={true}
        className="object-cover object-center blur-[1px]"
      />
      <div className="absolute bottom-0 left-0 px-14 py-10 bg-gradient-to-tr from-[rgba(0,0,0,0.8)] to-[rgba(0,0,0,0.2)] w-full h-full flex p-5 justify-end flex-col">
        <Image
          src={logo}
          alt="Company logo"
          width={70}
          height={70}
          priority={true}
          className="object-cover object-center bg-black/50 rounded-2xl"
        />
        <h1 className="text-[2.5rem] font-[600] text-orange-400 leading-[2.5rem] my-4">
          Your Trusted Partner for <br />
          <span className="text-blue-400">
            Private Limited Company Registration
          </span>
        </h1>
        <p className="text-xl text-slate-200">
          Launch Your Dream Business with India's #1 Incorporation Service
          Provider
        </p>
      </div>
    </div>
  );
}

{
  /* <div className="absolute bottom-0 left-0 bg-gradient-to-t from-[--background] to-[rgba(0,0,0,0.1)] w-full h-full flex p-5 justify-end flex-col"></div>; */
}
