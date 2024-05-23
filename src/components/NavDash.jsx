import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavDash = ({ title, icon, to }) => {
  return (
    <Link to={to} className="w-[191px] text-white group flex items-center space-x-2 py-2 px-3 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:text-[#001833]">
      {icon}
      <span className="text-[22px] font-medium font-['Roboto']">{title}</span>
    </Link>
  );
};

NavDash.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object,
  to: PropTypes.string,
};

export default NavDash;
