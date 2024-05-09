import LocationIcon from "../assets/LocationIcon";
import MailIcon from "../assets/MailIcon";
import CallIcon from "../assets/CallIcon";
import FBIcon from "../assets/FBIcon";
import TeleIcon from "../assets/TeleIcon";
import IGIcon from "../assets/IGIcon";
import LNIcon from "../assets/LNIcon";

const Footer = () => {
  return (
    <>
      <section className="px-[100px] w-full absolute start-0 top-96">
        <div className="flex justify-between items-start">
          <div>
            <img src="/Logo.png" alt="Logo.png" />
            <p className="w-[200px] text-white text-base font-normal font-['Roboto'] leading-normal tracking-wide">
              Fintrax helps you track your income and expenses, plan your budget, and achieve your financial goals with ease and confidence.
            </p>
          </div>
          <div className="flex justify-between items-start space-x-[64px]">
            <div className="space-y-[32px]">
              <h1 className="text-fuchsia-500 text-[22px] font-medium font-['Roboto'] leading-7">Contact Us</h1>
              <div className="flex flex-col justify-start items-start space-y-[16px]">
                <div className="flex justify-center items-center space-x-2">
                  <LocationIcon />
                  <p className="text-white text-sm font-normal font-['Roboto'] leading-tight tracking-tight">St. Sudirman 52361, Jakarta</p>
                </div>
                <div className="flex justify-center items-center space-x-2">
                  <MailIcon />
                  <p className="text-white text-sm font-normal font-['Roboto'] leading-tight tracking-tight">fintraxsupport@gmail.ac.id</p>
                </div>
                <div className="flex justify-center items-center space-x-2">
                  <CallIcon />
                  <p className="text-white text-sm font-normal font-['Roboto'] leading-tight tracking-tight">+62 88765432109</p>
                </div>
              </div>
            </div>
            <div className="space-y-[32px]">
              <h1 className="text-fuchsia-500 text-[22px] font-medium font-['Roboto'] leading-7">Features</h1>
              <div className="flex flex-col justify-start items-start space-y-[16px]">
                <div className="flex space-x-2">
                  <p className="text-white text-sm font-normal font-['Roboto'] leading-tight tracking-tight">Record income & expenses</p>
                </div>
                <div className="flex space-x-2">
                  <p className="text-white text-sm font-normal font-['Roboto'] leading-tight tracking-tight">Transaction summary</p>
                </div>
                <div className="flex space-x-2">
                  <p className="text-white text-sm font-normal font-['Roboto'] leading-tight tracking-tight">Plan your budget</p>
                </div>
                <div className="flex space-x-2">
                  <p className="text-white text-sm font-normal font-['Roboto'] leading-tight tracking-tight">Reminders</p>
                </div>
                <div className="flex space-x-2">
                  <p className="text-white text-sm font-normal font-['Roboto'] leading-tight tracking-tight">Saving plan</p>
                </div>
                <div className="flex space-x-2">
                  <p className="text-white text-sm font-normal font-['Roboto'] leading-tight tracking-tight">Financil articles & tips</p>
                </div>
              </div>
            </div>
            <div className="space-y-[32px]">
              <h1 className="text-fuchsia-500 text-[22px] font-medium font-['Roboto'] leading-7">Link</h1>
              <div className="flex flex-col justify-start items-start space-y-[16px]">
                <div className="flex space-x-2">
                  <p className="text-white text-sm font-normal font-['Roboto'] leading-tight tracking-tight">Support</p>
                </div>
                <div className="flex space-x-2">
                  <p className="text-white text-sm font-normal font-['Roboto'] leading-tight tracking-tight">Our Team</p>
                </div>
                <div className="flex space-x-2">
                  <p className="text-white text-sm font-normal font-['Roboto'] leading-tight tracking-tight">User Guide</p>
                </div>
                <div className="flex space-x-2">
                  <p className="text-white text-sm font-normal font-['Roboto'] leading-tight tracking-tight">Privacy Policy</p>
                </div>
                <div className="flex space-x-2">
                  <p className="text-white text-sm font-normal font-['Roboto'] leading-tight tracking-tight">Terms & condition</p>
                </div>
              </div>
            </div>
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
      </section>
    </>
  );
};

export default Footer;
