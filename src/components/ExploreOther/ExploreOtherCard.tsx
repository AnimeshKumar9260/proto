export default function ExploreOtherCard({
  img,
  heading,
  desc,
  toLink,
}: {
  img: string;
  heading: string;
  desc: string;
  toLink: string;
}) {
  return (
    <div className="bg-white py-5 px-4 rounded-2xl">
      <div className="bg-linear-to-tr rounded w-fit p-2 mb-5 from-[#F38910] to-[#FFA229]">
        <img src={img} alt="icon" />
      </div>
      <h4 className="font-[600] text-[1.25rem] mb-2 text-[#201F1F]">
        {heading}
      </h4>
      <p className="font-[500] text-[#636060] mb-10">{desc}</p>
      <a href={toLink}>
        <button className="font-[600] cursor-pointer text-[#C25C14] py-3 w-full bg-[#FDE1A3] rounded-[30px]">
          Calculate &#8250;
        </button>
      </a>
    </div>
  );
}
