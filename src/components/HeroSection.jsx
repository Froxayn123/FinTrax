import HeroIntro from "../assets/HeroIntro";
import Polygon1 from "../assets/Polygon1";
import Polygon2 from "../assets/Polygon2";

const HeroSection = () => {
  return (
    <>
      <div className="w-full flex justify-start items-center relative">
        <HeroIntro />
        <Polygon1 />
        <Polygon2 />
      </div>
    </>
  );
};

export default HeroSection;
