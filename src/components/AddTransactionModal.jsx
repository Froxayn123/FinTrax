import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const AddTransactionModal = ({ isOpen, onClose, onAddTransaction }) => {
  const getCurrentDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const nameIconMapping = {
    "Food & Beverages": "/FoodBeverages.png",
    Education: "/Education.png",
    Transport: "/Transport.png",
    Housing: "/Housing.png",
    Healthcare: "/Healthcare.png",
    Entertainment: "/Entertainment.png",
    Fashion: "/Fashion.png",
    Makeup: "/Makeup.png",
    Skincare: "/Skincare.png",
    Bodycare: "/Bodycare.png",
    "Travel & Holidays": "/TravelHolidays.png",
    "Debt Payment": "/DebtPayment.png",
    Donate: "/Donate.png",
    Investment: "/Investment.png",
    "Miscellaneous Expense": "/MiscellaneousExpense.png",
  };

  const [newTransaction, setNewTransaction] = useState({
    name: "Food & Beverages",
    date: getCurrentDate(),
    amount: 0,
    category: "Payment",
    icon: nameIconMapping["Food & Beverages"],
    description: "",
  });

  useEffect(() => {
    if (isOpen) {
      setNewTransaction((prev) => ({
        ...prev,
        date: getCurrentDate(),
      }));
    }
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction((prev) => ({
      ...prev,
      [name]: value,
      icon: name === "name" ? nameIconMapping[value] : prev.icon,
    }));
  };

  const handleCategoryChange = (category) => {
    setNewTransaction((prev) => ({ ...prev, category }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction(newTransaction);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-[#001833] bg-opacity-90 px-10 rounded-2xl border-2 border-white border-opacity-20 shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 left-2 text-white text-xl focus:outline-none flex items-center ml-7 mt-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
          </svg>
          <span className="ml-2">Back</span>
        </button>
        <h2 className="text-xl py-5 px-40 font-semibold text-white mb-4 text-center border-b border-[#797979]">Record Your Income and Expenses</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white mb-2">Select Type of Transaction</label>
            <div className="flex space-x-2">
              <button type="button" onClick={() => handleCategoryChange("Payment")} className={`px-3 py-1.5 rounded-lg ${newTransaction.category === "Payment" ? "bg-[#8A00D4] text-white" : "bg-transparent border border-white text-white"}`}>
                Add Income
              </button>
              <button type="button" onClick={() => handleCategoryChange("Receive")} className={`px-3 py-1.5 rounded-lg ${newTransaction.category === "Receive" ? "bg-[#8A00D4] text-white" : "bg-transparent border border-white text-white"}`}>
                Add Expenses
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Select Category</label>
            <select name="name" value={newTransaction.name} onChange={handleChange} className="w-full p-1 px-4 bg-transparent border border-white text-white rounded-lg">
              {Object.keys(nameIconMapping).map((name) => (
                <option key={name} value={name} className="text-black">
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Amount</label>
            <input type="number" name="amount" value={newTransaction.amount} onChange={handleChange} placeholder="Enter the transaction amount" className="w-full p-1 px-4 bg-transparent text-white border border-white rounded-lg" required />
          </div>
          <div className="mb-8">
            <label className="block text-white mb-2">Transaction Detail</label>
            <input type="text" name="description" value={newTransaction.description} onChange={handleChange} placeholder="Ex.Buy shoes Nike " className="w-full  p-1 px-4 bg-transparent text-white border border-white rounded-lg" />
          </div>
          <div className="flex justify-center mb-5">
            <button type="button" onClick={onClose} className="mr-2 px-4 py-1 bg-transparant border text-white rounded-lg hover:bg-[#8A00D4] hover:border-[#8A00D4]">
              Cancel
            </button>
            <button type="submit" className="px-4 py-1 bg-[#8A00D4] text-white rounded-lg">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

AddTransactionModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAddTransaction: PropTypes.func.isRequired,
};

export default AddTransactionModal;
