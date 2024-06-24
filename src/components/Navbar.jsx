import LoginButton from "../assets/LoginButton";
import LogoNavbar from "../assets/LogoNavbar";
import NavList from "../assets/NavList";
import PropTypes from "prop-types";

const Navbar = ({ func }) => {
  return (
    <>
      <div className="fixed start-[100px] end-[100px] top-[32px] py-[16px] px-[32px] flex justify-between items-center backdrop-blur-[65px] bg-[#1C1C1D0D] rounded-[16px] z-50">
        <LogoNavbar to="/" />
        <NavList />
        <LoginButton func={func} />
      </div>
    </>
  );
};

export default Navbar;

Navbar.propTypes = {
  func: PropTypes.func,
};
