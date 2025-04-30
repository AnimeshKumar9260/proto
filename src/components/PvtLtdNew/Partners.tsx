import Image from "next/image";
import razorpay from "./razorpay.webp";
import wework from "./wework.webp";
import zoho from "./zoho.webp";
import greythr from "./greythr.webp";
import freshworks from "./freshworks.webp";
import adobe from "./adobe.webp";

export default function Partners() {
  const logos = [razorpay, wework, zoho, greythr, freshworks, adobe];

  return (
    <div className="py-12 px-4 md:px-10">
      <h2 className="text-2xl font-[600] mb-12 text-[#333]">
        RegisterKaro is trusted by
      </h2>
      <div className="flex flex-wrap justify-between gap-4">
        {logos.map((item, index) => (
          <Image
            key={index}
            className="aspect-[3/2] hover:scale-[1.1] duration-300 object-contain mix-blend-color-burn w-[6rem] md:w-[9rem]"
            src={item}
            alt="partners"
          />
        ))}
      </div>
    </div>
  );
}
