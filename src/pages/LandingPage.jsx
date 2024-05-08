import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ElementsHero from "../assets/ElementsHero";

const LandingPage = () => {
  return (
    <>
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
