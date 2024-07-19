import { jwtDecode } from "jwt-decode";
import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "@/components/All/BlogCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MainPageLayout from "@/components/layout/MainPageLayout";
import { BlogDatas } from "@/data/BlogDatas";

const BlogPage = () => {
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
      <main className="p-[100px]">
        <div className="mt-[50px] flex flex-col justify-center items-center space-y-20">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white text-[57px] font-medium font-['Roboto']">Blog</h1>
            <p className="text-center text-gray-100 text-xl font-normal font-['Roboto']">
              At FinTrax, we&apos;re dedicated to providing you with the latest news, trends, and expert advice on personal finance and financial management. Our blog is your go-to resource for staying informed and making informed decisions
              about your financial future.
            </p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center">
            {BlogDatas.map((data) => {
              return <BlogCard key={data.id} title={data.title} img={data.img} desc={data.desc} id={data.id} />;
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

export default BlogPage;
