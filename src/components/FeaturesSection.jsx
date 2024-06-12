import { useState } from 'react';
import FeatureCard from '../assets/FeatureCard';
import { features } from '../data/Features';
import FeaturePopup from '../assets/FeaturePopup';

const FeaturesSection = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleCardClick = (feature) => {
    setSelectedFeature(feature);
  };

  const handleClosePopup = () => {
    setSelectedFeature(null);
  };

  return (
    <>
  <section id="feature-section" className="grid grid-cols-2 md:grid-cols-3 gap-[54px] place-content-start place-items-start pt-[96px]">
    <div className="w-full md:w-[350px] h-[266px] flex flex-col justify-center items-start space-y-[24px] md:col-span-1">
      <div>
        <h1 className="text-gray-100 text-[40px] font-bold font-['Roboto'] leading-[48px]">Featured Tools</h1>
      </div>
      <div className="space-y-[12px]">
        <h2 className="text-gray-200 text-[22px] font-medium font-['Roboto'] leading-7">Manage Your Finances with Ease</h2>
        <p className="text-gray-200 text-base font-normal font-['Roboto'] leading-normal tracking-wide">Discover a suite of features designed to help you take control of your finances.</p>
      </div>
    </div>
    {features.map((feature) => (
      <FeatureCard
        key={feature.id}
        img={feature.img}
        title={feature.title}
        desc={feature.desc}
        onClick={() => handleCardClick(feature)}
      />
    ))}
  </section>
  {selectedFeature && (
    <FeaturePopup
      feature={selectedFeature}
      onClose={handleClosePopup}
    />
  )}
</>

  );
};

export default FeaturesSection;