import Navbar from "../components/NavbarHome";
import HeroSection from "../components/HeroSection";
import ElementsHero from "../assets/ElementsHero";
import Polygon1 from "../assets/Polygon1";
import Polygon2 from "../assets/Polygon2";
import Polygon3 from "../assets/Polygon3";
import Polygon4 from "../assets/Polygon4";
import Polygon5 from "../assets/Polygon5";
import Arrow from "../assets/Arrow";
import FeaturesSection from "../components/FeaturesSection";
import ArticlesSection from "../components/ArticlesSection";
import KeyFeaturesSection from "../components/KeyFeaturesSection";
import Footer from "../components/Footer";
import QuizForm from "../components/QuizForm";
import { useSelector } from "react-redux";
import { quizQuestions } from "../data/QuizQuestions";

const Home = () => {
  const counter = useSelector((state) => state.counterQuiz.counter);

  return (
    <>
      <Polygon1 />
      <Polygon2 />
      <Polygon3 />
      <Polygon4 />
      <ElementsHero />
      <header className="mx-[100px]">
        <Navbar />
      </header>
      <main className="mx-[100px] space-y-[96px]">
        <HeroSection />
        <FeaturesSection />
        <ArticlesSection />
        <KeyFeaturesSection />
      </main>
      <footer>
        <Footer />
      </footer>
      <Polygon5 />
      <Arrow />
      {counter >= quizQuestions.length ? "" : <QuizForm />}
    </>
  );
};

export default Home;
