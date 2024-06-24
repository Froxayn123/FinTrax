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
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
import NavbarHome from "../components/NavbarHome";
import anime from "animejs";

const Home = () => {
  const counter = useSelector((state) => state.counterQuiz.counter);

  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      await axios.get(`${import.meta.env.VITE_APP_BASE_API}/token`, {}, { withCredentials: true });
    } catch (error) {
      console.error("Failed to fetch access token:", error.response ? error.response.data : error.message);
      navigate("/login");
    }
  };

  return (
    <>
      <Polygon1 />
      <Polygon2 />
      <Polygon3 />
      <Polygon4 />
      <ElementsHero />
      <header className="mx-[100px]">
        <NavbarHome />
      </header>
      <main className="mx-[100px]">
        <HeroSection
          func={() => {
            anime({
              targets: document.getElementById("QuizForm"),
              translateX: "-50%",
              translateY: "-50%",
            });
          }}
        />
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
