import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LogoNavbar = ({ to }) => {
  return (
    <>
      <Link to={to} className="flex justify-center items-center">
        <img src="/LogoIcon.png" alt="LogoNNavbar.jsx" className="rounded" />
        <h1 className="font-roboto text-[28px] text-[#E9E9E9] uppercase">fintrax</h1>
      </Link>
    </>
  );
};

LogoNavbar.propTypes = {
  to: PropTypes.string,
};

export default LogoNavbar;
