import PropTypes from "prop-types";

const Button = ({ title, onClick, colors }) => {
  return (
    <>
      <button className={`px-[24px] py-[10px] font-roboto text-[16px] text-gray-100 rounded-[8px] capitalize transition-all duration-500 ${colors} bg-size-200 bg-pos-0 hover:bg-pos-100`} onClick={onClick}>
        {title}
      </button>
    </>
  );
};

export default Button;

Button.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  colors: PropTypes.string,
};
