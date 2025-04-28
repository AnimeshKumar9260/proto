import ExploreOtherCard from "./ExploreOtherCard";

export default function ExploreOther() {
  const exploreMoreData = [
    {
      img: "/percentage11.svg",
      heading: "GST Calculator",
      desc: " Stay on top of all your business compliance deadlines with our interactive calendar.",
      toLink: "/",
    },
    {
      img: "/percentage11.svg",
      heading: "TDS Calculator",
      desc: " Stay on top of all your business compliance deadlines with our interactive calendar.",
      toLink: "/",
    },
    {
      img: "/percentage11.svg",
      heading: "SIP Calculator",
      desc: " Stay on top of all your business compliance deadlines with our interactive calendar.",
      toLink: "/",
    },
  ];

  return (
    <div className="max-w-[1210px] rounded-[20px] my-[4rem] mx-auto bg-[#D1E7FF] py-[3.75rem] px-[5.2rem]">
      <h3 className="font-[600] text-[2.5rem] mb-10">
        Explore Other Useful Tools
      </h3>
      <div className="flex justify-center items-center gap-[5.75rem]">
        {exploreMoreData.map((item, index) => (
          <ExploreOtherCard
            key={index}
            img={item.img}
            heading={item.heading}
            desc={item.desc}
            toLink={item.toLink}
          />
        ))}
      </div>
    </div>
  );
}
