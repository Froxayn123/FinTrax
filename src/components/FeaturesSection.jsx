import FeatureCard from "../assets/FeatureCard";
import { features } from "../data/Features";

const FeaturesSection = () => {
  return (
    <>
      <section className="grid grid-cols-3 gap-[54px] place-content-start place-items-start">
        <div className="w-[350px] h-[266px] flex flex-col justify-center items-start space-y-[24px]">
          <div>
            <h1 className="text-gray-100 text-[40px] font-bold font-['Roboto'] leading-[48px]">Featured Tools</h1>
          </div>
          <div className="space-y-[12px]">
            <h2 className="text-gray-200 text-[22px] font-medium font-['Roboto'] leading-7">Manage Your Finances with Ease</h2>
            <p className="text-gray-200 text-base font-normal font-['Roboto'] leading-normal tracking-wide">Discover a suite of features designed to help you take control of your finances.</p>
          </div>
        </div>
        {features.map((feature, i) => {
          return <FeatureCard key={i} img={feature.img} title={feature.title} desc={feature.desc} />;
        })}
      </section>
    </>
  );
};

export default FeaturesSection;
