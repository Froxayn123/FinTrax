import { useState } from "react";
import BudgetCard from "./BudgetCard";
import BudgetModal from "./BudgetModal";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";

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
    <div className="p-4 md:mt-2 mt-10 mr-2 rounded-xl">
      <div className="flex-none md:flex justify-normal md:justify-between mb-[32px]">
        <div className="flex flex-col">
          <div className="flex-none md:flex-auto">
            <h1 className="text-white text-3xl font-bold mb-4">Money Allocation</h1>
            <div className="flex">
              <div className="mb-4 mr-4">
                <label className="block text-white text-xl font-medium">Income</label>
                <input type="text" className="bg-transparent mt-2 p-2 rounded border border-white w-[200px] text-white" placeholder="Ex.100.000" />
              </div>
              <div className="mb-4">
                <label className="block text-white text-xl font-medium">Budgeting Rules</label>
                <select className="bg-transparent mt-2 p-2 rounded border border-white w-[200px] text-white">
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
        </div>
        <div className="flex flex-wrap justify-around">
          <div className="flex flex-col items-center mb-2 md:mb-0">
            <div style={{ width: chartSize, height: chartSize }}>
              <Doughnut data={dataNeeds} options={options} plugins={[ChartDataLabels]} />
            </div>
            <h2 className="text-white text-xl font-medium mt-2">Needs</h2>
            <h3 className="text-white text-lg mt-1">Rp. 840K</h3>
          </div>
          <div className="flex flex-col items-center mb-2 md:mb-0">
            <div style={{ width: chartSize, height: chartSize }}>
              <Doughnut data={dataWants} options={options} plugins={[ChartDataLabels]} />
            </div>
            <h2 className="text-white text-xl font-medium mt-2">Wants</h2>
            <h3 className="text-white text-lg mt-1">Rp. 560K</h3>
          </div>
          <div className="flex flex-col items-center mb-2 md:mb-0">
            <div style={{ width: chartSize, height: chartSize }}>
              <Doughnut data={dataSavings} options={options} plugins={[ChartDataLabels]} />
            </div>
            <h2 className="text-white text-xl font-medium mt-2">Savings</h2>
            <h3 className="text-white text-lg mt-1">Rp. 1.4M</h3>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.keys(prices).map((category) => (
          <BudgetCard key={category} imgSrc={`/${category.replace(/ & | /g, "")}.png`} title={category} price={`Rp. ${prices[category]}.000`} onButtonClick={() => handleCardButtonClick(category)} />
        ))}
      </div>
      <BudgetModal isOpen={modalIsOpen} onClose={handleModalClose} onSave={handleModalSave} />
    </div>
  );
};

export default ContentBudget;
