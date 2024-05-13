import HeroIntro from "../assets/HeroIntro";
import Polygon1 from "../assets/Polygon1";
import Polygon2 from "../assets/Polygon2";

const HeroSection = () => {
  return (
    <>
      <section className="mt-[140px]">
        <HeroIntro />
        <Polygon1 />
        <Polygon2 />
      </section>
    </>
  );
};

export default HeroSection;
