import LoginButton from "../assets/LoginButton";
import LogoNavbar from "../assets/LogoNavbar";
import NavList from "../assets/NavList";

const Navbar = () => {
  return (
    <>
      <div className="py-[6px]">
        <div className="px-[32px] my-[32px] py-[16px] flex justify-between items-center backdrop-blur-[65px] bg-[#1C1C1D0D] rounded-[16px]">
          <LogoNavbar />
          <NavList />
          <LoginButton />
        </div>
      </div>
    </>
  );
};

export default Navbar;
