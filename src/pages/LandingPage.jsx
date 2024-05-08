import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ElementsHero from "../assets/ElementsHero";
import Polygon1 from "../assets/Polygon1";
import Polygon2 from "../assets/Polygon2";

const LandingPage = () => {
  return (
    <>
      <Polygon1 />
      <Polygon2 />
      <ElementsHero />
      <header className="mx-[100px]">
        <div className="py-[32px]">
          <Navbar />
        </div>
        <HeroSection />
      </header>
      <main className="mx-[100px]"></main>
      <footer className="mx-[100px]"></footer>
    </>
  );
};

export default LandingPage;
