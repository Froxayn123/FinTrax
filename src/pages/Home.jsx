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
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Home = () => {
  const counter = useSelector((state) => state.counterQuiz.counter);
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
  }, []);

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get(`${import.meta.env.VITE_APP_BASE_API}/token`);
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwtDecode(response.data.accessToken);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const refreshToken = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_BASE_API}/token`, {}, { withCredentials: true });
      setToken(response.data.accessToken);
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
        <Navbar />
      </header>
      <main className="mx-[100px]">
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
