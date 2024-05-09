import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ElementsHero from "../assets/ElementsHero";
import FeaturesSection from "../components/FeaturesSection";
import ArticlesSection from "../components/ArticlesSection";

const LandingPage = () => {
  return (
    <>
      <ElementsHero />
      <div className="mx-[100px] space-y-[96px]">
        <header>
          <Navbar />
          <HeroSection />
        </header>
        <main>
          <div className="space-y-[96px]">
            <FeaturesSection />
            <ArticlesSection />
          </div>
        </main>
        <footer></footer>
      </div>
    </>
  );
};

export default LandingPage;
