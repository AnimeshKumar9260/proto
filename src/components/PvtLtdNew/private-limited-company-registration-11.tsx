import Benefits from "./Benefits";
import PvtLtdService from "./PvtLtdService";
import Partners from "./Partners";
import PrvtLtdHero from "./PrvtLtdHero";
import PrvtLtdSteps from "./PrvtLtdSteps";
import { PvtLtdReviews } from "./PvtLtdReviews";
import PvtLtdPlanning from "./PvtLtdPlanning";
import PvtLtdFaq from "./PvtLtdFaq";
import PvtLtdPlanningMob from "./PvtLtdPlanningMob";
import BenefitsMob from "./BenefitsMob";

export default function PrivateLimitedCompanyRegistration11() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <PrvtLtdHero />
      <PrvtLtdSteps />
      <Benefits />
      <BenefitsMob />
      <PvtLtdService />
      <Partners />
      <PvtLtdReviews />
      <PvtLtdPlanning />
      <PvtLtdPlanningMob />
      <PvtLtdFaq />
    </div>
  );
}
