import NEasySteps from "@/components/AdsBanners/NEasySteps";
import SuccessBanner from "@/components/AdsBanners/SuccessBanner";
import TDSCalc from "@/components/Calc/TDSCalc";
import ExploreOther from "../components/ExploreOther/ExploreOther";

export default function Home() {
  return (
    <div>
      {/* <NEasySteps
        text="Private Limited company
registration in 4 easy step"
        subText="Private Limited company
registration in 4 easy step"
      />
      <SuccessBanner
        text="Your Business Success Starts Here!"
        subText="We're committed to your success. Register your sole proprietorship today 
at an affordable price and get personalized guidance tailored to your needs!
Fill out the form below to begin."
      /> */}
      <TDSCalc />
      <ExploreOther />
    </div>
  );
}
