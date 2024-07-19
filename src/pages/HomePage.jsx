import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ElementsHero from "@/components/ElementsHero";
import HeroSection from "@/components/section/HeroSection";
import FeaturesSection from "@/components/section/FeaturesSection";
import ArticlesSection from "@/components/section/ArticlesSection";
import KeyFeaturesSection from "@/components/section/KeyFeaturesSection";
import MainPageLayout from "@/components/layout/MainPageLayout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import QuizForm from "@/components/All/QuizForm";
import anime from "animejs";
import { jwtDecode } from "jwt-decode";

const HomePage = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate();
  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (user.exp * 1000 < currentDate.getTime()) {
        const response = await axios.get(`${import.meta.env.VITE_APP_BASE_API}/token`);
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwtDecode(response.data.accessToken);
        setUser(decoded);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_BASE_API}/token`);
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setUser(decoded);
    } catch (error) {
      console.error("Failed to fetch access token:", error.response ? error.response.data : error.message);
    }
  };

  const handlerSubmitQuiz = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosJWT.post(
        `${import.meta.env.VITE_APP_BASE_API}/quiz`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
        {
          answer: ["25-34", "United States", "Employed", "Planning for retirement", "Monthly", "Freelance/Side gigs", "Rp 5.000.000 - Rp 7.499.000", "Housing", "Retirement planning", "Email", "Bill payment reminders", "As needed"],
        }
      );

      console.log(response.data.payload.message);
    } catch (error) {
      console.log("Your answers has been failed sent", +error.response.data);
    }
  };

  return (
    <>
      {token ? (
        <MainPageLayout>
          <header>
            <Navbar profile={user} />
          </header>
          <main className="p-[100px]">
            <ElementsHero />
            <HeroSection
              onClickButton={() => {
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
          <QuizForm onSubmit={handlerSubmitQuiz} />
        </MainPageLayout>
      ) : (
        <MainPageLayout>
          <header>
            <Navbar onClickButton={() => navigate("/login")} />
          </header>
          <main className="p-[100px]">
            <ElementsHero />
            <HeroSection onClickButton={() => navigate("/login")} />
            <FeaturesSection onClickFeature={() => navigate("/login")} />
            <ArticlesSection onClickButton={() => navigate("/login")} />
            <KeyFeaturesSection />
          </main>
          <footer>
            <Footer />
          </footer>
        </MainPageLayout>
      )}
    </>
  );
};

export default HomePage;
