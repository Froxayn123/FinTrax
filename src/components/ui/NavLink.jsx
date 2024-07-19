import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NavLink = ({ title, id, to }) => {
  const onHover = () => {
    document.getElementById(id).style = "opacity: 1";
  };

  const offHover = () => {
    document.getElementById(id).style = "opacity: 0";
  };

  return (
    <>
      {window.location.pathname == to ? (
        <Link to={to} className="flex flex-col justify-center items-center" onMouseEnter={onHover} onMouseLeave={offHover}>
          <h1>{title}</h1>
          <div className="h-[2px] self-stretch opacity-100 bg-fuchsia-500 transition-all ease-in-out duration-500"></div>
        </Link>
      ) : (
        <Link to={to} className="flex flex-col justify-center items-center" onMouseEnter={onHover} onMouseLeave={offHover}>
          <h1>{title}</h1>
          <div id={id} className="h-[2px] self-stretch opacity-0 bg-fuchsia-500 transition-all ease-in-out duration-500"></div>
        </Link>
      )}
    </>
  );
};

export default NavLink;

NavLink.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  to: PropTypes.string,
};
