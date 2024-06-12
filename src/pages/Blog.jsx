import Polygon1 from "../assets/Polygon1";
import Polygon3 from "../assets/Polygon3";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { BlogDatas } from "../data/BlogDatas";

const Blog = () => {
  return (
    <>
      <Polygon1 />
      <Polygon3 />
      <header>
        <Navbar />
      </header>
      <main className="mx-[100px]">
        <div className="flex flex-col justify-center items-center mt-[200px] space-y-[100px]">
          <div className="flex flex-col justify-center items-center space-y-[32px]">
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
    </>
  );
};

export default Blog;
