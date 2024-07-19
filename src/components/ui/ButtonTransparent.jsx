import PropTypes from "prop-types";

const ButtonTransparent = ({ svg, type, size, title, onClick }) => {
  return (
    <>
      <button
        type={type}
        className={`px-[24px] py-[10px] rounded-[8px] font-roboto text-[${size || "16"}px] capitalize border border-[#ECEFF5] text-[#ECEFF5] hover:bg-[#8C3FD9] hover:border-[#8C3FD9] hover:drop-shadow-[0px_3px_3px_rgba(0,0,0,0.75)] transition-all ease-in-out duration-300 flex justify-center items-center space-x-2`}
        onClick={onClick}
      >
        {svg}
        <h1>{title}</h1>
      </button>
    </>
  );
};

export default ButtonTransparent;

ButtonTransparent.propTypes = {
  svg: PropTypes.object,
  type: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};
