import { useState } from "react";
import PropTypes from "prop-types";

const BudgetModal = ({ isOpen, onClose, onSave }) => {
  const [inputValue, setInputValue] = useState("");

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(parseFloat(inputValue));
    setInputValue("");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#001833] bg-opacity-90 border-2 border-white border-opacity-20 p-4 rounded-xl">
        <h2 className="text-xl font-bold mb-4 text-white border-b-2 border-[#797979] pb-2 pr-40">Enter the Budget Amount</h2>
        <input type="number" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="bg-transparent border border-white p-2 mb-4 w-full rounded-lg text-white" placeholder="Ex.100.000" />
        <div className="flex justify-start">
          <button onClick={onClose} className="bg-transparent px-2 py-1 rounded-xl mr-4 text-white border border-white">
            Cancel
          </button>
          <button onClick={handleSave} className=" text-white px-5 py-1 rounded-xl" style={{ background: 'linear-gradient(to right, #4E2DD1 50%, #8C3FD9 100%)' }}>
            Ok
          </button>
        </div>
      </div>
    </div>
  );
};

BudgetModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default BudgetModal;
