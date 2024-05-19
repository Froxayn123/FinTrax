import PropTypes from "prop-types";

const Chooser = ({ text }) => {
  return (
    <>
      <div className="flex justify-center items-center space-x-[20px] focus:bg-slate-500">
        <input
          type="radio"
          id={text}
          name="chooser"
          value={text}
          className=" checked:bg-purple-700 checked:hover:bg-purple-700 checked:active:bg-purple-700 checked:focus:bg-purple-700 focus:bg-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 transition-all ease-in-out duration-500"
        />
        <label htmlFor={text} className="text-gray-100 text-[22px] font-medium font-['Roboto'] leading-7">
          {text}
        </label>
      </div>
    </>
  );
};

export default Chooser;

Chooser.propTypes = {
  text: PropTypes.string,
};
