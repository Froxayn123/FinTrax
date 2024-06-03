import { useState } from "react"
import PropTypes from "prop-types";

import BudgetCard from "./BudgetCard";
import BudgetModal from "./BudgetModal";
import "chart.js/auto";

const PlanModal = ({ onClose }) => {
  const [prices, setPrices] = useState({
    "Food & Beverages": 300,
    Transportation: 200,
    Education: 150,
    Housing: 500,
    Healthcare: 500,
    Donate: 500,
    "Debt Payment": 500,
    Investment: 500,
    Technologies: 500,
    Bodycare: 500,
    Skincare: 500,
    Makeup: 500,
    Fashion: 500,
    "Travel & Holidays": 500,
    Entertainment: 500,
    "Miscellaneous Expense": 500,
    Rent: 500,
    Saving: 500,
    Utilities: 500,
    "Dinning Out": 500,
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);

  const handleCardButtonClick = (cardTitle) => {
    setCurrentCard(cardTitle);
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
    setCurrentCard(null);
  };

  const handleModalSave = (newPrice) => {
    setPrices((prevPrices) => ({
      ...prevPrices,
      [currentCard]: prevPrices[currentCard] + newPrice,
    }));
    handleModalClose();
  };

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
        <div className="mt-8 grid grid-cols-4 gap-5 mb-9">
          {Object.keys(prices).map((category) => (
            <BudgetCard key={category} imgSrc={`/${category.replace(/ & | /g, "")}.png`} title={category} price={`Rp. ${prices[category]}.000`} onButtonClick={() => handleCardButtonClick(category)} />
          ))}
        </div>
        <BudgetModal isOpen={modalIsOpen} onClose={handleModalClose} onSave={handleModalSave} />
      </div>
    </div>
  );
};

PlanModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default PlanModal;
