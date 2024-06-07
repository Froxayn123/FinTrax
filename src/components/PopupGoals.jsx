import PropTypes from 'prop-types';

const PopupGoals = ({
  goals,
  activeButton,
  monthlyIncome,
  setMonthlyIncome,
  percentageForSaving,
  setPercentageForSaving,
  targetAmount,
  setTargetAmount,
  handleClosePopup,
  handleGenerateClick,
}) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-[#001833] bg-opacity-90 border-2 border-white border-opacity-20 p-6 rounded-xl shadow-lg w-[1010px]">
      <h2 className="text-2xl text-white mb-4 flex items-center justify-center pb-2 border-b-2 border-[#797979]">
        {activeButton && (
          <img
            src={goals.find((goal) => goal.name === activeButton).img}
            alt={activeButton}
            className="w-6 h-6 mr-2"
          />
        )}
        <span className="ml-2">{activeButton}</span>
      </h2>
      <div className="mb-4">
        <label className="text-white block mb-2">Monthly Income</label>
        <input
          type="number"
          value={monthlyIncome}
          onChange={(e) => setMonthlyIncome(e.target.value)}
          placeholder="Ex. Rp5.000.000"
          className="bg-transparent text-white border border-white w-full p-2 rounded-lg"
        />
      </div>
      <div className="mb-4">
        <label className="text-white block mb-2">Percentage for Saving</label>
        <select
          value={percentageForSaving}
          onChange={(e) => setPercentageForSaving(e.target.value)}
          className="bg-transparent text-white border border-white w-full p-2 rounded-lg"
        >
          <option value="" className="text-black">Select percentage</option>
          <option value="10" className="text-black">10%</option>
          <option value="20" className="text-black">20%</option>
          <option value="30" className="text-black">30%</option>
          <option value="40" className="text-black">40%</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="text-white block mb-2">How much money must be collected</label>
        <input
          type="number"
          value={targetAmount}
          onChange={(e) => setTargetAmount(e.target.value)}
          placeholder="Ex. Rp500.000.000"
          className="bg-transparent text-white border border-white w-full p-2 rounded-lg"
        />
      </div>
      <div className="flex justify-between mt-[32px]">
        <button
          className="p-2 w-2/3 rounded-xl mr-2 shadow-lg bg-transparent border border-white text-white"
          onClick={handleClosePopup}
        >
          Close
        </button>
        <button
          className="p-2 w-2/3 rounded-xl ml-2 shadow-lg bg-gradient-to-r from-[#4E2DD1] to-[#8C3FD9] text-white"
          onClick={handleGenerateClick}
        >
          Generate
        </button>
      </div>
    </div>
  </div>
);

PopupGoals.propTypes = {
    goals: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
      })
    ).isRequired,
    activeButton: PropTypes.string.isRequired,
    monthlyIncome: PropTypes.string.isRequired,
    setMonthlyIncome: PropTypes.func.isRequired,
    percentageForSaving: PropTypes.string.isRequired,
    setPercentageForSaving: PropTypes.func.isRequired,
    targetAmount: PropTypes.string.isRequired,
    setTargetAmount: PropTypes.func.isRequired,
    handleClosePopup: PropTypes.func.isRequired,
    handleGenerateClick: PropTypes.func.isRequired,
  };

export default PopupGoals;
