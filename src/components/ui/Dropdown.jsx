import { useState } from "react";
import PropTypes from "prop-types";
import DownIcon from "@/components/svg/DownIcon";

const Dropdown = ({ options, placeholder, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState([]);

  const handleItemClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange && onChange(option[0]);
  };

  return (
    <div className="relative w-full">
      <button type="button" onClick={() => setIsOpen(!isOpen)} className="w-full flex justify-start items-center p-4 text-sm font-medium text-white bg-transparent border border-gray-200 rounded-md space-x-2">
        {selectedOption[1] ? <img src={selectedOption[1]} alt={selectedOption[0]} className="w-[25px]"></img> : ""}
        {selectedOption[0] ? <h1>{selectedOption[0]}</h1> : <h1>{placeholder}</h1>}
        <DownIcon className={isOpen ? "absolute end-4 rotate-180" : "absolute end-4"} />
      </button>
      {isOpen && (
        <div className="h-[250px] absolute z-10 mt-1 w-full rounded-md shadow-lg bg-[#001833] ring-1 ring-black ring-opacity-5 focus:outline-none overflow-y-auto">
          <ul className="py-1 divide-y divide-gray-100">
            {options.map((option) => (
              <li key={option.id} onClick={() => handleItemClick([option.name, option.icon])} className="p-4 text-sm text-white hover:bg-[#001866] flex items-center space-x-2">
                <img src={option.icon} alt="" className="w-[25px]" />
                <h1>{option.name}</h1>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

Dropdown.propTypes = {
  options: PropTypes.array,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
