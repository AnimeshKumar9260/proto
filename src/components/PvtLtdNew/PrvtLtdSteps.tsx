import Image from "next/image";
import clipBoard from "./clipboard.svg";
import complete from "./complete.svg";
import wallet from "./wallet.svg";
import upload from "./upload.svg";

export default function PrvtLtdSteps() {
  const steps = [
    {
      ico: clipBoard,
      title: "Fill out our quick online form",
    },
    {
      ico: upload,
      title: "Upload your documents securely",
    },
    {
      ico: wallet,
      title: "Pay registration fees",
    },
    {
      ico: complete,
      title: "Get your company registered hassle-free!",
    },
  ];

  return (
    <div className="py-12 px-4 md:px-10">
      <h2 className="text-2xl font-[600] mb-6 text-[#333]">
        Start Your Private Limited Company in 4 Simple Steps
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10">
        {steps.map((step, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-[1fr_5fr] p-4 rounded-lg gap-4 md:flex-row justify-center md:justify-start items-center border-[2px] border-slate-300"
          >
            <div className="bg-gradient-to-tr from-orange-300 to-orange-200 py-4 p-2 rounded-md">
              <Image
                src={step.ico}
                width={32}
                height={32}
                alt={step.title}
                className="mx-auto self-center"
              />
            </div>
            <p className="mt-2 self-center">{step.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
