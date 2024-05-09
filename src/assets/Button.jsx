import PropTypes from "prop-types";

const Button = ({ title }) => {
  return (
    <>
      <button className="px-[24px] py-[10px] font-roboto text-[16px] text-gray-100 rounded-[8px] bg-gradient-to-r from-[#4E2DD1] to-[#8C3FD9] capitalize">{title}</button>
    </>
  );
};

export default Button;

Button.propTypes = {
  title: PropTypes.string,
};
