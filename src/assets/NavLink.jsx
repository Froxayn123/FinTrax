import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavLink = ({ title, id }) => {
  const onHover = () => {
    document.getElementById(id).style = "opacity: 1";
  };

  const offHover = () => {
    document.getElementById(id).style = "opacity: 0";
  };

  return (
    <Link className="relative flex justify-center items-center" onMouseEnter={onHover} onMouseLeave={offHover}>
      <div id={id} className="w-[98px] h-5 opacity-0 bg-gradient-to-tr from-fuchsia-500 via-fuchsia-500 to-violet-700 rounded-full blur-[15px] transition-all ease-in-out duration-300"></div>
      <h1 className="absolute">{title}</h1>
    </Link>
  );
};

export default NavLink;

NavLink.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
};
