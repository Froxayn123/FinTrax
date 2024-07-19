import PropTypes from "prop-types";

const RadioButtonTransparent = ({ name, value, label, svg, checked, onChange, className }) => {
  return (
    <label
      className={`px-[24px] py-[10px] rounded-[8px] font-roboto text-[${className || "16"}px] capitalize border border-[#ECEFF5] text-[#ECEFF5] hover:bg-[#8C3FD9] hover:border-[#8C3FD9] hover:drop-shadow-[0px_3px_3px_rgba(0,0,0,0.75)] transition-all ease-in-out duration-300 flex justify-center items-center space-x-2 has-[:checked]:bg-[#8C3FD9]`}
      htmlFor={value}
    >
      <input id={value} type="radio" className="checked:border-[#8C3FD9] hidden" name={name} value={value} checked={checked} onChange={onChange} />
      {label}
      {svg}
    </label>
  );
};

export default RadioButtonTransparent;

RadioButtonTransparent.propTypes = {
  svg: PropTypes.object,
  name: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
};
