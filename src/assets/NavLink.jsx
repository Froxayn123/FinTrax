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
      <div id={id} className="w-[100px] h-8 opacity-0 border-b-2 border-fuchsia-500 transition-all ease-in-out duration-500"></div>
      <h1 className="absolute">{title}</h1>
    </Link>
  );
};

export default NavLink;

NavLink.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
};
