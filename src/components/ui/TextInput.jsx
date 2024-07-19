import PropTypes from "prop-types";

const TextInput = ({ svg, type, placeholder, value, onChange }) => {
  return (
    <>
      <div className="w-full flex justify-center items-center relative">
        <div className="absolute start-3">{svg}</div>
        <input type={type} placeholder={placeholder} className="w-full p-4 ps-10 border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded-lg" value={value} onChange={onChange} required />
      </div>
    </>
  );
};

TextInput.propTypes = {
  svg: PropTypes.object,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextInput;
