import PropTypes from "prop-types";

const CardTransparent = ({ children, className }) => {
  return <div className={`${className} w-full p-4 border border-white rounded-[15px] bg-gradient-to-br from-white/20 to-transparent backdrop-blur-[14.35px]`}>{children}</div>;
};

CardTransparent.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
};

export default CardTransparent;
