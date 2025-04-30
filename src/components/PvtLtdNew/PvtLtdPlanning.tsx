import PvtCard from "./PvtCard";

export default function PvtLtdPlanning() {
  const planData = [
    {
      type: "Starter",
      tag: "₹500 off",
      purpose: "Perfect for initiating company registration",
      off: "1499",
      current: "999",
      special: [
        "Unlock partner benefits",
        "Post company incorporation worth Rs 4 lakhs",
      ],
      get: [
        "Expert assisted process",
        "Your company name is filed in just 2 - 4 days",
        "DSC in just 4 - 7 days",
        "SPICe+ form filing in 14 days*",
        "Incorporation Certificate in 30 - 45 days",
        "Company PAN+TAN",
        "DIN for directors",
      ],
    },
    {
      type: "Standard",
      tag: "50% off",
      purpose: "Quick company registration in 7 to 14 days",
      off: "2999",
      current: "1,499",
      special: [
        "Get ₹1000 cashback*",
        "Unlock cashback benefits upon opening a current account with our partner banks. T&C",
      ],
      get: [
        "Expert assisted process",
        "Your company name is filed in just 1 - 2 days*",
        "DSC in just 3 - 4 days",
        "SPICe+ form filing in 5 - 7 days*",
        "Incorporation Certificate in 21 - 30 days",
        "Company PAN+TAN",
        "DIN for directors",
        "Digital welcome kit that includes a checklist of all post-incorporation compliances",
      ],
    },
    {
      type: "Professional",
      tag: "30% off",
      purpose: "Quick company registration + brand protection",
      off: "4999",
      current: "3,499",
      special: [
        "Get ₹1000 cashback*",
        "Unlock cashback benefits upon opening a current account with our partner banks. T&C",
      ],
      get: [
        "EMI option available.",
        "Expert assisted process",
        "Your company name is filed in just 1 - 2 days*",
        "DSC in just 3 - 4 days",
        "SPICe+ form filing in 5 - 7 days*",
        "Incorporation Certificate in 14 - 21 days",
        "Company PAN+TAN",
        "DIN for directors",
        "Digital welcome kit that includes a checklist of all post-incorporation compliances",
        "Free MSME registration",
        "Expedited Trademark application filing",
      ],
    },
  ];

  return (
    <div className="py-12 hidden md:block px-4 md:px-10">
      <h2 className="text-2xl font-[600] mb-12 text-[#333]">
        Choose Right plan for your business
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {planData.map((item, index) => (
          <PvtCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
}
