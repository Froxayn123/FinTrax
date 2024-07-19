import PropTypes from "prop-types";

const Ellipse = ({ className }) => {
  return <div className={`w-[470px] h-[436px] bg-sky-900 rounded-full blur-[200px] ${className}`}></div>;
};

Ellipse.propTypes = {
  className: PropTypes.string,
};

export default Ellipse;
