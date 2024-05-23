import { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import PropTypes from "prop-types";

const Card = ({ imgSrc, title, price, onButtonClick }) => (
  <div className="relative flex items-center bg-white bg-opacity-5 border-2 border-white border-opacity-20 p-4 rounded-2xl shadow-md">
    <div className="absolute top-2 right-2">
      <button className="bg-white bg-opacity-10 border border-white border-opacity-20 text-white rounded-full w-8 h-8 flex items-center justify-center" onClick={onButtonClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
        </svg>
      </button>
    </div>
    <div>
      <img src={imgSrc} alt={title} className="w-12 h-12 mr-4" />
      <h3 className="text-white text-lg font-medium">{title}</h3>
      <p className="text-gray-400">{price}</p>
    </div>
  </div>
);

Card.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

const Modal = ({ isOpen, onClose, onSave }) => {
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

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

const ContentBudget = () => {
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

  const dataNeeds = {
    labels: ["Needs"],
    datasets: [
      {
        label: "Needs",
        data: [50, 50],
        backgroundColor: ["#FF6826", "#F0F0F0"],
        hoverBackgroundColor: ["#F0F0F0", "#F0F0F0"],
      },
    ],
  };

  const dataWants = {
    labels: ["Wants"],
    datasets: [
      {
        label: "Wants",
        data: [30, 70],
        backgroundColor: ["#1DC624", "#F0F0F0"],
        hoverBackgroundColor: ["#F0F0F0", "#F0F0F0"],
      },
    ],
  };

  const dataSavings = {
    labels: ["Savings"],
    datasets: [
      {
        label: "Savings",
        data: [20, 80],
        backgroundColor: ["#9E9E9E", "#F0F0F0"],
        hoverBackgroundColor: ["#F0F0F0", "#F0F0F0"],
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        display: true,
        color: "#E0E0E0",
        formatter: (value, context) => {
          let sum = 0;
          const dataArr = context.chart.data.datasets[0].data;
          dataArr.forEach((data) => {
            sum += data;
          });
          const percentage = ((value * 100) / sum).toFixed(2) + "%";
          return percentage;
        },
        font: {
          size: 6,
        },
      },
    },
    maintainAspectRatio: false,
  };

  const chartSize = 100;

  return (
    <div className="p-4 ml-12 mt-12 mr-12 rounded-xl">
      <div className="flex justify-between">
        <div className="flex-auto">
          <h1 className="text-white text-3xl font-bold mr-4">Money Allocation</h1>
          <div className="flex">
            <div className="mt-4 mr-4">
              <label className="block text-white text-xl font-medium">Income</label>
              <input type="text" className="bg-transparent mt-2 p-2 rounded border border-white w-52 text-white" placeholder="Ex.100.000" />
            </div>
            <div className="mt-4">
              <label className="block text-white text-xl font-medium">Budgeting Rules</label>
              <select className="bg-transparent mt-2 p-2 rounded border border-white w-52 text-white">
                <option value="rule1" className="text-black">
                  50/30/20
                </option>
                <option value="rule2" className="text-black">
                  70/20/10
                </option>
                <option value="rule3" className="text-black">
                  60/30/10
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col items-center mx-4">
            <div style={{ width: chartSize, height: chartSize }}>
              <Doughnut data={dataNeeds} options={options} plugins={[ChartDataLabels]} />
            </div>
            <h2 className="text-white text-xl font-medium text-center">Needs</h2>
            <h3 className="text-white text-lg text-center">Rp. 840K</h3>
          </div>
          <div className="flex flex-col items-center">
            <div style={{ width: chartSize, height: chartSize }}>
              <Doughnut data={dataWants} options={options} plugins={[ChartDataLabels]} />
            </div>
            <h2 className="text-white text-xl font-medium text-center">Wants</h2>
            <h3 className="text-white text-lg text-center">Rp. 560K</h3>
          </div>
          <div className="flex flex-col items-center">
            <div style={{ width: chartSize, height: chartSize }}>
              <Doughnut data={dataSavings} options={options} plugins={[ChartDataLabels]} />
            </div>
            <h2 className="text-white text-xl font-medium text-center">Savings</h2>
            <h3 className="text-white text-lg text-center">Rp. 1.4M</h3>
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-4 gap-20 gap-y-10">
        {Object.keys(prices).map((category) => (
          <Card key={category} imgSrc={`/${category.replace(/ & | /g, "")}.png`} title={category} price={`Rp. ${prices[category]}.000`} onButtonClick={() => handleCardButtonClick(category)} />
        ))}
      </div>
      <Modal isOpen={modalIsOpen} onClose={handleModalClose} onSave={handleModalSave} />
    </div>
  );
};

export default ContentBudget;
