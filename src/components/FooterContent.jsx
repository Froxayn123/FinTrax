// import LocationIcon from "../assets/LocationIcon";
import FBIcon from "../assets/FBIcon";
import TeleIcon from "../assets/TeleIcon";
import IGIcon from "../assets/IGIcon";
import LNIcon from "../assets/LNIcon";
import CopyRight from "../assets/CopyRight";
import { FooterDatas } from "../data/FooterDatas";
import FooterDataCenter from "../assets/FooterDataCenter";

const FooterContent = () => {
  return (
    <>
      <section className="absolute -top-16 w-full flex flex-col justify-center items-center space-y-[64px]">
        <div className=" w-full flex justify-between items-start">
          <div className="flex flex-col justify-start items-start space-y-4">
            <img src="/LogoFooter.png" alt="Logo.png" className="w-[200px] h-[80px]" />
            <p className="w-[200px] text-white text-base font-normal font-['Roboto'] leading-normal tracking-wide text-justify">
              Fintrax helps you track your income and expenses, plan your budget, and achieve your financial goals with ease and confidence.
            </p>
          </div>
          <div className="flex justify-between items-start space-x-[64px]">
            {FooterDatas.head.map((data, i) => {
              return <FooterDataCenter key={i} name={data.name} link={data.link} />;
            })}
          </div>
          <div className="flex flex-col justify-start items-start space-y-[16px]">
            <div className="flex justify-center items-center space-x-[24px]">
              <FBIcon />
              <TeleIcon />
              <IGIcon />
              <LNIcon />
            </div>
            <p className="w-52 text-white text-sm font-normal font-['Roboto'] leading-tight tracking-tight">Follow Us for Financial Tips and More</p>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-2">
          <p className="text-gray-100 text-[16.80px] font-normal font-['Quicksand']">Copyright 2024</p>
          <CopyRight />
          <p className="text-gray-100 text-[16.80px] font-normal font-['Quicksand']">Fintrax</p>
        </div>
      </section>
    </>
  );
};

export default FooterContent;
