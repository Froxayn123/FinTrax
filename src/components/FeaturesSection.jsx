import FeatureCard from "../assets/FeatureCard";
import Polygon3 from "../assets/Polygon3";
import { features } from "../data/Features";

const FeaturesSection = () => {
  return (
    <>
      <div className="w-full grid grid-rows-2 grid-cols-3 gap-32 place-content-center place-items-center relative">
        <div className="w-[380px] h-[266px] flex flex-col justify-center items-start space-y-[24px]">
          <div>
            <h1 className="text-gray-100 text-[40px] font-bold font-['Roboto'] leading-[48px]">Featured Tools</h1>
          </div>
          <div className="space-y-[12px]">
            <h2 className="w-[360px] text-gray-200 text-[22px] font-medium font-['Roboto'] leading-7">Manage Your Finances with Ease</h2>
            <p className="w-[360px] text-gray-200 text-base font-normal font-['Roboto'] leading-normal tracking-wide">Discover a suite of features designed to help you take control of your finances.</p>
          </div>
        </div>
        {features.map((feature, i) => {
          return <FeatureCard key={i} img={feature.img} title={feature.title} desc={feature.desc} />;
        })}
        <Polygon3 />
      </div>
    </>
  );
};

export default FeaturesSection;
