import BestOfAll from "@/components/Home/BestOfAll/BestOfAll";
import Brands from "@/components/Home/Brands/Brands";
import Discover from "@/components/Home/Discover/Discover";
import GetStarted from "@/components/Home/GetStarted/GetStarted";
import Hero from "@/components/Home/Hero/Hero";
import Personalize from "@/components/Home/Personalize/Personalize";
import Proposal from "@/components/Home/Proposal/Proposal";
import Prospects from "@/components/Home/Prospects/Prospects";
import Ratings from "@/components/Home/Ratings/Ratings";
import Slider from "@/components/Home/Slider/Slider";
import Strategic from "@/components/Home/Strategic/Strategic";
import UseCases from "@/components/Home/UseCases/UseCases";

export default function Home() {
  return (
    <>
      <Hero />
      <Brands />
      <UseCases />
      <Discover />
      <Strategic />
      <Prospects />
      <Proposal />
      <BestOfAll />
      <Personalize />
      <Slider />
      <Ratings />
      <GetStarted />
    </>
  );
}
