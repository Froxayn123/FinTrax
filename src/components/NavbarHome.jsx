import { Link } from "react-router-dom";
import LogoNavbar from "../assets/LogoNavbar";
import NavList from "../assets/NavList";

const NavbarHome = () => {
  return (
    <>
      <div className="fixed start-[100px] end-[100px] top-[32px] py-[16px] px-[32px] flex justify-between items-center backdrop-blur-[65px] bg-[#1C1C1D0D] rounded-[16px]">
        <LogoNavbar />
        <NavList />
        <Link to="/overview">
          <button className="flex items-center rounded-full font-roboto  capitalize text-[#ECEFF5] hover:bg-[#8C3FD9] hover:border-[#8C3FD9] hover:drop-shadow-[0px_3px_3px_rgba(0,0,0,0.75)] transition-all ease-in-out duration-300">
            <img src={"Avatar.png"} alt="Profile" className="w-[50px] h-[50px] " />
          </button>
        </Link>
      </div>
    </>
  );
};

export default NavbarHome;
