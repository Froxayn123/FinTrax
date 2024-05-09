import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ElementsHero from "../assets/ElementsHero";
import FeaturesSection from "../components/FeaturesSection";
import ArticlesSection from "../components/ArticlesSection";
import KeyFeaturesSection from "../components/KeyFeaturesSection";
import Wave from "../assets/Wave";

const LandingPage = () => {
  return (
    <>
      <ElementsHero />
      <div className="space-y-[400px]">
        <header>
          <div className="mx-[100px] ">
            <Navbar />
            <HeroSection />
          </div>
        </header>
        <main>
          <div className="mx-[100px]  space-y-[150px]">
            <FeaturesSection />
            <ArticlesSection />
            <KeyFeaturesSection />
          </div>
        </main>
        <footer>
          <Wave />
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
