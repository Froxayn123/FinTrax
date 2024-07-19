import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useEffect, useState } from "react";
import MainPageLayout from "@/components/layout/MainPageLayout";
import TipsCard from "@/components/All/TipsCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { TipsDatas } from "@/data/TipsDatas.js";

const FinancialTipsPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    refreshToken();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_APP_BASE_API}/token`);
      const decoded = jwtDecode(response.data.accessToken);
      setUser(decoded);
    } catch (error) {
      console.error("Failed to fetch access token:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <MainPageLayout>
      <header>
        <Navbar profile={user} />
      </header>
      <main className="mx-[100px]">
        <div className="flex flex-col justify-center items-center mt-[200px] space-y-[100px]">
          <div className="flex flex-col justify-center items-center space-y-[32px]">
            <h1 className="text-white text-[40px] font-medium font-['Roboto']">Financial Tips & Articles</h1>
            <p className="text-center text-gray-100 text-xl font-normal font-['Roboto']">
              At FinTrax, we{"'"}re committed to providing you with the latest financial insights, expert advice, and practical tips to help you manage your finances effectively. Our financial tips and articles are designed to empower you
              with the knowledge and tools you need to achieve your financial goals.
            </p>
          </div>
          <div className="w-[1240px] grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center">
            {TipsDatas.map((data, i) => {
              return <TipsCard key={i} title={data.title} img={data.img} desc={data.desc} comments={data.comments} views={data.views} createdAt={data.createdAt} />;
            })}
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </MainPageLayout>
  );
};

export default FinancialTipsPage;
