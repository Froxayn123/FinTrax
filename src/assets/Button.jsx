import PropTypes from "prop-types";

const Button = ({ title }) => {
  return (
    <>
      <button className="px-[24px] py-[10px] font-roboto text-[16px] text-gray-100 rounded-[8px] capitalize transition-all duration-500 bg-gradient-to-r to-[#4E2DD1] from-[#8C3FD9] bg-size-200 bg-pos-0 hover:bg-pos-100">{title}</button>
    </>
  );
};

export default Button;

Button.propTypes = {
  title: PropTypes.string,
};
