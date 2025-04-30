import Image from "next/image";
import star from "./star.svg";
import google from "./google.svg";
import pfp from "./pfp.jpg";
import quote from "./quote.svg";

export const PvtLtdReviews = () => {
  const reviews = [
    {
      img: pfp,
      name: "Muruganandan Palanisamy",
      desc: "Professional, Very Professional Service...Am glad to work with RegisterKaro and they made the company registration process hassle free. Appreciate their service. Go easy and approachable by anytime, will work with them near future again. Go easy and approachable by anytime, will work with them near future again.",
    },
    {
      img: pfp,
      name: "Muruganandan Palanisamy",
      desc: "Professional, Very Professional Service...Am glad to work with RegisterKaro and they made the company registration process hassle free. Appreciate their service. Go easy and approachable by anytime, will work with them near future again. Go easy and approachable by anytime, will work with them near future again.",
    },
    {
      img: pfp,
      name: "Muruganandan Palanisamy",
      desc: "Professional, Very Professional Service...Am glad to work with RegisterKaro and they made the company registration process hassle free. Appreciate their service. Go easy and approachable by anytime, will work with them near future again. Go easy and approachable by anytime, will work with them near future again.",
    },
  ];

  return (
    <div className="bg-[#F5F5F5] py-12 px-4 md:px-10">
      <h2 className="text-2xl font-[600] mb-2 text-[#333]">
        Hear What Our Customers Have To Say
      </h2>
      <div className="flex gap-4 mb-12">
        <Image src={star} height={30} width={30} alt="Star" />
        <Image src={star} height={30} width={30} alt="Star" />
        <Image src={star} height={30} width={30} alt="Star" />
        <Image src={star} height={30} width={30} alt="Star" />
        <Image src={star} height={30} width={30} alt="Star" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="p-4 rounded-lg hover:scale-105 hover:-translate-y-8 hover:rotate-[-4deg] hover:shadow-2xl duration-300"
          >
            <div className="flex justify-between">
              <Image
                src={google}
                height={30}
                width={30}
                alt="Google"
                className="mb-4"
              />{" "}
              <Image
                src={quote}
                height={30}
                width={30}
                alt="Google"
                className="mb-4 rotate-[180deg]"
              />
            </div>
            <p className="mb-4">{review.desc}</p>
            <div className="flex items-center gap-4">
              <Image
                src={review.img}
                className="rounded-full h-10 w-10 object-cover"
                alt="PFP"
              />
              <p className="font-[600]">{review.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
