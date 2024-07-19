import PropTypes from "prop-types";

const Button = ({ svg, type, size, title, onClick }) => {
  return (
    <>
      <button
        type={type}
        className={`${size} px-[24px] py-[10px] font-roboto text-[16px] text-gray-100 rounded-[8px] capitalize transition-all duration-500 bg-gradient-primary bg-size-200 bg-pos-0 hover:bg-pos-100 flex justify-center items-center space-x-2`}
        onClick={onClick}
      >
        {svg}
        <h1>{title}</h1>
      </button>
    </>
  );
};

export default Button;

Button.propTypes = {
  svg: PropTypes.object,
  type: PropTypes.string,
  size: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};
