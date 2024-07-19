import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavDash = ({ title, icon, iconSelected, to }) => {
  return (
    <>
      {window.location.pathname == to ? (
        <Link to={to} className="w-[191px] group flex items-center space-x-2 py-2 px-3 rounded-lg transition ease-in-out bg-white text-[#001833]">
          {iconSelected}
          <span className="text-[22px] font-medium font-['Roboto']">{title}</span>
        </Link>
      ) : (
        <Link to={to} className="w-[191px] group text-white flex items-center space-x-2 py-2 px-3 rounded-lg transition ease-in-out hover:bg-white hover:text-[#001833]">
          {icon}
          <span className="text-[22px] font-medium font-['Roboto']">{title}</span>
        </Link>
      )}
    </>
  );
};

NavDash.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object,
  iconSelected: PropTypes.object,
  to: PropTypes.string,
};

export default NavDash;
