import { Benefits } from "./Benefits";
import PvtLtdService from "./PvtLtdService";
import Partners from "./Partners";
import PrvtLtdHero from "./PrvtLtdHero";
import PrvtLtdSteps from "./PrvtLtdSteps";
import { PvtLtdReviews } from "./PvtLtdReviews";

export default function PrivateLimitedCompanyRegistration11() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <PrvtLtdHero />
      <PrvtLtdSteps />
      <Benefits />
      <PvtLtdService />
      <Partners />
      <PvtLtdReviews />
    </div>
  );
}
