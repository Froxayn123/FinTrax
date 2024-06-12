import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LogoSidebar = ({ to }) => {
  return (
    <>
    <div className="">
      <Link to={to} className="flex justify-center items-center">
        <img src="/LogoIcon.png" alt="LogoNNavbar.jsx" className="rounded" />
        <h1 className="font-roboto text-[28px] text-[#E9E9E9] uppercase">fintrax</h1>
      </Link>
      </div>
    </>
  );
};

LogoSidebar.propTypes = {
    to: PropTypes.string,
  };

export default LogoSidebar