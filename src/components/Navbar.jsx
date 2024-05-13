import LoginButton from "../assets/LoginButton";
import LogoNavbar from "../assets/LogoNavbar";
import NavList from "../assets/NavList";

const Navbar = () => {
  return (
    <>
      <div className="fixed start-[100px] end-[100px] top-[32px] py-[16px] px-[32px] flex justify-between items-center backdrop-blur-[65px] bg-[#1C1C1D0D] rounded-[16px]">
        <LogoNavbar />
        <NavList />
        <LoginButton />
      </div>
    </>
  );
};

export default Navbar;
