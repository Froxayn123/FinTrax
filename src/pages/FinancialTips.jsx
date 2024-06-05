import Polygon1 from "../assets/Polygon1";
import Polygon3 from "../assets/Polygon3";
import TipsCard from "../components/TipsCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { TipsDatas } from "../data/TipsDatas.js";

const FinancialTips = () => {
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
            <h1 className="text-white text-[57px] font-medium font-['Roboto']">Financial Tips & Articles</h1>
            <p className="text-center text-gray-100 text-xl font-normal font-['Roboto']">
            At FinTrax, we{"'"}re committed to providing you with the latest financial insights, expert advice, and practical tips to help you manage your finances effectively. Our financial tips and articles are designed to empower you with the knowledge and tools you need to achieve your financial goals.
            </p>
          </div>
          <div className="w-[1240px] grid grid-cols-2 gap-[37px] place-items-center">
            {TipsDatas.map((data, i) => {
              return <TipsCard key={i} title={data.title} img={data.img} desc={data.desc} comments={data.comments} views={data.views} createdAt={data.createdAt} />;
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

export default FinancialTips;
