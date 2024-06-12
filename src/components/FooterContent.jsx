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
  <section>
    <div className="md:-top-40  absolute -top-1 w-full flex flex-col justify-center items-center space-y-8 px-4 md:space-y-[64px] md:flex-row md:justify-between md:items-start">
  <div className="flex flex-col justify-start items-center space-y-4 md:items-start">
    <img src="/LogoFooter.png" alt="Logo.png" className="w-[200px] h-[80px] md:w-[200px] md:h-[80px]" />
    <p className="hidden md:flex w-[200px] text-white text-base font-normal font-['Roboto'] leading-normal tracking-wide text-center md:text-justify">
      Fintrax helps you track your income and expenses, plan your budget, and achieve your financial goals with ease and confidence.
    </p>
  </div>
  <div className=" flex justify-between items-start space-x-[64px]">
  {FooterDatas.head.map((data, i) => {
              return <FooterDataCenter key={i} name={data.name} link={data.link} />;
            })}
  </div>
  <div className="flex flex-col justify-start items-center space-y-[16px] md:flex md:flex-col md:justify-start md:items-start">
    <div className="flex justify-center items-center space-x-[24px]">
        <FBIcon />
        <TeleIcon />
        <IGIcon />
        <LNIcon />
    </div>
    <p className="w-52 text-white text-sm font-normal font-['Roboto'] leading-tight tracking-tight text-center md:text-left">Follow Us for Financial Tips and More</p>
  </div>
  </div>
</section>
    </>
  );
};

export default FooterContent;
