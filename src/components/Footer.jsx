import FacebookIcon from "@/components/svg/FacebookIcon";
import TelegramIcon from "@/components/svg/TelegramIcon";
import IGIcon from "@/components/ui/IGIcon";
import LNIcon from "@/components/ui/LNIcon";
import CopyrightIcon from "@/components/svg/CopyrightIcon";
import { FooterDatas } from "@/data/FooterDatas";
import FooterDataCenter from "@/components/ui/FooterDataCenter";

const Footer = () => {
  return (
    <>
      <section className="relative flex flex-col justify-center items-center space-y-[64px]">
        <div className="p-[100px] absolute bottom-0 w-full flex flex-col space-y-24">
          <div className="flex justify-between items-start">
            <div className="flex flex-col justify-start items-center md:items-start space-y-4">
              <img src="/LogoFooter.png" alt="Logo.png" className="w-[200px] h-[80px]" />
              <p className="hidden md:block w-[200px] text-white text-base font-normal font-['Roboto'] leading-normal tracking-wide text-center md:text-justify">
                Fintrax helps you track your income and expenses, plan your budget, and achieve your financial goals with ease and confidence.
              </p>
            </div>
            <div className="flex justify-between items-center md:items-start space-x-[64px]">
              {FooterDatas.head.map((data, i) => (
                <FooterDataCenter key={i} name={data.name} link={data.link} />
              ))}
            </div>
            <div className="flex flex-col justify-center md:justify-start items-center md:items-start space-y-[16px]">
              <div className="flex justify-center items-center space-x-[24px]">
                <FacebookIcon />
                <TelegramIcon />
                <IGIcon />
                <LNIcon />
              </div>
              <p className="w-52 text-white text-center md:text-start text-sm font-normal font-['Roboto'] leading-tight tracking-tight">Follow Us for Financial Tips and More</p>
            </div>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <p className="text-gray-100 text-[16.80px] font-normal font-['Quicksand']">CopyrightIcon 2024</p>
            <CopyrightIcon />
            <p className="text-gray-100 text-[16.80px] font-normal font-['Quicksand']">Fintrax</p>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 600" fill="none">
          <path d="M1439.1 600.004H-0.779652C-0.779652 544.097 -0.77975 202.021 -0.903809 143.438C197.666 167.748 356.185 186.044 590.929 143.438C1009.29 67.5069 1439.1 0.00390625 1439.1 0.00390625V600.004Z" fill="#0D243D" />
        </svg>
      </section>
    </>
  );
};

export default Footer;

{
  /* <div className="p-[100px] absolute bottom-0 w-full flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-[64px]">
          
          
          
          
        </div> */
}
